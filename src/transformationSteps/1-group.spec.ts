import {
	Barometer_3315_urn,
	Location_6_urn,
} from '@nordicsemiconductor/lwm2m-types'
import { group } from './1-group'

describe('Step 1: group', () => {
	it(`Should split Coiote's Azure LwM2M json in 2 groups`, async () => {
		const input = {
			// LwM2M objects
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
			// custom objects
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

		const output = {
			lwm2m: [
				{
					[Location_6_urn]: {
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
					[Barometer_3315_urn]: {
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

		expect(await group(input)).toMatchObject(output)
	})
})
