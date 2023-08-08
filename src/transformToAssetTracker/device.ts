import type { DeviceData } from '@nordicsemiconductor/asset-tracker-cloud-docs/protocol'
import { type Device_3, Device_3_urn } from '@nordicsemiconductor/lwm2m-types'
import { getTimestamp, type metadata } from '../utils/getTimestamp.js'

/**
 * Transform Device LwM2M object into the device object expected by Asset Tracker web app
 *
 * @see https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/blob/saga/documents/device.md
 */
export const transformToDevice = (
	device: Device_3,
	deviceTwinMetadata: metadata,
): DeviceData | Error => {
	const time = device[13] ?? getTimestamp(Device_3_urn, 13, deviceTwinMetadata)

	if (time instanceof Error) return time

	if (
		device[2] === undefined ||
		device[3] === undefined ||
		device[0] === undefined
	)
		return Error(
			`missing values: ${{
				imei: device[2],
				modV: device[3],
				brdV: device[0],
			}}`,
		)

	const dev = {
		v: {
			imei: device[2],
			iccid: '89450421180216216095', // ***** origin missing *****
			modV: device[3],
			brdV: device[0],
		},
		ts: time,
	}

	return dev
}
