import type { Device_3 } from '@nordicsemiconductor/lwm2m-types'
import type { battery } from '../schemas/Battery'

/**
 * Transform input into battery format
 */
export const transformToBattery = (
	device: Device_3,
	serverTime: number,
): battery | undefined => {
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
