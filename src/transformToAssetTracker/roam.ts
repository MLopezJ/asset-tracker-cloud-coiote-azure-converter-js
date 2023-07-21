import type { RoamingInfoData } from '@nordicsemiconductor/asset-tracker-cloud-docs/protocol'
import type { ConnectivityMonitoring_4 } from '@nordicsemiconductor/lwm2m-types'

/**
 * Create roam object expected in Asset Tracker web app
 */
export const transformToRoam = (
	connectivityMonitoring: ConnectivityMonitoring_4,
	serverTime: number,
): RoamingInfoData | undefined => {
	if (
		connectivityMonitoring[12] === undefined ||
		connectivityMonitoring[8] === undefined ||
		connectivityMonitoring[10] === undefined ||
		connectivityMonitoring[9] === undefined
	) {
		return undefined
	}
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
		ts: serverTime, // server timestamp
	}
}
