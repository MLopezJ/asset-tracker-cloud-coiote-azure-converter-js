import {
	ConnectivityMonitoring_4_urn,
	Device_3_urn,
	getURN,
	Humidity_3304_urn,
	Location_6_urn,
	Pressure_3323_urn,
	Temperature_3303_urn,
} from '@nordicsemiconductor/lwm2m-types'
import type { lwm2mCoiote, instance } from '../converter.js'

// list of objects needed to build Asset Tracker object
export const Config_50009_urn = '50009'
export const requiredAssetTrackerObjects = [
	ConnectivityMonitoring_4_urn,
	Device_3_urn,
	Humidity_3304_urn,
	Location_6_urn,
	Pressure_3323_urn,
	Temperature_3303_urn,
	Config_50009_urn, // Config
]

export type assetTrackerObjects = {
	[ConnectivityMonitoring_4_urn]: instance
	[Device_3_urn]: instance
	[Humidity_3304_urn]: instance
	[Location_6_urn]: instance
	[Pressure_3323_urn]: instance
	[Temperature_3303_urn]: instance
	[Config_50009_urn]: instance
}

/**
 * Pick from input the required objects in Asset Tracker,
 * transform id for those objects who belong to LwM2M
 * and return a list of new objects with respective value
 */
export const getAssetTrackerObjects = async (
	input: lwm2mCoiote,
): Promise<assetTrackerObjects> => {
	const requiredObjects = Object.entries(input).map(
		async ([objectId, value]) => {
			const urn = await getURN(objectId)

			if (urn === undefined) {
				if (requiredAssetTrackerObjects.includes(objectId) === true)
					return { [`${objectId}`]: value }
			} else {
				if (requiredAssetTrackerObjects.includes(urn) === true)
					return { [`${urn}`]: value }
			}
			return undefined
		},
	)

	return (await Promise.all(requiredObjects))
		.filter((obj) => obj !== undefined) // remove empty values
		.reduce(
			(previous, current) =>
				// make it an object
				({ ...current, ...previous }),
			{},
		) as assetTrackerObjects
}
