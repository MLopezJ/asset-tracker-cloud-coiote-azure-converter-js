import type { LwM2MDocumentSchema } from '@nordicsemiconductor/lwm2m-types'
import _ from 'lodash'
import assign from 'lodash.assign'
import type { instance } from '../main'
import { convertResourceUsingSchema } from './convertResourceUsingSchema'

/**
 * Remove coiote format from instances of a LwM2M object and convert to list using the given schema
 */
export const getLwM2MInstances = (
	input: instance,
	schema: (typeof LwM2MDocumentSchema.properties)[keyof (typeof LwM2MDocumentSchema)['properties']],
): Record<string, unknown>[] | undefined => {
	const instances = Object.entries(input)
	const requiredResources: string[] = schema.items.required // required resources in the LwM2M shcema definition of that object
	return instances.map(([instanceId, resources]) => {
		const instance = Object.entries(resources)
			.map(([resourceId, value]) => {
				const isRequired = requiredResources.includes(resourceId)
				const dataType = schema.items.properties[`${resourceId}`].type
				const resource = convertResourceUsingSchema(
					value,
					resourceId,
					isRequired,
					dataType,
				)

				if (resource === false) {
					console.log(
						`id ${resourceId} is required in object in order with schema definition but missing in instance ${instanceId}`,
						schema,
					)
				}

				return resource
			})
			.filter((result) => result !== undefined) // remove empty values

		if (instance.includes(false)) return undefined

		return assign.apply(_, instance as any)
	})
}
