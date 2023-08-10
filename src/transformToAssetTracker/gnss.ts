import type { GNSSData } from '@nordicsemiconductor/asset-tracker-cloud-docs/protocol'
import {
	type Location_6,
	Location_6_urn,
} from '@nordicsemiconductor/lwm2m-types'
import { getTimestamp, type metadata } from '../utils/getTimestamp.js'

/**
 * Transform Location LwM2M object into the environment object expected by Asset Tracker web app
 *
 * @see https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/blob/saga/documents/gnss.md
 */
export const transformToGnss = (
	location: Location_6,
	deviceTwinMetadata: metadata,
): GNSSData => {
	const defaultHdg = 0
	if (
		location['3'] === undefined ||
		location['2'] === undefined ||
		location['6'] === undefined
	)
		throw new Error(
			`required values are missing: ${JSON.stringify({
				lat: location['0'],
				alt: location['2'],
				spd: location['6'],
			})}`,
		)

	const time =
		location[5] ?? getTimestamp(Location_6_urn, 5, deviceTwinMetadata)

	return {
		v: {
			lng: location[1],
			lat: location[0],
			acc: location[3],
			alt: location[2],
			spd: location[6],
			hdg: defaultHdg, // ***** origin missing *****
		},
		ts: time,
	}
}

// export const allRequired = () => false //TODO: remove
