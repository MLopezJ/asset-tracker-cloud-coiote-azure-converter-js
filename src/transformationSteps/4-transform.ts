import {
	Barometer_3315_urn,
	Device_3_urn,
	Humidity_3304_urn,
	Location_6_urn,
	Temperature_3303_urn,
} from '@nordicsemiconductor/lwm2m-types'
import { createBatery } from 'src/createBatery'
import { createConfig, type Config_50009 } from 'src/createConfig'
import { createEnviromental } from 'src/createEnviromental'
import { createGnss } from 'src/createGnss'
import type { objects } from '../main'

export const transformation = (input: objects, serverTime: number): any => {
	const deviceObject = input.lwm2m[Device_3_urn]
	if (deviceObject === undefined) return undefined

	const temperature = input.lwm2m[Temperature_3303_urn]
	if (temperature === undefined) return undefined

	const humidity = input.lwm2m[Humidity_3304_urn]
	if (humidity === undefined) return undefined

	const barometer = input.lwm2m[Barometer_3315_urn]
	if (barometer === undefined) return undefined

	const location = input.lwm2m[Location_6_urn]
	if (location === undefined) return undefined

	const config = input.customObjects['5009']
	if (config === undefined) return undefined

	const batery = createBatery(deviceObject, serverTime)
	if (batery === undefined) return undefined

	const enviromental = createEnviromental(
		temperature,
		humidity,
		barometer,
		serverTime,
	)
	if (enviromental === undefined) return undefined

	const gnss = createGnss(location, serverTime)
	if (gnss === undefined) return undefined

	const cfg = createConfig(config as Config_50009)

	return {
		bat: batery,
		env: enviromental,
		gnss: gnss,
		cfg,
		dev: {
			v: {
				imei: '352656106111232', // /3/0/2
				iccid: '89450421180216216095', // ***** origin missing *****
				modV: 'mfw_nrf9160_1.0.0', // /3/0/3
				brdV: 'thingy91_nrf9160', // /3/0/0
			},
			ts: 1563968743666, // /3/0/13 || server timestmap
		},
		roam: {
			v: {
				band: 3, // ***** origin missing *****
				nw: 'NB-IoT', // /4/0/0
				rsrp: -97, // 4/0/2
				area: 12, // /4/0/12
				mccmnc: 24202, // /4/0/10 & /4/0/9
				cell: 33703719, // /4/0/8
				ip: '10.81.183.99', // /4/0/4
				eest: 7, // ***** origin missing *****
			},
			ts: 1563968743666, // server timestmap
		},
		firmware: {
			fwUpdateStatus: 'current',
			currentFwVersion: '0.0.0-development',
			pendingFwVersion: '',
		},
	}
}
