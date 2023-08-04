import { Device_3_urn } from '@nordicsemiconductor/lwm2m-types'
import type { lwm2m_metadata, metadata } from './getTimestamp'
import { getTimestamp } from './getTimestamp'

describe('getTimestamp', () => {
	it(`should get timestamp from RESOURCE's value reported in device twin`, () => {
		const objectURN = Device_3_urn
		const resourceId = 7
		const metadata = {
			$lastUpdated: '2023-07-07T12:11:03.0324459Z',
			lwm2m: {
				'3': {
					'0': {
						'0': {
							$lastUpdated: '2023-07-07T12:11:03.0324459Z',
							value: {
								$lastUpdated: '2023-07-07T12:11:03.0324459Z',
							},
						},
						'3': {
							$lastUpdated: '2023-07-07T12:11:03.0324459Z',
							value: {
								$lastUpdated: '2023-07-07T12:11:03.0324459Z',
							},
						},
						'7': {
							$lastUpdated: '2023-08-03T12:11:03.0324459Z',
							value: {
								// selected value should be this one
								$lastUpdated: '2023-08-03T12:11:03.0324459Z',
							},
						},
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

		expect(getTimestamp(objectURN, resourceId, metadata)).toBe(1691064663032)
	})

	it(`should get timestamp from INSTANCE's value reported in device twin`, () => {
		const objectURN = Device_3_urn
		const resourceId = 7
		const metadata = {
			$lastUpdated: '2023-07-07T12:11:03.0324459Z',
			lwm2m: {
				'3': {
					'0': {
						// The required resource (7) does not exist
						'10': {
							$lastUpdated: '2023-07-07T12:11:03.0324459Z',
							value: {
								$lastUpdated: '2023-07-07T12:11:03.0324459Z',
							},
						},
						$lastUpdated: '2023-08-02T22:25:50.0324459Z', // so the instance reported time should be selected
					},
					$lastUpdated: '2023-07-07T12:11:03.0324459Z',
				},
				$lastUpdated: '2023-07-07T12:11:03.0324459Z',
			},
		}

		expect(getTimestamp(objectURN, resourceId, metadata)).toBe(1691015150032)
	})

	it(`should get timestamp from OBJECT's value reported in device twin`, () => {
		const objectURN = Device_3_urn
		const resourceId = 7
		const metadata = {
			$lastUpdated: '2023-07-07T12:11:03.0324459Z',
			lwm2m: {
				'3': {
					// The instance 0 (instance selected by default) of required object (3) does not exist
					$lastUpdated: '2023-08-01T19:41:13.0324459Z', // so object reported time should be selected
				},
				$lastUpdated: '2023-07-07T12:11:03.0324459Z',
			},
		}

		expect(getTimestamp(objectURN, resourceId, metadata)).toBe(1690918873032)
	})

	it(`should get timestamp from LwM2M's value reported in device twin`, () => {
		const objectURN = Device_3_urn
		const resourceId = 7
		const metadata = {
			$lastUpdated: '2023-07-07T12:11:03.0324459Z',
			lwm2m: {
				// Required object (3) does not exist
				'5': {
					'0': {
						'0': {
							$lastUpdated: '2023-07-07T12:11:03.0324459Z',
							value: {
								$lastUpdated: '2023-07-07T12:11:03.0324459Z',
							},
						},
						$lastUpdated: '2023-07-07T12:11:03.0324459Z',
					},
					$lastUpdated: '2023-07-07T12:11:03.0324459Z',
				},
				$lastUpdated: '2023-08-04T18:01:53.0324459Z', // so the LwM2M reported time should be selected
			},
		}

		expect(getTimestamp(objectURN, resourceId, metadata)).toBe(1691172113032)
	})

	it(`should get timestamp from METADATA's value reported in device twin`, () => {
		const objectURN = Device_3_urn
		const resourceId = 7
		const metadata = {
			// LwM2M object does not exist
			lwm2m: {} as unknown as lwm2m_metadata,
			$lastUpdated: '2023-08-05T15:15:43.0322359Z', // so the metadata reported time should be selected
		}

		expect(getTimestamp(objectURN, resourceId, metadata)).toBe(1691248543032)
	})

	it(`should receive Error when metadata objects is empty`, () => {
		const objectURN = Device_3_urn
		const resourceId = 7
		const metadata = {} as metadata

		expect(getTimestamp(objectURN, resourceId, metadata)).toBeInstanceOf(Error)
	})
})
