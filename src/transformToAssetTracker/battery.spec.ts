import { transformToBattery } from './battery.js'

describe('transformToBattery', () => {
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

	it('should create Battery with Device values', () => {
		const device = {
			'0': 'Nordic Semiconductor ASA',
			'1': 'Thingy:91',
			'2': '351358815340515',
			'3': '22.8.1+0',
			'11': 0,
			'7': 80,
			'13': 1675874731000,
			'16': 'UQ',
			'19': '3.2.1',
		}

		expect(transformToBattery(device, deviceTwinMetadata)).toMatchObject({
			v: 80,
			ts: 1675874731000,
		})
	})

	it('should return Error if Battery value is not found in Device object', () => {
		const device = {
			'0': 'Nordic Semiconductor ASA',
			'1': 'Thingy:91',
			'2': '351358815340515',
			'3': '22.8.1+0',
			'11': 0,
			// '7': 80, Battery value
			'13': 1675874731000,
			'16': 'UQ',
			'19': '3.2.1',
		}

		expect(transformToBattery(device, deviceTwinMetadata)).toBeInstanceOf(Error)
	})

	it('should follow Timestamp Hierarchy in case timestamp is not found from Device object', () => {
		const device = {
			'0': 'Nordic Semiconductor ASA',
			'1': 'Thingy:91',
			'2': '351358815340515',
			'3': '22.8.1+0',
			'11': 0,
			'7': 80,
			// '13': 1675874731000, // timestamp from Device object
			'16': 'UQ',
			'19': '3.2.1',
		}

		expect(transformToBattery(device, deviceTwinMetadata)).toMatchObject({
			v: 80,
			ts: 1688731863032,
		})
	})
})
