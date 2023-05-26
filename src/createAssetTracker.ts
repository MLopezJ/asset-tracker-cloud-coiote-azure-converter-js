import type { assetTracker } from './assetTracker/AssetTracker'
import { createBatery } from './createBatery'
import type { objects } from './main'

/**
 * Create Asset Tracker input
 */
export const createAssetTracker = (
	input: objects,
): assetTracker | undefined => {
	const deviceObject = input.lwm2m['3:1.2@1.1']
	if (deviceObject === undefined) return undefined

	const config = createConfig()

	const device = createDevice()

	const roamingInfo = createRoamingInfo()

	const batery = createBatery(deviceObject)
	if (batery === undefined) return undefined

	const enviromental = createEnviromental()

	const gnss = createGnss()

	return {
		cfg: config,
		dev: device,
		roam: roamingInfo,
		bat: batery,
		env: enviromental,
		gnss: gnss,
	}
}

const createConfig = () => {
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

const createDevice = () => {
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

const createRoamingInfo = () => {
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

const createEnviromental = () => {
	return {
		v: {
			temp: 15,
			hum: 30,
			atmp: 10,
		},
		ts: 123456,
	}
}

const createGnss = () => {
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
