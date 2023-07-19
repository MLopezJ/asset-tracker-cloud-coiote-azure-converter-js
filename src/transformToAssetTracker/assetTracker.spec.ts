import type { objects } from '../transform'
import { createAssetTracker } from './assetTracker'

describe('createAssetTracker', () => {
	it('should create Asset Tracker input data', () => {
		const input: objects = {
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
					'11': 0,
					'7': 80,
					'13': 1476186613,
					'16': 'UQ',
					'19': '3.2.1',
				},
				'6': { '0': -43.5723, '1': 153.2176, '2': 2, '5': 1665149633, '6': 5 },
				'3303:1.1': [{ '5700': 15 }],
				'3304:1.1': [{ '5700': 30 }],
				'3315:1.1': [
					{
						'5601': 101697,
						'5602': 101705,
						'5700': 101705,
						'5701': 'Pa',
						'5518': 87514562,
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

		const config = {
			act: false,
			actwt: 60,
			mvres: 300,
			mvt: 3600,
			loct: 60,
			accath: 10.5,
			accith: 5.2,
			accito: 1.7,
			nod: ['gnss'],
		}

		const device = {
			v: {
				imei: '352656106111232',
				iccid: '89450421180216216095',
				modV: 'mfw_nrf9160_1.0.0',
				brdV: 'thingy91_nrf9160',
			},
			ts: 123456,
		}

		const roamingInfo = {
			v: {
				band: 262143,
				nw: 'LTE-M',
				rsrp: -97,
				area: 12,
				mccmnc: 24202,
				cell: 33703719,
				ip: '2001:db8:85a3::8a2e:370:7334',
				eest: 7,
			},
			ts: 123456,
		}

		const batery = {
			v: 80,
			ts: 1476186613,
		}

		const enviromental = {
			v: {
				temp: 15,
				hum: 30,
				atmp: 101705,
			},
			ts: 87514562,
		}

		const gnss = {
			v: {
				lng: 100,
				lat: 50,
				acc: 5,
				alt: 1,
				spd: 0,
				hdg: 180,
			},
			ts: 123456,
		}

		const output = {
			cfg: config,
			dev: device,
			roam: roamingInfo,
			bat: batery,
			env: enviromental,
			gnss: gnss,
		}
		expect(createAssetTracker(input)).toMatchObject(output)
	})
})
