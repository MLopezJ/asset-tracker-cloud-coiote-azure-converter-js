import type { DeviceData } from '@nordicsemiconductor/asset-tracker-cloud-docs/protocol'
import { type Device_3, Device_3_urn } from '@nordicsemiconductor/lwm2m-types'
import { checkAllRequired } from '../utils/checkAllRequired.js'
import { getTimestamp, type metadata } from '../utils/getTimestamp.js'

/**
 * Transform Device LwM2M object into the device object expected by Asset Tracker web app
 *
 * @see https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/blob/saga/documents/device.md
 */
export const transformToDevice = (
	device: Device_3,
	deviceTwinMetadata: metadata,
): DeviceData => {
	const defaultIccid = '0000000000000000000'
	const imei = device['2']
	const modV = device['3']
	const brdV = device['0']

	const maybeValidRequiredValues = checkAllRequired({ imei, modV, brdV })
	if ('error' in maybeValidRequiredValues)
		throw new Error(maybeValidRequiredValues.error)

	const time =
		device['13'] ?? getTimestamp(Device_3_urn, 13, deviceTwinMetadata)

	return {
		v: {
			imei: device['2']!,
			iccid: defaultIccid, // ***** origin missing *****
			modV: device['3']!,
			brdV: device['0']!,
		},
		ts: time,
	}
}
