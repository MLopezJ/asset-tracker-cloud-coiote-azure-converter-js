import {
	ConnectivityMonitoring_4_urn,
	Device_3_urn,
	Humidity_3304_urn,
	Location_6_urn,
	Pressure_3323_urn,
	Temperature_3303_urn,
} from '@nordicsemiconductor/lwm2m-types'
import { createBatery } from '../createBatery'
import { createConfig, type Config_50009 } from '../createConfig'
import { createDevice } from '../createDevice'
import { createEnviromental } from '../createEnviromental'
import { createGnss } from '../createGnss'
import { createRoam } from '../createRoam'
import type { objects } from '../main'

export const transformation = (input: objects, serverTime: number): any => {
	const deviceObject = input.lwm2m[Device_3_urn]
	if (deviceObject === undefined) return undefined

	const temperature = input.lwm2m[Temperature_3303_urn]
	if (temperature === undefined) return undefined

	const humidity = input.lwm2m[Humidity_3304_urn]
	if (humidity === undefined) return undefined
	
	const presure = input.lwm2m[Pressure_3323_urn]
	if (presure === undefined) return undefined
	
	const location = input.lwm2m[Location_6_urn]
	if (location === undefined) return undefined

	const connectivityMonitoring = input.lwm2m[ConnectivityMonitoring_4_urn]
	if (connectivityMonitoring === undefined) return undefined

	const config = input.customObjects['5009']
	if (config === undefined) return undefined

	const bat = createBatery(deviceObject, serverTime)
	if (bat === undefined) return undefined

	const env = createEnviromental(temperature, humidity, presure, serverTime)
	if (env === undefined) return undefined

	const gnss = createGnss(location, serverTime)
	if (gnss === undefined) return undefined

	const cfg = createConfig(config as Config_50009)

	const dev = createDevice(deviceObject, serverTime)

	const roam = createRoam(connectivityMonitoring, serverTime)

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