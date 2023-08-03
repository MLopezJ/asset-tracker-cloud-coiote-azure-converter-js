import type { AzureReportedData as assetTracker } from '@nordicsemiconductor/asset-tracker-cloud-docs/protocol'
import { checkLwM2MFormat } from './checkLwM2MFormat'
import { getAssetTrackerObjects } from './getAssetTrackerObjects'
import { removeCoioteFormat } from './removeCoioteFormat'
import { transformation } from './transform'

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
			$metadata: { $lastUpdated: string; lwm2m: unknown }
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
	// const serverTimestamp = deviceTwin.properties.reported.$metadata.$lastUpdated // default timestamp

	// step # 1
	const objects = await getAssetTrackerObjects(input)

	if (objects instanceof Error) {
		throw objects
	}

	// step # 2
	const assetTrackerLwM2MFormat = removeCoioteFormat(objects)

	// step # 3
	const check = checkLwM2MFormat(assetTrackerLwM2MFormat)
	if (check instanceof Error) {
		throw check
	}

	// step # 4
	const result = transformation(assetTrackerLwM2MFormat, 1563968743666) //buildAssetTrackerFormat

	return result
}
