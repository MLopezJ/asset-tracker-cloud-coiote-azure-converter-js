import LwM2MSchema from '../node_modules/@nordicsemiconductor/lwm2m-types/LwM2MDocument.schema.json' // TODO: import from "@nordicsemiconductor/lwm2m-types"
import type { objectInstance } from './group'

/**
 * Set the LwM2M format as expected in @nordicsemiconductor/lwm2m-types
 */
export const buildLwM2MObject = (urn: string, input: objectInstance): any => {
	const objectSchema =
		LwM2MSchema.properties[urn as keyof (typeof LwM2MSchema)['properties']]

	if (objectSchema !== undefined)
		return convertObjectUsingSchema(objectSchema, input)

	return null
}

const convertObjectUsingSchema = (
	schema: Record<string, any>,
	input: objectInstance,
) => {
	switch (schema.title) {
		case 'LwM2M Server':
			return [
				{
					'0': 1,
					'1': 50,
					'6': false,
					'7': 'U',
					'16': true,
					'23': false,
				},
			]
		case 'Device':
			return {
				'0': 'Nordic Semiconductor ASA',
				'1': 'Thingy:91',
				'2': '351358815340515',
				'3': '22.8.1+0',
				'11': 0,
				'13': 1675874731000,
				'16': 'UQ',
				'19': '3.2.1',
			}
		default:
			return null
	}
}
