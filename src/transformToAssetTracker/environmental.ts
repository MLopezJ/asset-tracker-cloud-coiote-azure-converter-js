import type { EnvironmentData } from '@nordicsemiconductor/asset-tracker-cloud-docs/protocol'
import {
	type Humidity_3304,
	Humidity_3304_urn,
	type Pressure_3323,
	Pressure_3323_urn,
	type Temperature_3303,
	Temperature_3303_urn,
} from '@nordicsemiconductor/lwm2m-types'
import { checkAllRequired } from '../utils/checkAllRequired.js'
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
	const temp = temperature?.[0]?.['5700']
	const hum = humidity?.[0]?.['5700']
	const atmp = pressure?.[0]?.['5700']

	const maybeValidRequiredValues = checkAllRequired({ temp, hum, atmp })
	if ('error' in maybeValidRequiredValues)
		throw new Error(maybeValidRequiredValues.error)

	let time =
		temperature?.[0]?.['5518'] ??
		humidity?.[0]?.['5518'] ??
		pressure?.[0]?.['5518']

	if (time === undefined)
		time = getTimestamp(
			[Temperature_3303_urn, Humidity_3304_urn, Pressure_3323_urn],
			5518,
			deviceTwinMetadata,
		)

	return {
		v: {
			temp: temp!,
			hum: hum!,
			atmp: atmp!,
		},
		ts: time,
	}
}
