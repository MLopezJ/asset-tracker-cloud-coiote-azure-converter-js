import _ from 'lodash'
import assign from 'lodash.assign'
import type LwM2MSchema from '../node_modules/@nordicsemiconductor/lwm2m-types/LwM2MDocument.schema.json' // TODO: import from "@nordicsemiconductor/lwm2m-types"
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
			const instance = Object.entries(resources).map(([resourceId, value]) => {
				const isRequired = schema.items.required.includes(resourceId) // TODO: fix it
				const dataType = schema.items.properties[`${resourceId}`].type // TODO: fix it
				const newValue = setValue(value as any, isRequired, dataType)
				return {
					[`${resourceId}`]: newValue,
				}
			})

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

/**
 * Remove the 'value' key from element
 * Remove empty values
 * Set data type
 * TODO: add test
 */
const setValue = (
	oldValue: Record<'value', string | number | boolean> | Record<string, never>,
	isRequired: boolean,
	dataType?: string,
) => {
	const value = oldValue.value

	if (value === undefined) {
		if (isRequired === true) return 'error'
		return undefined
	}

	switch (dataType) {
		case 'number':
		case 'integer':
			return Number(value)
		case 'boolean':
			return Boolean(value)
		default:
			return String(value)
	}
}
