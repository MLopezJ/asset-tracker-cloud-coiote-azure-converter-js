import { deviceTwin, group } from './group'

describe('convert()', () => {
	it(`Should split Coiote's Azure LwM2M json in 2 groups`, () => {
		// Device Twin object. Main input of process.
		const coioteAzureLwM2M: deviceTwin = {
			properties: {
				desired: {
					$metadata: {
						$lastUpdated: '2023-02-08T14:59:36.5459563Z',
					},
					$version: 1,
				},
				reported: {
					lwm2m: {
						'1': {
							'0': {
								'0': {
									value: 1,
								},
								'1': {
									value: 50,
								},
								'6': {
									value: false,
								},
								'7': {
									value: 'U',
								},
								'16': {
									value: true,
								},
								'23': {
									value: false,
								},
							},
						},
						'3': {
							'0': {
								'0': {
									value: 'Nordic Semiconductor',
								},
								'1': {
									value: 'Thingy:91',
								},
								'2': {
									value: '351358815340515',
								},
								'3': {
									value: '22.8.1+0',
								},
								'11': {
									'0': {
										value: 0,
									},
									attributes: {
										dim: '1',
									},
								},
								'13': {
									value: 1675874731000,
								},
								'16': {
									value: 'UQ',
								},
								'19': {
									value: '3.2.1',
								},
							},
						},
						'6': {
							'0': {
								'0': { value: -43.5723 },
								'1': { value: 153.2176 },
								'2': { value: 2 },
								'3': {},
								'5': { value: 1665149633 },
								'6': { value: 5 },
							},
						},
						'3315': {
							'0': {
								'5601': {
									value: 101697,
								},
								'5602': {
									value: 101705,
								},
								'5700': {
									value: 101705,
								},
								'5701': {
									value: 'Pa',
								},
							},
						},
						'3347': {
							'0': {
								'5500': {
									value: false,
								},
								'5501': {
									value: 0,
								},
								'5750': {
									value: 'Button 0',
								},
							},
						},
						'3420': {
							'0': {
								'1': {
									value: '#000000',
								},
							},
						},
						'10256': {
							'0': {
								'0': {
									value: 428,
								},
								'2': {
									value: 6300,
								},
								'3': {
									value: 52,
								},
								'4': {
									value: 14,
								},
								'5': {
									value: 0,
								},
							},
						},
						'50001': {
							'0': {
								'0': {
									value: 5,
								},
								'1': {
									value: 128,
								},
								'6': {},
								'7': {
									value: 403,
								},
								'8': {},
								'9': {},
								'10': {},
								'11': {},
							},
						},
						'50009': {
							'0': {
								'0': {
									value: true,
								},
								'2': {
									value: 120,
								},
								'3': {
									value: 600,
								},
								'4': {
									value: 7200,
								},
								'1': {
									value: 120,
								},
								'5': {
									value: 8.5,
								},
								'8': {
									value: 2.5,
								},
								'9': {
									value: 0.5,
								},
							},
						},
					},
					$metadata: {},
					$version: 31,
				},
			},
		}

		const result = {
			lwm2m: {
				'1:1.2@1.2': [
					{
						'0': 1,
						'1': 50,
						'6': false,
						'7': 'U',
						'16': true,
						'23': false,
					},
				],
				'3:1.2@1.1': {
					'0': 'Nordic Semiconductor ASA',
					'1': 'Thingy:91',
					'2': '351358815340515',
					'3': '22.8.1+0',
					'11': 0, //[0],
					'13': 1476186613,
					'16': 'UQ',
					'19': '3.2.1',
				},
				'6': { '0': -43.5723, '1': 153.2176, '2': 2, '5': 1665149633, '6': 5 },
				'3315:1.1': [
					{
						'5601': 101697,
						'5602': 101705,
						'5700': 101705,
						'5701': 'Pa',
					},
				],
				'3347:1.1': [
					{
						'5500': false,
						'5501': 0,
						'5750': 'Button 0',
					},
				],
				'3420': [{ '1': '#000000' }],
				'10256': [{ '0': 428, '2': 6300, '3': 52, '4': 14, '5': 0 }],
			},
			customObjects: {
				'50001': {
					'0': 5,
					'1': 128,
					'7': 403,
				},
				'50009': {
					'0': true,
					'2': 120,
					'3': 600,
					'4': 7200,
					'1': 120,
					'5': 8.5,
					'8': 2.5,
					'9': 0.5,
				},
			},
		}

		expect(group(coioteAzureLwM2M)).toMatchObject(result)
	})
})
