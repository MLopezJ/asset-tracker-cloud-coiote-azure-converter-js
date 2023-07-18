import _ from 'lodash'
import assign from 'lodash.assign'
import customObjectsSchema from '../../customObjects.schema.json'
import type { lwm2mCoiote } from '../index'
import { convertObjectUsingSchema } from './convertObjectUsingSchema'
import { removeFormat } from './removeFormat'

/**
 * Remove coiote format from custom objects and set format taking custom object schema if it exist
 */
export const setCustomFormat = (objects: lwm2mCoiote[]): any | undefined => {
	const list = objects.map((obj) => {
		const urn = Object.keys(obj)[0]
		const instances = Object.values(obj)[0]

		if (urn === undefined) {
			console.log('URN of object not found:', obj)
			return null
		}

		if (instances === undefined) {
			console.log('instance/s of object not found:', instances)
			return null
		}

		const schema =
			customObjectsSchema.properties[
				urn as unknown as keyof (typeof customObjectsSchema)['properties']
			]

		if (schema === undefined) {
			return { [`${urn}`]: removeFormat(instances) }
		}

		return { [urn]: convertObjectUsingSchema(instances, schema) }
	})

	const wrongFormatObjects = list.filter((element) => element === null)
	if (wrongFormatObjects.length > 0) return undefined

	return assign.apply(_, list as any)
}
