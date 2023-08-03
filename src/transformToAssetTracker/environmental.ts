import type { EnvironmentData } from '@nordicsemiconductor/asset-tracker-cloud-docs/protocol'
import type {
	Humidity_3304,
	Pressure_3323,
	Temperature_3303,
} from '@nordicsemiconductor/lwm2m-types'

/**
 * Transform Temperature, Humidity and Pressure LwM2M objects into the environment object expected by Asset Tracker web app
 *
 * @see https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/blob/saga/documents/environment.md
 */
export const transformToEnvironmental = (
	temperature: Temperature_3303,
	humidity: Humidity_3304,
	pressure: Pressure_3323,
	serverTime: number,
): EnvironmentData | undefined => {
	const temp = temperature[0] ? temperature[0]['5700'] : undefined
	const hum = humidity[0] ? humidity[0]['5700'] : undefined
	const atmp = pressure[0] ? pressure[0]['5700'] : undefined

	if (temp === undefined || hum === undefined || atmp === undefined) {
		console.log('input format is not the expected', { temp, hum, atmp })
		return undefined
	}

	let time = temperature[0] ? temperature[0]['5518'] : undefined

	if (time === undefined && humidity[0] && humidity[0]['5518'] != undefined)
		time = humidity[0]['5518']

	if (time === undefined && pressure[0] && pressure[0]['5518'] != undefined)
		time = pressure[0]['5518']

	if (time === undefined) time = serverTime

	return {
		v: {
			temp,
			hum,
			atmp,
		},
		ts: time,
	}
}
