import type { Device_3 } from '@nordicsemiconductor/lwm2m-types'
import { transformToDevice } from './device'

describe('transformToDevice', () => {
	let serverTime: number

	beforeEach(() => {
		serverTime = 12345677
	})

	it('should create device', () => {
		const input: Device_3 = {
			'0': 'Nordic Semiconductor ASA',
			'1': 'Thingy:91',
			'2': '351358815340515',
			'3': '22.8.1+0',
			'11': 0,
			'13': 1675874731000,
			'16': 'UQ',
			'19': '3.2.1',
		}

		const expected = {
			v: {
				imei: '351358815340515', // /3/0/2
				iccid: '89450421180216216095', // ***** origin missing *****
				modV: '22.8.1+0', // /3/0/3
				brdV: 'Nordic Semiconductor ASA', // /3/0/0
			},
			ts: 1675874731000, // /3/0/13 || server timestamp
		}

		expect(transformToDevice(input, serverTime)).toMatchObject(expected)
	})

	it('should create device with server timestamp', () => {
		const input: Device_3 = {
			'0': 'Nordic Semiconductor ASA',
			'1': 'Thingy:91',
			'2': '351358815340515',
			'3': '22.8.1+0',
			'11': 0,
			'16': 'UQ',
			'19': '3.2.1',
		}

		const expected = {
			v: {
				imei: '351358815340515', // /3/0/2
				iccid: '89450421180216216095', // ***** origin missing *****
				modV: '22.8.1+0', // /3/0/3
				brdV: 'Nordic Semiconductor ASA', // /3/0/0
			},
			ts: 12345677, // /3/0/13 || server timestamp
		}

		expect(transformToDevice(input, serverTime)).toMatchObject(expected)
	})
})
