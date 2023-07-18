import type { Device_3 } from '@nordicsemiconductor/lwm2m-types'

type dev = {
	v: {
		imei: string
		iccid: string
		modV: string
		brdV: string
	}
	ts: number
}
/**
 *  create the dev object expected by the Asset Tracker web app
 */
export const createDevice = (device: Device_3, serverTime: number): dev => {
	const time = device[13] !== undefined ? device[13] : serverTime

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

	return dev as dev
}
