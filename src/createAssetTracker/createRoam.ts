import type { ConnectivityMonitoring_4 } from '@nordicsemiconductor/lwm2m-types'

type roam = {
	v: {
		band: 3 // ***** origin missing *****
		nw: number // /4/0/0
		rsrp: number // 4/0/2
		area: number // /4/0/12
		mccmnc: number // /4/0/10 & /4/0/9
		cell: number // /4/0/8
		ip: string // /4/0/4
		eest: 7 // ***** origin missing *****
	}
	ts: number // server timestmap
}
/**
 * Create roam object expected in Asset Tracker web app
 */
export const createRoam = (
	connectivityMonitoring: ConnectivityMonitoring_4,
	serverTime: number,
): roam => {
	// TODO: check result
	return {
		v: {
			band: 3, // ***** origin missing *****
			nw: connectivityMonitoring[0], // /4/0/0
			rsrp: connectivityMonitoring[2], // 4/0/2
			area: connectivityMonitoring[12] as number, // /4/0/12
			mccmnc: Number(
				`${connectivityMonitoring[10]}${connectivityMonitoring[9]}`,
			), // /4/0/10 & /4/0/9
			cell: connectivityMonitoring[8] as number, // /4/0/8
			ip: connectivityMonitoring[4], // /4/0/4
			eest: 7, // ***** origin missing *****
		},
		ts: serverTime, // server timestmap
	}
}
