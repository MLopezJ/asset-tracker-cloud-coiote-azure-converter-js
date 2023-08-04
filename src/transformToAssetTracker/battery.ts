import type { BatteryData } from '@nordicsemiconductor/asset-tracker-cloud-docs/protocol'
import { Device_3, Device_3_urn } from '@nordicsemiconductor/lwm2m-types'
import { getTimestamp, type metadata } from '../utils/getTimestamp'

/**
 * Transform Device LwM2M object into the battery object expected by Asset Tracker web app
 *
 * @see https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/blob/saga/documents/battery.md
 */
export const transformToBattery = (
	device: Device_3,
	deviceTwinMetadata: metadata,
): BatteryData | Error => {
	const value = typeof device[7] === 'object' ? device[7][0] : device[7]
	const time =
		device[13] !== undefined
			? device[13]
			: getTimestamp(Device_3_urn, 13, deviceTwinMetadata)

	if (time instanceof Error) return time

	if (value === undefined) {
		return Error(`Power source voltage is undefined: ${value}`)
	}

	return {
		v: value,
		ts: time,
	}
}
