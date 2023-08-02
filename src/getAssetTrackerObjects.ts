import {
	ConnectivityMonitoring_4_urn,
	Device_3_urn,
	getURN,
	Humidity_3304_urn,
	Location_6_urn,
	Pressure_3323_urn,
	Temperature_3303_urn,
} from '@nordicsemiconductor/lwm2m-types'
import type { lwm2mCoiote } from './converter'

// list of objects needed to build Asset Tracker object
export const requiredAssetTrackerObjects = [
	ConnectivityMonitoring_4_urn,
	Device_3_urn,
	Humidity_3304_urn,
	Location_6_urn,
	Pressure_3323_urn,
	Temperature_3303_urn,
	'50009', // Config
]

export type assetTrackerObjects = {
	ConnectivityMonitoring_4_urn: Record<string | number | symbol, unknown>
	Device_3_urn: Record<string | number | symbol, unknown>
	Humidity_3304_urn: Record<string | number | symbol, unknown>
	Location_6_urn: Record<string | number | symbol, unknown>
	Pressure_3323_urn: Record<string | number | symbol, unknown>
	Temperature_3303_urn: Record<string | number | symbol, unknown>
	'50009': Record<string | number | symbol, unknown>
}

/**
 * Pick from input the required objects in Asset Tracker,
 * transform id for those objects who belong to LwM2M
 * and return a list of new objects with respective value
 */
export const getAssetTrackerObjects = async (
	input: lwm2mCoiote,
): Promise<assetTrackerObjects[]> => {
	const objects = []

	for (const [objectId, value] of Object.entries(input)) {
		const urn = await getURN(objectId)

		if (urn === undefined) {
			if (requiredAssetTrackerObjects.includes(objectId) === true)
				objects.push({ [`${objectId}`]: value })
		} else {
			if (requiredAssetTrackerObjects.includes(urn) === true)
				objects.push({ [`${urn}`]: value })
		}
	}

	return objects as assetTrackerObjects[]
}
