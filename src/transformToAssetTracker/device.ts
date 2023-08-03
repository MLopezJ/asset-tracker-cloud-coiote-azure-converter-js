import type { DeviceData } from '@nordicsemiconductor/asset-tracker-cloud-docs/protocol'
import type { Device_3 } from '@nordicsemiconductor/lwm2m-types'

/**
 * Transform Device LwM2M object into the device object expected by Asset Tracker web app
 *
 * @see https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/blob/saga/documents/device.md
 */
export const transformToDevice = (
	device: Device_3,
	serverTime: number,
): DeviceData | undefined => {
	const time = device[13] !== undefined ? device[13] : serverTime

	if (
		device[2] === undefined ||
		device[3] === undefined ||
		device[0] === undefined
	) {
		console.error('missing values: ', {
			imei: device[2],
			modV: device[3],
			brdV: device[0],
		})
		return undefined
	}
	const dev = {
		v: {
			imei: device[2],
			iccid: '89450421180216216095', // ***** origin missing *****
			modV: device[3],
			brdV: device[0],
		},
		ts: time,
	}

	// TODO: check with https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/Reported.ts#L6

	return dev
}
