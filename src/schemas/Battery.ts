import { Static, Type } from '@sinclair/typebox'
import { $id } from './$id.js'
import { Timestamp } from './Timestamp.js'

/**
 * @see https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/Reported.ts
 */
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

export type batery = Static<typeof Battery>
