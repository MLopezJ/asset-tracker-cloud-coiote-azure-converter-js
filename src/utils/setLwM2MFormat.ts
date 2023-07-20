import type { LwM2MDocument } from '@nordicsemiconductor/lwm2m-types'
import { LwM2MDocumentSchema } from '@nordicsemiconductor/lwm2m-types'
import type { objectWithUrn } from '../group'
import { convertToLwM2MArrayInstance } from './convertToLwM2MArrayInstance'
import { convertToLwM2MInstance } from './convertToLwM2MInstance'

/**
 * Set LwM2M format using @nordicsemiconductor/lwm2m-types json schema
 */
export const setLwM2MFormat = (objects: objectWithUrn[]): LwM2MDocument =>
	objects.reduce((previousObjects, current) => {
		const urn = Object.keys(current)[0]
		const instances = Object.values(current)[0]

		if (urn === undefined || instances === undefined) {
			console.error('missing values ', { urn, instances })
			return {}
		}

		const schema =
			LwM2MDocumentSchema.properties[
				urn as unknown as keyof (typeof LwM2MDocumentSchema)['properties']
			]

		if (schema.type === 'array') {
			return {
				[urn]: convertToLwM2MArrayInstance(instances, schema),
				...previousObjects,
			}
		}

		return {
			[urn]: convertToLwM2MInstance(instances, schema),
			...previousObjects,
		} // instances should be instance, because it is an object in this case
	}, {}) as unknown as LwM2MDocument
