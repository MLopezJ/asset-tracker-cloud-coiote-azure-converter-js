import type { RoamingInfoData } from '@nordicsemiconductor/asset-tracker-cloud-docs/protocol'
import {
	type ConnectivityMonitoring_4,
	ConnectivityMonitoring_4_urn,
} from '@nordicsemiconductor/lwm2m-types'
import { checkAllRequired } from '../utils/checkAllRequired.js'
import { getTimestamp, type metadata } from '../utils/getTimestamp.js'

/**
 * Transform Connectivity Monitoring LwM2M object into the roaming object expected by Asset Tracker web app
 *
 * @see https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/blob/saga/documents/roaming.md
 */
export const transformToRoam = (
	connectivityMonitoring: ConnectivityMonitoring_4,
	deviceTwinMetadata: metadata,
): RoamingInfoData => {
	const defaultBand = 1
	const defaultEest = 5
	const nw = String(connectivityMonitoring[0])
	const rsrp = connectivityMonitoring[2]
	const area = connectivityMonitoring[12]
	const smcc = connectivityMonitoring[10]
	const smnc = connectivityMonitoring[9]
	const cell = connectivityMonitoring[8]
	const ip = connectivityMonitoring[4]

	const maybeValidRequiredValues = checkAllRequired({ area, cell, smcc, smnc })
	if ('error' in maybeValidRequiredValues)
		throw new Error(maybeValidRequiredValues.error)

	const time = getTimestamp(
		ConnectivityMonitoring_4_urn,
		12,
		deviceTwinMetadata,
	)

	return {
		v: {
			band: defaultBand, // ***** origin missing *****
			nw,
			rsrp,
			area: area!,
			mccmnc: Number(
				`${connectivityMonitoring[10]}${connectivityMonitoring[9]}`,
			), // /4/0/10 & /4/0/9
			cell: cell!,
			ip,
			eest: defaultEest, // ***** origin missing *****
		},
		ts: time,
	}
}
