import type { LwM2MDocument } from '@nordicsemiconductor/lwm2m-types'
import { LwM2MDocumentSchema } from '@nordicsemiconductor/lwm2m-types'
import _ from 'lodash'
import assign from 'lodash.assign'
import type { objectWithUrn } from '../group'
import { getLwM2MInstance } from './getLwM2MInstance'
import { getLwM2MInstances } from './getLwM2MInstances'

/**
 * Set LwM2M format using @nordicsemiconductor/lwm2m-types json schema
 */
export const setLwM2MFormat = (objects: objectWithUrn[]): LwM2MDocument => {
	const list = objects.map((obj) => {
		const urn = Object.keys(obj)[0]
		const instances = Object.values(obj)[0]

		if (urn === undefined) return null // add test
		if (instances === undefined) return null

		const schema =
			LwM2MDocumentSchema.properties[
				urn as unknown as keyof (typeof LwM2MDocumentSchema)['properties']
			]

		if (schema.type === 'array') {
			return { [urn]: getLwM2MInstances(instances, schema) }
		}

		return { [urn]: getLwM2MInstance(instances, schema) } // instances should be instance, because it is an object in this case
	})

	return assign.apply(_, list as any)
}
