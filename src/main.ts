import type { LwM2MDocument } from '@nordicsemiconductor/lwm2m-types'
import { buildLwM2M } from './buildLwM2M'
import { group } from './group'

export type NoValue = Record<string, never> //{}
export type value = { value: string | number | boolean }
export type listValue = { '0': value | NoValue; attributes: { dim: string } } //TODO: solve this. Record<string, value | NoValue> & { attributes: {dim: string} }
export type valueOptions = value | NoValue | listValue // list or value
export type attribute = Record<string, valueOptions> // attribute id: value options
export type objectInstance = Record<string, attribute> // instance id: attribute id
export type CoioteAzure = Record<string, objectInstance> // object id: instance id

export type deviceTwin = {
	properties: {
		desired: unknown
		reported: { lwm2m: CoioteAzure; $metadata: unknown; $version: number }
	}
}

export type customObjectValue = Record<string, number | string | boolean>
export type customObject = Record<string, customObjectValue>

export type objects = {
	lwm2m: LwM2MDocument
	customObjects: customObject
}

/**
 *
 */
export const main = (deviceTwin: deviceTwin): objects => {
	const objects = group(deviceTwin.properties.reported.lwm2m)
	console.log(objects.lwm2m)

	const lwm2m = buildLwM2M(objects.lwm2m)

	const result = {
		lwm2m,
		customObjects: {
			'50001': {
				'0': 5,
				'1': 128,
				'7': 403,
			},
			'50009': {
				'0': true,
				'2': 120,
				'3': 600,
				'4': 7200,
				'1': 120,
				'5': 8.5,
				'8': 2.5,
				'9': 0.5,
			},
		},
	}
	return result
}
