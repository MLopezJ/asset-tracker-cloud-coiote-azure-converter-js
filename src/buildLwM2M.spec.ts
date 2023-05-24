import { buildLwM2M } from './buildLwM2M'

describe('buildLwM2M', () => {
	it('should build lwm2m format', () => {
		const input = [
			{
				'1:1.2@1.2': {
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
			},
			{
				'3:1.2@1.1': {
					'0': {
						'0': {
							value: 'Nordic Semiconductor ASA',
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
			},
			{
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
			},
		]
		const output = {
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
		}

		expect(buildLwM2M(input)).toMatchObject(output)
	})
})
