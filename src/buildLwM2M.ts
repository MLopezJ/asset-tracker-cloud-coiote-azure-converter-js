import type { LwM2MDocument } from '@nordicsemiconductor/lwm2m-types'
import LwM2MSchema from '../node_modules/@nordicsemiconductor/lwm2m-types/LwM2MDocument.schema.json' // TODO: import from "@nordicsemiconductor/lwm2m-types"
import type { CoioteAzure } from './main'
//import { convertObjectUsingSchema } from './convertObjectUsingSchema'

/**
 * Set LwM2M format as expected in @nordicsemiconductor/lwm2m-types
 */
export const buildLwM2M = (objects: CoioteAzure[]): LwM2MDocument => {
	objects.map((element) => {
		const urn = Object.keys(element)[0]
		const value = Object.values(element)[0]

		const schema =
			LwM2MSchema.properties[
				urn as unknown as keyof (typeof LwM2MSchema)['properties']
			]

		if (value === undefined) return null

		console.log(schema)
		//console.log(convertObjectUsingSchema(value, schema[`${urn}`]))
	})

	return {
		'1:1.2@1.2': [
			{
				'0': 1,
				'1': 50,
				'6': false,
				'7': 'U',
				'16': true,
				'23': false,
			},
		],
		'3:1.2@1.1': {
			'0': 'Nordic Semiconductor ASA',
			'1': 'Thingy:91',
			'2': '351358815340515',
			'3': '22.8.1+0',
			'11': 0, //[0],
			'13': 1476186613,
			'16': 'UQ',
			'19': '3.2.1',
		},
		'6': { '0': -43.5723, '1': 153.2176, '2': 2, '5': 1665149633, '6': 5 },
	}
}
