import { Type, type TInteger } from '@sinclair/typebox'

/**
 * @see https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/Timestamp.ts
 */
export const Timestamp = (qualifier?: string): TInteger =>
	Type.Integer({
		description: `Timestamp as Unix epoch with millisecond precision (UTC)${
			qualifier !== undefined ? ` ${qualifier}` : ''
		}`,
		minimum: 1234567890123,
		examples: [1584533788029],
	})
