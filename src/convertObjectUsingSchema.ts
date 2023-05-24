import type LwM2MSchema from '../node_modules/@nordicsemiconductor/lwm2m-types/LwM2MDocument.schema.json' // TODO: import from "@nordicsemiconductor/lwm2m-types"
import type { objectInstance } from './main'

/**
 * Convert object following the given schema
 */
export const convertObjectUsingSchema = (
	object: objectInstance,
	schema: (typeof LwM2MSchema.properties)[keyof (typeof LwM2MSchema)['properties']],
): Record<string, unknown> | Record<string, unknown>[] | undefined => {
	console.log(schema)

	if (schema.type === 'array')
		return [
			{
				'0': 1,
				'1': 50,
				'7': 'U',
				'23': false,
			},
		]

	return {
		'3:1.2@1.1': {
			'0': 'Nordic Semiconductor ASA',
			'1': 'Thingy:91',
			'11': [0],
			'16': 'UQ',
		},
	}
}
