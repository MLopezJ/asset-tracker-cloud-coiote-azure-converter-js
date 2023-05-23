import type { LwM2MDocument } from '@nordicsemiconductor/lwm2m-types'
import { objectIdtoUrn } from './objectIdtoUrn'
import { removeFormat } from './removeFormat'

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
 * Split the Coiote's Azure LwM2M json in 2 groups:
 *
 * 1- Recognized LwM2M type objects
 * 2- Not recognized LwM2M type objects (custom objects)
 *
 * The @nordicsemiconductor/lwm2m-types is used to determinated if an object is recognized as LwM2M type or not.
 */
export const group = (deviceTwin: deviceTwin): objects => {
	const objects: CoioteAzure = deviceTwin.properties.reported.lwm2m
	const customObjects: Record<string, any> = {}

	for (const [objectId, value] of Object.entries(objects)) {
		const urn = objectIdtoUrn(objectId)

		// not a LwM2M object
		if (urn === null) {
			// custom object
			customObjects[`${objectId}`] = removeFormat(value)
		}
		console.log(customObjects)
	}

	const lwm2m: LwM2MDocument = {
		'1:1.2@1.2': [
			{
				'0': 1,
				'1': 50,
				'6': false,
				'7': 'U',
				'16': true,
				'23': false,
			},
		],
		'3:1.2@1.1': {
			'0': 'Nordic Semiconductor ASA',
			'1': 'Thingy:91',
			'2': '351358815340515',
			'3': '22.8.1+0',
			'11': 0,
			'13': 1476186613,
			'16': 'UQ',
			'19': '3.2.1',
		},
		'6': { '0': -43.5723, '1': 153.2176, '2': 2, '5': 1665149633, '6': 5 },
		'3315:1.1': [
			{
				'5601': 101697,
				'5602': 101705,
				'5700': 101705,
				'5701': 'Pa',
			},
		],
		'3347:1.1': [
			{
				'5500': false,
				'5501': 0,
				'5750': 'Button 0',
			},
		],
		'3420': [{ '1': '#000000' }],
		'10256': [{ '0': 428, '2': 6300, '3': 52, '4': 14, '5': 0 }],
	}

	const groupObjects = {
		lwm2m: lwm2m,
		customObjects: customObjects,
	}
	return groupObjects
}
