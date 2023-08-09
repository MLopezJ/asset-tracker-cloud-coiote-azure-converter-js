import type { EnvironmentData } from '@nordicsemiconductor/asset-tracker-cloud-docs/protocol'
import {
	type Humidity_3304,
	Humidity_3304_urn,
	type Pressure_3323,
	Pressure_3323_urn,
	type Temperature_3303,
	Temperature_3303_urn,
} from '@nordicsemiconductor/lwm2m-types'
import { getTimestamp, type metadata } from '../utils/getTimestamp.js'

/**
 * Transform Temperature, Humidity and Pressure LwM2M objects into the environment object expected by Asset Tracker web app
 *
 * @see https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/blob/saga/documents/environment.md
 */
export const transformToEnvironmental = (
	temperature: Temperature_3303,
	humidity: Humidity_3304,
	pressure: Pressure_3323,
	deviceTwinMetadata: metadata,
): EnvironmentData => {
	const temp = temperature[0] ? temperature[0]['5700'] : undefined
	const hum = humidity[0] ? humidity[0]['5700'] : undefined
	const atmp = pressure[0] ? pressure[0]['5700'] : undefined

	if (temp === undefined || hum === undefined || atmp === undefined)
		throw new Error(
			`input format is not the expected: ${{
				temperature,
				humidity,
				pressure,
			}}`,
		)

	let time: number | undefined = temperature[0]
		? temperature[0]['5518']
		: undefined

	if (time === undefined && humidity[0]?.['5518'] != undefined)
		time = humidity[0]['5518']

	if (time === undefined && pressure[0]?.['5518'] != undefined)
		time = pressure[0]['5518']

	if (time === undefined) {
		try {
			time = getTimestamp(Temperature_3303_urn, 5518, deviceTwinMetadata)
		} catch {
			try {
				time = getTimestamp(Humidity_3304_urn, 5518, deviceTwinMetadata)
			} catch {
				time = getTimestamp(Pressure_3323_urn, 5518, deviceTwinMetadata)
			}
		}
	}

	return {
		v: {
			temp,
			hum,
			atmp,
		},
		ts: time,
	}
}
