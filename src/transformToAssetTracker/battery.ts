import {
	Battery,
	type BatteryData,
	validateWithType,
} from '@nordicsemiconductor/asset-tracker-cloud-docs/protocol'
import { type Device_3, Device_3_urn } from '@nordicsemiconductor/lwm2m-types'
import { fromSecondsToMilliseconds } from '../utils/fromSecondsToMilliseconds.js'
import { getTimestamp, type metadata } from '../utils/getTimestamp.js'

/**
 * Transform Device LwM2M object into the battery object expected by Asset Tracker web app
 *
 * @see https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/blob/saga/documents/battery.md
 */
export const transformToBattery = (
	device: Device_3,
	deviceTwinMetadata: metadata,
): { error: Error } | { result: BatteryData } => {
	const value = typeof device[7] === 'object' ? device[7][0] : device[7] // TODO: check type definition vs schema description
	const time =
		device['13'] != null
			? fromSecondsToMilliseconds(device[13])
			: getTimestamp(Device_3_urn, 13, deviceTwinMetadata)

	const object = {
		v: value,
		ts: time,
	}

	const maybeValidBattery = validateWithType(Battery)(object)
	if ('errors' in maybeValidBattery)
		return { error: new Error(JSON.stringify(maybeValidBattery.errors)) }

	return { result: maybeValidBattery }
}
