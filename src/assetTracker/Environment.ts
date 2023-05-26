import { Timestamp } from './Timestamp.js'
import { Type, Static } from '@sinclair/typebox'
import { $id } from './$id.js'

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

export type enviromental = Static<typeof Environment>
