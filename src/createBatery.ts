import type { Device_3 } from '@nordicsemiconductor/lwm2m-types'
import type { batery } from './assetTracker/Battery'

/**
 *
 */
export const createBatery = (device: Device_3): batery | undefined => {
	const value = typeof device[7] === 'object' ? device[7][0] : device[7]
	//console.log(value, typeof value)
	/**
	 * TODO: check LwM2M lib. Resource 7 from Object 3 is a list by definition but is required as number in lib
	 */

	if (value === undefined) {
		console.log('Power source voltage is undefined')
		return undefined
	}

	return {
		v: value,
		ts: 123456,
	}
}
