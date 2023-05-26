import type { deviceTwin } from './main'
import { main } from './main'

describe('main', () => {
	it(`should transform device twin to expected format`, () => {
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
								'7': {
									'0': {
										value: 80,
									},
									attributes: {
										dim: '1',
									},
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
									value: 1476186613,
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
			ts: 123456,
		}

		const enviromental = {
			v: {
				temp: 15,
				hum: 30,
				atmp: 10,
			},
			ts: 123456,
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

		const result = {
			cfg: config,
			dev: device,
			roam: roamingInfo,
			bat: batery,
			env: enviromental,
			gnss: gnss,
		}

		expect(main(coioteAzureLwM2M)).toMatchObject(result)
	})
})
