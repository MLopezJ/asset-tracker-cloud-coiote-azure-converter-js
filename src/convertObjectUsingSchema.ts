import _ from 'lodash'
import assign from 'lodash.assign'
import type LwM2MSchema from '../node_modules/@nordicsemiconductor/lwm2m-types/LwM2MDocument.schema.json' // TODO: import from "@nordicsemiconductor/lwm2m-types"
import { setValue, validValue } from './checkCoioteValue'
import type { objectInstance } from './main'

/**
 * Convert object following the given schema
 */
export const convertObjectUsingSchema = (
	object: objectInstance,
	schema: (typeof LwM2MSchema.properties)[keyof (typeof LwM2MSchema)['properties']],
): Record<string, unknown> | Record<string, unknown>[] | undefined => {
	const elements = Object.entries(object)
	if (schema.type === 'array') {
		return elements.map(([instanceId, resources]) => {
			const instance = Object.entries(resources)
				.map(([resourceId, value]) => {
					const isRequired = schema.items.required.includes(resourceId) // TODO: fix it

					const isValid = validValue(value as any, isRequired) // TODO: remove any
					if (isValid === false) {
						console.log(
							`id ${resourceId} is required in object in order with schema definition but missing in instance ${instanceId}`,
							schema,
						)
						return false
					}

					// empty value
					if (Object.keys(value).length === 0) return undefined

					const dataType = schema.items.properties[`${resourceId}`].type // TODO: fix it
					const newValueFormat = setValue(value as any, dataType)
					return {
						[`${resourceId}`]: newValueFormat,
					}
				})
				.filter((result) => result !== undefined) // remove empty values

			if (instance.includes(false)) return undefined

			return assign.apply(_, instance as any)
		})
	}

	return {
		'3:1.2@1.1': {
			'0': 'Nordic Semiconductor ASA',
			'1': 'Thingy:91',
			'11': [0],
			'16': 'UQ',
		},
	}
}
