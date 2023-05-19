import { validate } from '@nordicsemiconductor/lwm2m-types'

describe('LwM2M Types', () => {
	it.each([
		[
			'Security',
			{
				'1:1.2@1.2': [
					{
						'0': 1,
						'1': 50,
						'6': 0,
						'7': 'U',
						'16': 1,
						'23': 0,
					},
				],
			},
		],
		[
			'Location',
			{
				'6': { '0': -43.5723, '1': 153.2176, '2': 2, '5': 1665149633, '6': 5 },
			},
		],
		[
			'Device',
			{
				'3:1.2@1.1': {
					'0': 'Nordic Semiconductor ASA',
					'1': 'Thingy:91',
					'2': '351358815340515',
					'3': '22.8.1+0',
					'11': [0],
					'13': 1476186613,
					'16': 'UQ',
					'19': '3.2.1',
				},
			},
		],
	])("Object '%s' should pass the LwM2M Type check", (name, object) => {
		const maybeValidLwM2M = validate(object)
		expect('errors' in maybeValidLwM2M).toBe(false)
	})

	it.each([
		[
			{
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
		],
		[
			{
				'50001': {
					'0': 5,
					'1': 128,
					'7': 403,
				},
			},
		],
	])('Custom objects should be ignored in the LwM2M type check', (object) => {
		/**
		 * Because there is not any LwM2M definition related to the object, there is
		 * no way to validate its veracity or not. So them should be ignored.
		 */
		const maybeValidLwM2M = validate(object)
		expect('errors' in maybeValidLwM2M).toBe(false)
	})
})
