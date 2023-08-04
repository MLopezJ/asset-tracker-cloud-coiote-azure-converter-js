import type { Device_3 } from '@nordicsemiconductor/lwm2m-types'
import { transformToDevice } from './device'

describe('transformToDevice', () => {
	const deviceTwinMetadata = {
		$lastUpdated: '2023-07-07T12:11:03.0324459Z',
		lwm2m: {
			'3': {
				'0': {
					'13': {
						$lastUpdated: '2023-07-07T12:11:03.0324459Z',
						value: {
							$lastUpdated: '2023-07-07T12:11:03.0324459Z',
						},
					},
					$lastUpdated: '2023-07-07T12:11:03.0324459Z',
				},
				$lastUpdated: '2023-07-07T12:11:03.0324459Z',
			},
			$lastUpdated: '2023-07-07T12:11:03.0324459Z',
		},
	}

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
			ts: 1675874731000, // /3/0/13
		}

		expect(transformToDevice(input, deviceTwinMetadata)).toMatchObject(expected)
	})

	it('should follow Timestamp Hierarchy in case timestamp is not found from Device object', () => {
		const input: Device_3 = {
			'0': 'Nordic Semiconductor ASA',
			'1': 'Thingy:91',
			'2': '351358815340515',
			'3': '22.8.1+0',
			'11': 0,
			// '13': 1675874731000, // timestamp from Device object
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
			ts: 1688731863032,
		}

		expect(transformToDevice(input, deviceTwinMetadata)).toMatchObject(expected)
	})
})
