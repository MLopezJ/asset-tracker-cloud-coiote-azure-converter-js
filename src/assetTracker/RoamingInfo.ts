import { Type } from '@sinclair/typebox'
import { Area, Cell, EARFCN, RSRP } from './NeighboringCellMeasurements.js'
import { $id } from './$id.js'
import { Timestamp } from './Timestamp.js'

export const RoamingInfo = Type.Object(
	{
		v: Type.Object({
			band: EARFCN,
			nw: Type.String({
				description: 'Network mode',
				minLength: 1,
				examples: ['LTE-M', 'NB-IoT'],
			}),
			rsrp: RSRP,
			area: Area,
			mccmnc: Type.Integer({
				description: 'Mobile country code and mobile network code',
				minimum: 10000,
				maximum: 999999,
				examples: [24202, 310410],
			}),
			cell: Cell,
			ip: Type.String({
				description: 'IP address',
				minLength: 1,
				examples: [
					'10.81.183.99',
					'2001:0db8:85a3:0000:0000:8a2e:0370:7334',
					'2001:db8:85a3::8a2e:370:7334',
				],
			}),
			eest: Type.Optional(
				Type.Unsafe({
					type: 'integer',
					enum: [5, 6, 7, 8, 9],
					description:
						'The %CONEVAL AT command returns amongst other data the energy estimate: Relative estimated energy consumption of data transmission compared to nominal consumption. A higher value means smaller energy consumption. 5: Difficulties in setting up connections. Maximum number of repetitions might be needed for data. 6: Poor conditions. Setting up a connection might require retries and a higher number of repetitions for data. 7: Normal conditions for cIoT device. No repetitions for data or only a few repetitions in the worst case. 8: Good conditions. Possibly very good conditions for small amounts of data. 9: Very good conditions. Efficient data transfer estimated also for larger amounts of data.',
					examples: [5, 7],
				}),
			),
		}),
		ts: Timestamp(),
	},
	{
		$id: $id('roaming'),
		description:
			'Roaming information. This information shall be updated by the device every time it publishes primary application data. It is considered low-priority information so it should always be sent after the primary application data has been published.',
	},
)