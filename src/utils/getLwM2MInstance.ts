import type { LwM2MDocumentSchema } from '@nordicsemiconductor/lwm2m-types'
import _ from 'lodash'
import assign from 'lodash.assign'
import type { instance } from '../main'
import { convertResourceUsingSchema } from '../utils/convertResourceUsingSchema'

/**
 *  Remove coiote format from instance of a LwM2M object and convert using the given schema
 */
export const getLwM2MInstance = (
	input: instance,
	schema: (typeof LwM2MDocumentSchema.properties)[keyof (typeof LwM2MDocumentSchema)['properties']],
): Record<string, unknown> | undefined => {
	const resources = input['0'] ?? []
	const instance = Object.entries(resources)
		.map(([resourceId, value]) => {
			const isRequired = schema.required.includes(resourceId)
			const dataType = schema.properties[`${resourceId}`].type
			const resource = convertResourceUsingSchema(
				value,
				resourceId,
				isRequired,
				dataType,
			)
			if (resource === false) {
				console.log(
					`id ${resourceId} is required in object in order with schema definition but it is missing`,
					schema,
				)
			}
			return resource
		})
		.filter((result) => result !== undefined) // remove empty values

	if (instance.includes(false)) return undefined

	return assign.apply(_, instance as any)
}
