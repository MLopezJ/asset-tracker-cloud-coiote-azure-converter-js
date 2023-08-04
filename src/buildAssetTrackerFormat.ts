import type { AzureReportedData as assetTracker } from '@nordicsemiconductor/asset-tracker-cloud-docs/protocol'
import {
	ConnectivityMonitoring_4_urn,
	Device_3_urn,
	Humidity_3304_urn,
	Location_6_urn,
	LwM2MDocument,
	Pressure_3323_urn,
	Temperature_3303_urn,
} from '@nordicsemiconductor/lwm2m-types'
import { Config_50009_urn } from './getAssetTrackerObjects'
import type { AssetTrackerLwM2MFormat } from './removeCoioteFormat'
import type { Config_50009 } from './schemas/Config_50009'
import { transformToBattery } from './transformToAssetTracker/battery'
import { transformToConfig } from './transformToAssetTracker/config'
import { transformToDevice } from './transformToAssetTracker/device'
import { transformToEnvironmental } from './transformToAssetTracker/environmental'
import { transformToGnss } from './transformToAssetTracker/gnss'
import { transformToRoam } from './transformToAssetTracker/roam'
import type { metadata } from './utils/getTimestamp'
import type { customObject } from './utils/setCustomFormat'

export type objects = {
	lwm2m: LwM2MDocument
	customObjects: customObject
}

export const buildAssetTrackerFormat = (
	input: AssetTrackerLwM2MFormat,
	serverTime: number,
): assetTracker | undefined => {
	const deviceObject = input[Device_3_urn]
	const temperature = input[Temperature_3303_urn]
	const humidity = input[Humidity_3304_urn]
	const pressure = input[Pressure_3323_urn]
	const location = input[Location_6_urn]
	const connectivityMonitoring = input[ConnectivityMonitoring_4_urn]
	const config = input[Config_50009_urn]

	if (
		deviceObject === undefined ||
		temperature === undefined ||
		humidity === undefined ||
		pressure === undefined ||
		location === undefined ||
		connectivityMonitoring === undefined ||
		config === undefined
	) {
		console.error('missing values: ', {
			deviceObject,
			temperature,
			humidity,
			pressure: pressure,
			location,
			connectivityMonitoring,
			config,
		})
		return undefined
	}

	const bat = transformToBattery(deviceObject, {} as unknown as metadata) // TODO: update
	const env = transformToEnvironmental(
		temperature,
		humidity,
		pressure,
		serverTime,
	)
	const gnss = transformToGnss(location, serverTime)
	const cfg = transformToConfig(config as Config_50009)
	const dev = transformToDevice(deviceObject, serverTime)
	const roam = transformToRoam(connectivityMonitoring, serverTime)

	if (
		bat instanceof Error || // TODO: return error
		env === undefined ||
		gnss === undefined ||
		cfg === undefined ||
		dev === undefined ||
		roam === undefined
	) {
		console.error('missing values: ', {
			bat,
			env,
			gnss,
			cfg,
			dev,
			roam,
		})
		return undefined
	}

	return {
		bat,
		env,
		gnss,
		cfg,
		dev,
		roam,
		firmware: {
			fwUpdateStatus: 'current',
			currentFwVersion: '0.0.0-development',
			pendingFwVersion: '',
		},
	}
}
