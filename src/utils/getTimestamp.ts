import { parseURN } from '@nordicsemiconductor/lwm2m-types'

type lastUpdate = { $lastUpdated: string }
export type value_metadata = { value: lastUpdate; $lastUpdated: string }

type resourceId = number // string
export type resource_metadata = Record<resourceId, value_metadata> & lastUpdate

type instanceId = number // string
export type instance_metadata = Record<instanceId, resource_metadata> &
	lastUpdate

type objectId = number
export type lwm2m_metadata = Record<objectId, instance_metadata> & lastUpdate

export type metadata = {
	$lastUpdated: string
	lwm2m: lwm2m_metadata
}

/**
 * Set hierarchy to select the timestamp from Device Twin
 */
export const getTimestamp = (
	objectURN: string,
	resourceId: number,
	metadata: metadata,
): number | Error => {
	const { ObjectID } = parseURN(objectURN)
	let lastUpdated = undefined
	if (metadata.lwm2m === undefined)
		return Error(`metadata object does not exist: ${metadata}`)

	const objectMetadata = metadata.lwm2m[ObjectID as unknown as number] // TODO: this make no sense
	if (objectMetadata !== undefined) {
		if (objectMetadata?.['0'] !== undefined) {
			// resource metadata
			lastUpdated = objectMetadata?.['0']?.[resourceId]?.value?.['$lastUpdated']

			if (lastUpdated !== undefined) {
				return fromStringToUnixTimestamp(lastUpdated)
			}
			// resource metadata

			// instance metadata
			lastUpdated = objectMetadata?.['0']?.['$lastUpdated']
			if (lastUpdated !== undefined) {
				return fromStringToUnixTimestamp(lastUpdated)
			}
			// instance metadata
		}

		// Object metadata
		lastUpdated = objectMetadata?.['$lastUpdated']
		if (lastUpdated !== undefined) {
			return fromStringToUnixTimestamp(lastUpdated)
		}
		// Object metadata
	}

	// LwM2M metadata
	lastUpdated = metadata.lwm2m?.['$lastUpdated']
	if (lastUpdated !== undefined) {
		return fromStringToUnixTimestamp(lastUpdated)
	}
	// LwM2M metadata

	// metadata
	lastUpdated = metadata['$lastUpdated']
	if (lastUpdated !== undefined) {
		return fromStringToUnixTimestamp(lastUpdated)
	}
	// metadata

	return Error(`Not possible to select timestamp: ${metadata}`)
}

/**
 * Convert date time to Unix Timestamp
 *
 * from -> '2023-08-03T12:11:03.0324459Z'
 * to -> 1691064663032
 */
const fromStringToUnixTimestamp = (time: string) => {
	const unixTimestamp = Date.parse(time)
	return unixTimestamp.valueOf()
}
