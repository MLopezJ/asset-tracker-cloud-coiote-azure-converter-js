import { parseURN } from '@nordicsemiconductor/lwm2m-types'
import { fromStringToUnixTimestamp } from './fromStringToUnixTimestamp.js'

type lastUpdate = { $lastUpdated: string }
export type value_metadata = { value: lastUpdate; $lastUpdated: string }

type resourceId = number // TODO: string
export type resource_metadata = Record<resourceId, value_metadata> & lastUpdate

type instanceId = number // TODO: string
export type instance_metadata = Record<instanceId, resource_metadata> &
	lastUpdate

type objectId = number
export type lwm2m_metadata = Record<objectId, instance_metadata> & lastUpdate

export type metadata = {
	$lastUpdated: string
	lwm2m: lwm2m_metadata
}

/**
 *
 * Pick timestamp from metadata object following Timestamp Hierarchy
 * @see https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js#timestamp-hierarchy
 */
const timestampHierarchy = (
	metadata: metadata,
	ObjectID: string,
	resourceId: number,
):
	| { value: number }
	| {
			error: Error
	  } => {
	let lastUpdated = undefined
	if (metadata.lwm2m === undefined)
		return {
			error: new Error(
				`lwm2m object does not exist in metadata: ${JSON.stringify(metadata)}`,
			),
		}

	const objectMetadata = metadata.lwm2m[ObjectID as unknown as number] // TODO: this make no sense
	if (objectMetadata !== undefined) {
		if (objectMetadata?.['0'] !== undefined) {
			// resource metadata
			lastUpdated =
				objectMetadata?.['0']?.[`${resourceId}`]?.value?.['$lastUpdated']

			if (lastUpdated !== undefined) {
				return { value: fromStringToUnixTimestamp(lastUpdated) }
			}
			// resource metadata

			// instance metadata
			lastUpdated = objectMetadata?.['0']?.['$lastUpdated']
			if (lastUpdated !== undefined) {
				return { value: fromStringToUnixTimestamp(lastUpdated) }
			}
			// instance metadata
		}

		// Object metadata
		lastUpdated = objectMetadata?.['$lastUpdated']
		if (lastUpdated !== undefined) {
			return { value: fromStringToUnixTimestamp(lastUpdated) }
		}
		// Object metadata
	}

	// LwM2M metadata
	lastUpdated = metadata.lwm2m?.['$lastUpdated']
	if (lastUpdated !== undefined) {
		return { value: fromStringToUnixTimestamp(lastUpdated) }
	}
	// LwM2M metadata

	// metadata
	lastUpdated = metadata['$lastUpdated']
	if (lastUpdated !== undefined) {
		return { value: fromStringToUnixTimestamp(lastUpdated) }
	}
	// metadata

	return {
		error: new Error(
			`Not possible to select timestamp for resource '${resourceId}' in object '${ObjectID}' from: ${metadata}`,
		),
	}
}

/**
 * Get the related timestamp in Device Twin metadata for resource
 */
export const getTimestamp = (
	objectURN: string | string[],
	resourceId: number,
	metadata: metadata,
): number | { error: Error } => {
	const objectsURNs =
		Array.isArray(objectURN) === true ? objectURN : [objectURN]
	let timestamp = 0

	for (const urn of objectsURNs) {
		const { ObjectID } = parseURN(urn as string)
		const maybeValidTimestamp = timestampHierarchy(
			metadata,
			ObjectID,
			resourceId,
		)

		if ('error' in maybeValidTimestamp)
			return { error: maybeValidTimestamp.error }

		if (timestamp === undefined || maybeValidTimestamp.value > timestamp)
			timestamp = maybeValidTimestamp.value
	}

	return timestamp
}
