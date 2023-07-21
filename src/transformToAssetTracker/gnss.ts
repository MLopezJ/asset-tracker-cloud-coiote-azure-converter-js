import type { GNSSData } from '@nordicsemiconductor/asset-tracker-cloud-docs/protocol'
import type { Location_6 } from '@nordicsemiconductor/lwm2m-types'

/**
 * Transform input into GNSS format
 */
export const transformToGnss = (
	location: Location_6,
	serverTime: number,
): GNSSData | undefined => {
	if (
		location[3] === undefined ||
		location[2] === undefined ||
		location[6] === undefined
	) {
		console.error('missing values: ', {
			lat: location[0],
			alt: location[2],
			spd: location[6],
		})
		return undefined
	}

	return {
		v: {
			lng: location[1],
			lat: location[0],
			acc: location[3],
			alt: location[2],
			spd: location[6],
			hdg: 176.12, // ***** origin missing *****
		},
		ts: location[5] === undefined ? serverTime : location[5],
	}
}
