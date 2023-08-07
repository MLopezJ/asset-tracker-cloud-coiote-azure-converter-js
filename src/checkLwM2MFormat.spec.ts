import {
	Device_3_urn,
	Location_6_urn,
	type LwM2MDocument,
} from '@nordicsemiconductor/lwm2m-types'
import { checkLwM2MFormat } from './checkLwM2MFormat.js'

describe('checkLwM2MFormat', () => {
	it('should return true if object has the LwM2M struct', () => {
		const input = {
			[Location_6_urn]: {
				'0': -43.5723,
				'1': 153.2176,
				'2': 2,
				'5': 1665149633,
				'6': 5,
			},
		}
		expect(checkLwM2MFormat(input)).toBe(true)
	})
	it('should return false when the LwM2M object has wrong data type on its resources', () => {
		const input = {
			[Device_3_urn]: {
				'0': 1, // expecting string
				'1': 2, // expecting string
				'2': 456, // expecting string
				'3': '22.8.1+0',
				'11': '0', // expecting number
				'13': 'a', // expecting number
				'16': 'UQ',
				'19': '3.2.1',
			},
		}
		expect(
			checkLwM2MFormat(input as unknown as Partial<LwM2MDocument>),
		).toBeInstanceOf(Error)
	})
})
