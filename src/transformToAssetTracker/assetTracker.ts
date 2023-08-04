import type { AzureReportedData as assetTracker } from '@nordicsemiconductor/asset-tracker-cloud-docs/protocol'
import {
	Barometer_3315_urn,
	Device_3_urn,
	Humidity_3304_urn,
	Temperature_3303_urn,
} from '@nordicsemiconductor/lwm2m-types'
import type { metadata } from 'src/utils/getTimestamp'
import type { objects } from '../buildAssetTrackerFormat'
import { transformToBattery } from './battery'
import { transformToEnvironmental } from './environmental'

/**
 * Transform input into Asset Tracker format
 */
export const TransformToAssetTracker = (
	input: objects,
): assetTracker | undefined => {
	const deviceObject = input.lwm2m[Device_3_urn]
	if (deviceObject === undefined) return undefined

	const temperature = input.lwm2m[Temperature_3303_urn]
	if (temperature === undefined) return undefined

	const humidity = input.lwm2m[Humidity_3304_urn]
	if (humidity === undefined) return undefined

	const barometer = input.lwm2m[Barometer_3315_urn]
	if (barometer === undefined) return undefined

	const config = transformToConfig()

	const device = transformToDevice()

	const roamingInfo = transformToRoamingInfo()

	const batery = transformToBattery(deviceObject, {} as unknown as metadata)
	if (batery instanceof Error) return undefined

	const enviromental = transformToEnvironmental(
		temperature,
		humidity,
		barometer,
		1,
	)
	if (enviromental === undefined) return undefined

	const gnss = transformToGnss()

	return {
		cfg: config,
		dev: device,
		roam: roamingInfo,
		bat: batery,
		env: enviromental,
		gnss: gnss,
	}
}

const transformToConfig = () => {
	return {
		act: false,
		actwt: 60,
		mvres: 300,
		mvt: 3600,
		loct: 60,
		accath: 10.5,
		accith: 5.2,
		accito: 1.7,
		nod: ['gnss'],
	}
}

const transformToDevice = () => {
	return {
		v: {
			imei: '352656106111232',
			iccid: '89450421180216216095',
			modV: 'mfw_nrf9160_1.0.0',
			brdV: 'thingy91_nrf9160',
		},
		ts: 123456,
	}
}

const transformToRoamingInfo = () => {
	return {
		v: {
			band: 262143,
			nw: 'LTE-M',
			rsrp: -97,
			area: 12,
			mccmnc: 24202,
			cell: 33703719,
			ip: '2001:db8:85a3::8a2e:370:7334',
			eest: 7,
		},
		ts: 123456,
	}
}

const transformToGnss = () => {
	return {
		v: {
			lng: 100,
			lat: 50,
			acc: 5,
			alt: 1,
			spd: 0,
			hdg: 180,
		},
		ts: 123456,
	}
}
