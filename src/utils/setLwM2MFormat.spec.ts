import {
	Device_3_urn,
	Location_6_urn,
	LwM2MServer_1_urn,
} from '@nordicsemiconductor/lwm2m-types'
import { setLwM2MFormat } from './setLwM2MFormat.js'

describe('setLwM2MFormat', () => {
	it.each([
		[
			'Device',
			{
				[Device_3_urn]: {
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
				[Device_3_urn]: {
					'0': 'Nordic Semiconductor ASA',
					'1': 'Thingy:91',
					'2': '351358815340515',
					'3': '22.8.1+0',
					'11': [0],
					'13': 1675874731000,
					'16': 'UQ',
					'19': '3.2.1',
				},
			},
		],
		[
			'LwM2M server',
			{
				[LwM2MServer_1_urn]: {
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
				[LwM2MServer_1_urn]: [
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
				[Location_6_urn]: {
					'0': -43.5723,
					'1': 153.2176,
					'2': 2,
					'5': 1665149633,
					'6': 5,
				},
			},
		],
	])('should build lwm2m format of %s object', (objectName, input, output) => {
		expect(setLwM2MFormat(input)).toMatchObject(output)
	})
})
