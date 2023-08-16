import {
	GNSS,
	type GNSSData,
	validateWithType,
} from '@nordicsemiconductor/asset-tracker-cloud-docs/protocol'
import {
	type Location_6,
	Location_6_urn,
} from '@nordicsemiconductor/lwm2m-types'
import { fromSecondsToMilliseconds } from '../utils/fromSecondsToMilliseconds.js'
import { getTimestamp, type Metadata } from '../utils/getTimestamp.js'

/**
 * Transform Location LwM2M object into the environment object expected by Asset Tracker web app
 *
 * @see https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/blob/saga/documents/gnss.md
 */
export const transformToGnss = (
	location: Location_6,
	deviceTwinMetadata: Metadata,
): { result: GNSSData } | { error: Error } => {
	const defaultHdg = 0
	const lat = location['0']
	const alt = location['2']
	const spd = location['6']
	const lng = location['1']
	const acc = location['3']

	const time =
		location['5'] != null
			? fromSecondsToMilliseconds(location['5'])
			: getTimestamp(Location_6_urn, 5, deviceTwinMetadata)

	const object = {
		v: {
			lng,
			lat,
			acc,
			alt,
			spd,
			hdg: defaultHdg, // ***** origin missing *****
		},
		ts: time,
	}

	const maybeValidGnss = validateWithType(GNSS)(object)
	if ('errors' in maybeValidGnss)
		return { error: new Error(JSON.stringify(maybeValidGnss.errors)) }

	return { result: maybeValidGnss }
}
