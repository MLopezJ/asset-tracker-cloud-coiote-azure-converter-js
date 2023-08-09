import type { RoamingInfoData } from '@nordicsemiconductor/asset-tracker-cloud-docs/protocol'
import {
	type ConnectivityMonitoring_4,
	ConnectivityMonitoring_4_urn,
} from '@nordicsemiconductor/lwm2m-types'
import { getTimestamp, type metadata } from '../utils/getTimestamp.js'

/**
 * Transform Connectivity Monitoring LwM2M object into the roaming object expected by Asset Tracker web app
 *
 * @see https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/blob/saga/documents/roaming.md
 */
export const transformToRoam = (
	connectivityMonitoring: ConnectivityMonitoring_4,
	deviceTwinMetadata: metadata,
): RoamingInfoData | Error => {
	if (
		connectivityMonitoring[12] === undefined ||
		connectivityMonitoring[8] === undefined ||
		connectivityMonitoring[10] === undefined ||
		connectivityMonitoring[9] === undefined
	)
		throw new Error(
			`required values are missing: ${{
				12: connectivityMonitoring[12],
				8: connectivityMonitoring[8],
				10: connectivityMonitoring[10],
				9: connectivityMonitoring[9],
			}}`,
		)

	const time = getTimestamp(
		ConnectivityMonitoring_4_urn,
		12,
		deviceTwinMetadata,
	)

	return {
		v: {
			band: 3, // ***** origin missing *****
			nw: String(connectivityMonitoring[0]), // /4/0/0
			rsrp: connectivityMonitoring[2], // 4/0/2
			area: connectivityMonitoring[12], // /4/0/12
			mccmnc: Number(
				`${connectivityMonitoring[10]}${connectivityMonitoring[9]}`,
			), // /4/0/10 & /4/0/9
			cell: connectivityMonitoring[8], // /4/0/8
			ip: connectivityMonitoring[4], // /4/0/4
			eest: 7, // ***** origin missing *****
		},
		ts: time,
	}
}
