import { parseURN } from '@nordicsemiconductor/lwm2m-types'
import { fromStringToUnixTimestamp } from './fromStringToUnixTimestamp.js'

export type Metadata = {
	$lastUpdated: string
	lwm2m: LwM2M_Metadata
}

export type LwM2M_Metadata = {
	[key: `${number}`]: Obj // object ID : object
	$lastUpdated: string
}

type Obj = {
	[key: `${number}`]: Instance // Instance id : instance
	$lastUpdated: string
}

type Instance = {
	[key: `${number}`]: Resource // Resource id : resource
	$lastUpdated: string
}

type Resource = {
	$lastUpdated: string
	value: {
		$lastUpdated: string
	}
}

/**
 *
 * Pick timestamp from metadata object following Timestamp Hierarchy
 * @see https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js#timestamp-hierarchy
 */
const timestampHierarchy = (
	metadata: Metadata,
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

	const lwm2m = metadata.lwm2m
	const object = lwm2m[`${ObjectID as unknown as number}`]
	if (object !== undefined) {
		const instance = object?.['0']
		if (instance !== undefined) {
			const resource = instance[`${resourceId}`]

			if (resource !== undefined) {
				lastUpdated = resource.value.$lastUpdated
				if (lastUpdated !== undefined) {
					return { value: fromStringToUnixTimestamp(lastUpdated) }
				}
			}

			lastUpdated = instance?.['$lastUpdated']
			if (lastUpdated !== undefined) {
				return { value: fromStringToUnixTimestamp(lastUpdated) }
			}
		}

		lastUpdated = object?.['$lastUpdated']
		if (lastUpdated !== undefined) {
			return { value: fromStringToUnixTimestamp(lastUpdated) }
		}
	}

	lastUpdated = metadata.lwm2m?.['$lastUpdated']
	if (lastUpdated !== undefined) {
		return { value: fromStringToUnixTimestamp(lastUpdated) }
	}

	lastUpdated = metadata['$lastUpdated']
	if (lastUpdated !== undefined) {
		return { value: fromStringToUnixTimestamp(lastUpdated) }
	}

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
	metadata: Metadata,
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
