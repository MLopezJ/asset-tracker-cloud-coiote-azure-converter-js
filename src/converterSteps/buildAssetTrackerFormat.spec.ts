import {
	ConnectivityMonitoring_4_urn,
	Device_3_urn,
	Humidity_3304_urn,
	Location_6_urn,
	Pressure_3323_urn,
	Temperature_3303_urn,
} from '@nordicsemiconductor/lwm2m-types'
import { buildAssetTrackerFormat } from './buildAssetTrackerFormat.js'
import { Config_50009_urn } from './getAssetTrackerObjects.js'
import type { AssetTrackerLwM2MFormat } from './removeCoioteFormat.js'
import type { metadata } from '../utils/getTimestamp'

describe('transform', () => {
	it('should build the expected input of the Asset tracker web app', () => {
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
		const input = {
			[Device_3_urn]: {
				'0': 'Nordic Semiconductor ASA',
				'1': 'Thingy:91',
				'2': '351358815340515',
				'3': '22.8.1+0',
				'11': 0,
				'7': 80,
				'13': 1675874731,
				'16': 'UQ',
				'19': '3.2.1',
			},
			[ConnectivityMonitoring_4_urn]: {
				'0': 6,
				'1': 6,
				'2': -97,
				'3': 0,
				'4': '10.160.225.39',
				'7': 'ibasis.iot',
				'8': 33703719,
				'9': 2,
				'10': 2420,
				'11': 0,
				'12': 12,
			},
			[Location_6_urn]: {
				'0': -43.5723,
				'1': 153.2176,
				'2': 170.528305,
				'3': 24.798573,
				'5': 1665149633,
				'6': 0.579327,
			},
			[Temperature_3303_urn]: [
				{
					'5518': 1651820400,
					'5601': 23.51,
					'5602': 23.51,
					'5603': -40,
					'5604': 85,
					'5700': 24.57,
					'5701': 'Celsius degrees',
				},
			],
			[Humidity_3304_urn]: [
				{
					'5518': 1651820400,
					'5601': 31.06,
					'5602': 31.06,
					'5603': 0,
					'5604': 100,
					'5700': 28.93,
					'5701': '%',
				},
			],
			[Pressure_3323_urn]: [
				{
					'5518': 1651820400,
					'5601': 98.24,
					'5602': 98.24,
					'5603': 30,
					'5604': 110,
					'5700': 98.23,
					'5701': 'kPa',
				},
			],
			[Config_50009_urn]: {
				'0': true,
				'1': 120,
				'2': 120,
				'3': 600,
				'4': 7200,
				'5': 8.5,
				'6': true,
				'7': false,
				'8': 2.5,
				'9': 0.5,
			},
		}

		const output = {
			bat: {
				v: 80,
				ts: 1675874731000,
			},
			env: {
				v: {
					temp: 24.57,
					hum: 28.93,
					atmp: 98.23,
				},
				ts: 1651820400000,
			},
			gnss: {
				v: {
					lng: 153.2176,
					lat: -43.5723,
					acc: 24.798573,
					alt: 170.528305,
					spd: 0.579327,
					hdg: 0, // ***** origin missing *****
				},
				ts: 1665149633,
			},
			cfg: {
				loct: 120,
				act: true,
				actwt: 120,
				mvres: 600,
				mvt: 7200,
				accath: 8.5,
				accith: 2.5,
				accito: 0.5,
				nod: [],
			},
			dev: {
				v: {
					imei: '351358815340515',
					iccid: '0000000000000000000', // ***** origin missing *****
					modV: '22.8.1+0',
					brdV: 'Nordic Semiconductor ASA',
				},
				ts: 1675874731000,
			},
			roam: {
				v: {
					band: 1, // ***** origin missing *****
					nw: '6',
					rsrp: -97,
					area: 12,
					mccmnc: 24202,
					cell: 33703719,
					ip: '10.160.225.39',
					eest: 5, // ***** origin missing *****
				},
				ts: 1688731863032,
			},
		}

		expect(buildAssetTrackerFormat(input, metadata)).toMatchObject(output)
	})

	it('should return error if required objects are missing', () => {
		const metadata = {
			$lastUpdated: '2023-07-07T12:11:03.0324459Z',
			lwm2m: {},
		} as metadata
		const input = {} as unknown as AssetTrackerLwM2MFormat

		expect(() => buildAssetTrackerFormat(input, metadata)).toThrow(Error)
	})

	it('should return error if transformation process went wrong', () => {
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
		const input = {
			[Device_3_urn]: {}, // Object 3 is missing
			[ConnectivityMonitoring_4_urn]: {
				'0': 6,
				'1': 6,
				'2': -97,
				'3': 0,
				'4': '10.160.225.39',
				'7': 'ibasis.iot',
				'8': 33703719,
				'9': 2,
				'10': 2420,
				'11': 0,
				'12': 12,
			},
			[Location_6_urn]: {
				'0': -43.5723,
				'1': 153.2176,
				'2': 170.528305,
				'3': 24.798573,
				'5': 1665149633,
				'6': 0.579327,
			},
			[Temperature_3303_urn]: [
				{
					'5518': 1651820400,
					'5601': 23.51,
					'5602': 23.51,
					'5603': -40,
					'5604': 85,
					'5700': 24.57,
					'5701': 'Celsius degrees',
				},
			],
			[Humidity_3304_urn]: [
				{
					'5518': 1651820400,
					'5601': 31.06,
					'5602': 31.06,
					'5603': 0,
					'5604': 100,
					'5700': 28.93,
					'5701': '%',
				},
			],
			[Pressure_3323_urn]: [
				{
					'5518': 1651820400,
					'5601': 98.24,
					'5602': 98.24,
					'5603': 30,
					'5604': 110,
					'5700': 98.23,
					'5701': 'kPa',
				},
			],
			[Config_50009_urn]: {}, // Object 50009 is missing
		} as unknown as AssetTrackerLwM2MFormat

		expect(() => buildAssetTrackerFormat(input, metadata)).toThrow(Error)
	})
})
