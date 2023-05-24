import { group } from './group'

describe('convert()', () => {
	it(`Should split Coiote's Azure LwM2M json in 2 groups`, () => {
		const input = {
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
		}

		// set expected format here
		const output = {
			lwm2m: [
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
				{
					'3315:1.1': {
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
				},
			],
			customObjects: [
				{
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
				},
				{
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
			],
		}

		expect(group(input)).toMatchObject(output)
	})
})
