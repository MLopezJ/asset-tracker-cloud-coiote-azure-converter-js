import type { LwM2MDocument } from '@nordicsemiconductor/lwm2m-types'
import _ from 'lodash'
import assign from 'lodash.assign'
import LwM2MSchema from '../node_modules/@nordicsemiconductor/lwm2m-types/LwM2MDocument.schema.json' // TODO: import from "@nordicsemiconductor/lwm2m-types"
import { convertListUsingSchema } from './convertListUsingSchema'
import { convertObjectUsingSchema } from './convertObjectUsingSchema'
import type { CoioteAzure } from './main'
//import { convertObjectUsingSchema } from './convertObjectUsingSchema'

/**
 * Set LwM2M format as expected in @nordicsemiconductor/lwm2m-types
 */
export const buildLwM2M = (objects: CoioteAzure[]): LwM2MDocument => {
	const list = objects.map((element) => {
		const urn = Object.keys(element)[0]
		const value = Object.values(element)[0]

		if (urn === undefined) return null // add test
		if (value === undefined) return null

		const schema =
			LwM2MSchema.properties[
				urn as unknown as keyof (typeof LwM2MSchema)['properties']
			]

		if (schema.type === 'array') {
			return { [urn]: convertListUsingSchema(value, schema) }
		}

		return { [urn]: convertObjectUsingSchema(value, schema) }
	})

	return assign.apply(_, list as any)
}
