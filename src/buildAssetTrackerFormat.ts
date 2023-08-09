import type { AzureReportedData as assetTracker } from '@nordicsemiconductor/asset-tracker-cloud-docs/protocol'
import {
	ConnectivityMonitoring_4_urn,
	Device_3_urn,
	Humidity_3304_urn,
	Location_6_urn,
	type LwM2MDocument,
	Pressure_3323_urn,
	Temperature_3303_urn,
} from '@nordicsemiconductor/lwm2m-types'
import { Config_50009_urn } from './getAssetTrackerObjects.js'
import type { AssetTrackerLwM2MFormat } from './removeCoioteFormat'
import type { Config_50009 } from './schemas/Config_50009'
import { transformToBattery } from './transformToAssetTracker/battery.js'
import { transformToConfig } from './transformToAssetTracker/config.js'
import { transformToDevice } from './transformToAssetTracker/device.js'
import { transformToEnvironmental } from './transformToAssetTracker/environmental.js'
import { transformToGnss } from './transformToAssetTracker/gnss.js'
import { transformToRoam } from './transformToAssetTracker/roam.js'
import type { metadata } from './utils/getTimestamp'
import type { customObject } from './utils/setCustomFormat'

export type objects = {
	lwm2m: LwM2MDocument
	customObjects: customObject
}

/**
 * Check and transform input into expected format
 */
export const buildAssetTrackerFormat = (
	input: AssetTrackerLwM2MFormat,
	deviceTwinMetadata: metadata,
): assetTracker => {
	const device = input[Device_3_urn]
	if (device === undefined) throw new Error('Device (3) object is missing')

	const temperature = input[Temperature_3303_urn]
	if (temperature === undefined)
		throw new Error('Temperature (3303) object is missing')

	const humidity = input[Humidity_3304_urn]
	if (humidity === undefined)
		throw new Error('Humidity (3304) object is missing')

	const pressure = input[Pressure_3323_urn]
	if (pressure === undefined)
		throw new Error('Pressure (3323) object is missing')

	const location = input[Location_6_urn]
	if (location === undefined) throw new Error('Location (6) object is missing')

	const connectivityMonitoring = input[ConnectivityMonitoring_4_urn]
	if (connectivityMonitoring === undefined)
		throw new Error('Connectivity Monitoring (4) object is missing')

	const config = input[Config_50009_urn]
	if (config === undefined) throw new Error('Config (50009) object is missing')

	const bat = transformToBattery(device, deviceTwinMetadata)
	if (bat instanceof Error) throw bat

	const env = transformToEnvironmental(
		temperature,
		humidity,
		pressure,
		deviceTwinMetadata,
	)
	if (env instanceof Error) throw env

	const gnss = transformToGnss(location, deviceTwinMetadata)
	if (gnss instanceof Error) throw gnss

	const cfg = transformToConfig(config as Config_50009)
	if (cfg === undefined)
		throw new Error('Transformation of config is not possible')

	const dev = transformToDevice(device, deviceTwinMetadata)
	if (dev instanceof Error) throw dev

	const roam = transformToRoam(connectivityMonitoring, deviceTwinMetadata)
	if (roam instanceof Error) throw roam

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
