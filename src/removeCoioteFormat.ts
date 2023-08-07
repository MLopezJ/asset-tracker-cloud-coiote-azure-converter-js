import type {
	ConnectivityMonitoring_4,
	ConnectivityMonitoring_4_urn,
	Device_3,
	Device_3_urn,
	Humidity_3304,
	Humidity_3304_urn,
	Location_6,
	Location_6_urn,
	Pressure_3323,
	Pressure_3323_urn,
	Temperature_3303,
	Temperature_3303_urn,
} from '@nordicsemiconductor/lwm2m-types'

import {
	type assetTrackerObjects,
	Config_50009_urn,
} from './getAssetTrackerObjects.js'
import type { Config_50009 } from './schemas/Config_50009'
import { setCustomFormat } from './utils/setCustomFormat.js'
import { setLwM2MFormat } from './utils/setLwM2MFormat.js'

export type AssetTrackerLwM2MFormat = {
	[ConnectivityMonitoring_4_urn]: ConnectivityMonitoring_4
	[Device_3_urn]: Device_3
	[Humidity_3304_urn]: Humidity_3304
	[Location_6_urn]: Location_6
	[Pressure_3323_urn]: Pressure_3323
	[Temperature_3303_urn]: Temperature_3303
	[Config_50009_urn]: Config_50009
}

/**
 * Remove coiote format from instances and set the LwM2M format as described in each object schema
 */
export const removeCoioteFormat = (
	input: assetTrackerObjects,
): AssetTrackerLwM2MFormat => {
	const result = Object.entries(input)
		.map((element) => {
			const [objectId, value] = element
			if (objectId === Config_50009_urn) {
				return setCustomFormat({ [`${objectId}`]: value })
			}

			return setLwM2MFormat({ [`${objectId}`]: value })
		})
		.reduce((previous, current) => {
			// make it an object
			return { ...current, ...previous }
		}, {})

	return result as AssetTrackerLwM2MFormat
}
