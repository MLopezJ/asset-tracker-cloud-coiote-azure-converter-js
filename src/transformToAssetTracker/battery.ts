import type { BatteryData } from '@nordicsemiconductor/asset-tracker-cloud-docs/protocol'
import type { Device_3 } from '@nordicsemiconductor/lwm2m-types'

/**
 * Transform Device LwM2M object into the battery object expected by Asset Tracker web app
 *
 * @see https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/blob/saga/documents/battery.md
 */
export const transformToBattery = (
	device: Device_3,
	serverTime: number,
): BatteryData | undefined => {
	const value = typeof device[7] === 'object' ? device[7][0] : device[7]
	const time = device[13] !== undefined ? device[13] : serverTime

	if (value === undefined) {
		console.log('Power source voltage is undefined')
		return undefined
	}

	return {
		v: value,
		ts: time,
	}
}
