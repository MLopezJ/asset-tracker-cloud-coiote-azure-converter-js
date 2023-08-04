import { transformToEnvironmental } from './environmental'

describe('transformToEnvironmental', () => {
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

	it('should create Env with LwM2M objects', () => {
		const temperature = [{ '5700': 15 }]
		const humidity = [{ '5700': 30 }]
		const pressure = [
			{
				'5601': 101697,
				'5602': 101705,
				'5700': 101705,
				'5701': 'Pa',
				'5518': 45612456,
			},
		]

		const result = {
			v: {
				temp: 15,
				hum: 30,
				atmp: 101705,
			},
			ts: 45612456,
		}

		expect(
			transformToEnvironmental(
				temperature,
				humidity,
				pressure,
				deviceTwinMetadata,
			),
		).toMatchObject(result)
	})

	it('should return undefined if Environmental values are not found in LwM2M objects', () => {
		const temperature = [{ '5700': 15 }]
		const humidity = [{}] // missing required value
		const pressure = [
			{
				'5601': 101697,
				'5602': 101705,
				'5700': 101705,
				'5701': 'Pa',
			},
		]

		expect(
			transformToEnvironmental(
				temperature,
				humidity as any,
				pressure,
				deviceTwinMetadata,
			),
		).toBeInstanceOf(Error)
	})

	it('should follow Timestamp Hierarchy in case timestamp is not found from LwM2M objects', () => {
		const temperature = [{ '5700': 15 }]
		const humidity = [{ '5700': 30 }]
		const pressure = [
			{
				'5601': 101697,
				'5602': 101705,
				'5700': 101705,
				'5701': 'Pa',
				//'5518': 45612456 // Missing timestamp value
			},
		]

		expect(
			transformToEnvironmental(
				temperature,
				humidity as any,
				pressure,
				deviceTwinMetadata,
			),
		).toMatchObject({
			v: {
				temp: 15,
				hum: 30,
				atmp: 101705,
			},
			ts: 1688731863032,
		})
	})
})
