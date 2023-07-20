import {
	ConnectivityMonitoring_4_urn,
	Device_3_urn,
	Humidity_3304_urn,
	Location_6_urn,
	LwM2MDocument,
	Pressure_3323_urn,
	Temperature_3303_urn,
} from '@nordicsemiconductor/lwm2m-types'
import type { assetTracker } from './schemas/AssetTracker'
import type { Config_50009 } from './schemas/Config_50009'
import { transformToBattery } from './transformToAssetTracker/battery'
import { transformToConfig } from './transformToAssetTracker/config'
import { transformToDevice } from './transformToAssetTracker/device'
import { transformToEnvironmental } from './transformToAssetTracker/environmental'
import { transformToGnss } from './transformToAssetTracker/gnss'
import { transformToRoam } from './transformToAssetTracker/roam'

export type customObjectValue = Record<string, number | string | boolean>
export type customObject = Record<string, customObjectValue>

export type objects = {
	lwm2m: LwM2MDocument
	customObjects: customObject
}

export const transformation = (
	input: objects,
	serverTime: number,
): assetTracker | undefined => {
	const deviceObject = input.lwm2m[Device_3_urn]
	const temperature = input.lwm2m[Temperature_3303_urn]
	const humidity = input.lwm2m[Humidity_3304_urn]
	const pressure = input.lwm2m[Pressure_3323_urn]
	const location = input.lwm2m[Location_6_urn]
	const connectivityMonitoring = input.lwm2m[ConnectivityMonitoring_4_urn]
	const config = input.customObjects['5009']

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

	const bat = transformToBattery(deviceObject, serverTime)
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
		bat === undefined ||
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
