import { Static, Type } from '@sinclair/typebox'
import { $id } from './$id.js'
import { Timestamp } from './Timestamp.js'

/**
 * @see https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/Reported.ts
 */
export const Environment = Type.Object(
	{
		v: Type.Object(
			{
				temp: Type.Number({
					description: 'Temperature reading from external sensor',
				}),
				hum: Type.Number({
					description: 'Humidity reading from external sensor',
					minimum: 1,
					maximum: 100,
				}),
				atmp: Type.Number({
					description:
						'Atmospheric pressure reading from external sensor in kPa',
					minimum: 0,
				}),
			},
			{
				description: 'The individual sensor readings',
			},
		),
		ts: Timestamp(),
	},
	{
		$id: $id('environment'),
		description: 'Environment sensor readings',
	},
)

export type environmental = Static<typeof Environment>
