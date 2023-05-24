import { buildLwM2MObject } from './buildLwM2MObject'

describe('buildLwM2MObject', () => {
	it.each([
		[
			'Server',
			'1:1.2@1.2',
			{
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
			[
				{
					'0': 1,
					'1': 50,
					'6': false,
					'7': 'U',
					'16': true,
					'23': false,
				},
			],
		],

		[
			'Device',
			'3:1.2@1.1',
			{
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
			{
				'0': 'Nordic Semiconductor ASA',
				'1': 'Thingy:91',
				'2': '351358815340515',
				'3': '22.8.1+0',
				'11': 0,
				'13': 1675874731000,
				'16': 'UQ',
				'19': '3.2.1',
			},
		],
	])(
		`given the '%s' object in Coiote format, should convert input to LwM2M format`,
		(objectName, urn, input, result) => {
			expect(buildLwM2MObject(urn, input)).toMatchObject(result)
		},
	)
})
