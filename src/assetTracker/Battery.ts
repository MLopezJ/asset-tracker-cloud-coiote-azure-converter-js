import { Timestamp } from './Timestamp.js'
import { Type } from '@sinclair/typebox'
import { $id } from './$id.js'

export const Battery = Type.Object(
	{
		v: Type.Integer({
			description: 'Battery reading read by the modem',
			minimum: 1,
		}),
		ts: Timestamp(),
	},
	{
		$id: $id('battery'),
		description: 'Battery reading in millivolt',
	},
)