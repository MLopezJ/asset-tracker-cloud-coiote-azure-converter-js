import { Timestamp } from './Timestamp.js'
import { Type } from '@sinclair/typebox'
import { $id } from './$id.js'

export const GNSS = Type.Object(
	{
		v: Type.Object({
			lng: Type.Number({
				description: 'Longitude',
				minimum: -180,
				maximum: 180,
			}),
			lat: Type.Number({
				description: 'Latitude',
				minimum: -90,
				maximum: 90,
			}),
			acc: Type.Number({
				description: 'Accuracy (2D 1-sigma) in meters',
				minimum: 0,
			}),
			alt: Type.Number({
				description: 'Altitude above WGS-84 ellipsoid in meters',
			}),
			spd: Type.Number({
				description: 'Horizontal speed in meters',
				minimum: 0,
			}),
			hdg: Type.Number({
				description: 'Heading of movement in degrees',
				minimum: 0,
				maximum: 360,
			}),
		}),
		ts: Timestamp(),
	},
	{
		$id: $id('GNSS'),
		description: 'The GNSS reading',
	},
)