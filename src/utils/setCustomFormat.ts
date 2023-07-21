import customObjectsSchema from '../../customObjects.schema.json'
import type { lwm2mCoiote } from '../converter'
import { convertObjectUsingSchema } from './convertObjectUsingSchema'
import { removeFormat } from './removeFormat'

export type customObjectValue = Record<string, number | string | boolean>
export type customObject = Record<string, customObjectValue>

/**
 * Remove coiote format from custom objects and set format taking custom object schema if it exist
 */
export const setCustomFormat = (objects: lwm2mCoiote[]): customObject =>
	objects.reduce((previousObjects: customObject, current) => {
		const urn = Object.keys(current)[0] as string
		const instances = Object.values(current)[0]

		if (urn === undefined || instances === undefined) {
			console.error('missing values ', { urn, instances })
			return {}
		}

		const schema =
			customObjectsSchema.properties[
				urn as unknown as keyof (typeof customObjectsSchema)['properties']
			]

		if (schema === undefined) {
			return {
				[`${urn}`]: removeFormat(instances),
				...previousObjects,
			} as customObject
		}

		return {
			[urn]: convertObjectUsingSchema(instances, schema),
			...previousObjects,
		} as customObject
	}, {})
