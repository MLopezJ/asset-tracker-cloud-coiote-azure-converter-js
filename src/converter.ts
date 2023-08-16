import type { AzureReportedData as assetTracker } from '@nordicsemiconductor/asset-tracker-cloud-docs/protocol'
import { buildAssetTrackerFormat } from './converterSteps/buildAssetTrackerFormat.js'
import { checkLwM2MFormat } from './converterSteps/checkLwM2MFormat.js'
import { getAssetTrackerObjects } from './converterSteps/getAssetTrackerObjects.js'
import { removeCoioteFormat } from './converterSteps/removeCoioteFormat.js'

import type { Metadata } from './utils/getTimestamp'

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
			$metadata: Metadata
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
): Promise<assetTracker> => {
	const input = deviceTwin.properties.reported.lwm2m
	const deviceTwinMetadata = deviceTwin.properties.reported.$metadata

	const objects = await getAssetTrackerObjects(input)
	const assetTrackerLwM2M = removeCoioteFormat(objects)

	checkLwM2MFormat(assetTrackerLwM2M)

	const assetTrackerWebAppInput = buildAssetTrackerFormat(
		assetTrackerLwM2M,
		deviceTwinMetadata,
	)

	return assetTrackerWebAppInput
}
