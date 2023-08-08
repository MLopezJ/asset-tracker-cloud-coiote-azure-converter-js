import type { AzureReportedData as assetTracker } from '@nordicsemiconductor/asset-tracker-cloud-docs/protocol'
import { buildAssetTrackerFormat } from './buildAssetTrackerFormat.js'
import { checkLwM2MFormat } from './checkLwM2MFormat.js'
import { getAssetTrackerObjects } from './getAssetTrackerObjects.js'
import { removeCoioteFormat } from './removeCoioteFormat.js'
import type { metadata } from './utils/getTimestamp'

export type value = { value: string | number | boolean }
export type list = Record<string, { dim: string } | value>
export type attribute = { attributes: { dim: string } }
export type resource = { [key: string]: value | list }
type instanceId = string
export type instance = Record<instanceId, resource>
type objectId = string
export type lwm2mCoiote = Record<objectId, instance>

export type deviceTwin = {
	properties: {
		desired: unknown
		reported: {
			lwm2m: lwm2mCoiote
			$metadata: metadata
			$version: number
		}
	}
}

/**
 * Main object of the process.
 * Transform the device twin coming from Azure to the expected input in Asset Tracker web app
 */
export const converter = async (
	deviceTwin: deviceTwin,
): Promise<assetTracker | undefined> => {
	const input = deviceTwin.properties.reported.lwm2m
	const deviceTwinMetadata = deviceTwin.properties.reported.$metadata

	// step # 1
	const objects = await getAssetTrackerObjects(input)

	if (objects instanceof Error) {
		throw objects
	}

	// step # 2
	const assetTrackerLwM2M = removeCoioteFormat(objects)

	// step # 3
	const check = checkLwM2MFormat(assetTrackerLwM2M)
	if (check instanceof Error) {
		throw check
	}

	// step # 4
	const assetTrackerWebAppInput = buildAssetTrackerFormat(
		assetTrackerLwM2M,
		deviceTwinMetadata,
	)
	if (assetTrackerWebAppInput instanceof Error) {
		throw assetTrackerWebAppInput
	}

	return assetTrackerWebAppInput
}
