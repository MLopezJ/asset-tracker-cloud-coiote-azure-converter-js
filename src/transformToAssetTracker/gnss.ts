import type { GNSSData } from '@nordicsemiconductor/asset-tracker-cloud-docs/protocol'
import {
	type Location_6,
	Location_6_urn,
} from '@nordicsemiconductor/lwm2m-types'
import { checkAllRequired } from '../utils/checkAllRequired.js'
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
	const lat = location['0']
	const alt = location['2']
	const spd = location['6']
	const lng = location['1']
	const acc = location['3']

	const maybeValidRequiredValues = checkAllRequired({ lat, alt, spd, lng, acc })
	if ('error' in maybeValidRequiredValues)
		throw new Error(maybeValidRequiredValues.error)

	const time =
		location[5] ?? getTimestamp(Location_6_urn, 5, deviceTwinMetadata)

	return {
		v: {
			lng,
			lat,
			acc: acc as number,
			alt: alt as number,
			spd: spd as number,
			hdg: defaultHdg, // ***** origin missing *****
		},
		ts: time,
	}
}
