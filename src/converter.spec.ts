import type { deviceTwin } from './converter'
import { converter } from './converter.js'
import { Config_50009_urn } from './converterSteps/getAssetTrackerObjects.js'

describe('converter', () => {
	it(`should transform device twin to expected format`, async () => {
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
						'4': {
							'0': {
								'0': {
									value: 6,
								},
								'1': {
									'0': {
										value: 6,
									},
									'1': {
										value: 7,
									},
									attributes: {
										dim: '2',
									},
								},
								'2': {
									value: -85,
								},
								'3': {
									value: 23,
								},
								'4': {
									'0': {
										value: '10.160.120.155',
									},
									attributes: {
										dim: '1',
									},
								},
								'8': {
									value: 34237196,
								},
								'9': {
									value: 2,
								},
								'10': {
									value: 242,
								},
								'12': {
									value: 12,
								},
							},
							attributes: {},
						},
						'6': {
							'0': {
								'0': { value: -43.5723 },
								'1': { value: 153.2176 },
								'2': { value: 2 },
								'3': { value: 24.798573 },
								'5': { value: 1665149633 },
								'6': { value: 5 },
							},
						},
						'3303': {
							'0': {
								'5700': {
									value: 15,
								},
							},
						},
						'3304': {
							'0': {
								'5700': {
									value: 30,
								},
								'5518': {
									value: 167318632,
								},
							},
						},
						'3323': {
							'0': {
								'5601': {
									value: 101697,
								},
								'5602': {
									value: 101705,
								},
								'5700': {
									value: 10,
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
						[Config_50009_urn]: {
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
									value: 60,
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
					$metadata: {
						$lastUpdated: '2023-07-07T12:11:03.0324459Z',
						lwm2m: {
							'3347': {
								'0': {
									'5501': {
										$lastUpdated: '2023-07-07T12:11:03.0324459Z',
										value: {
											$lastUpdated: '2023-07-07T12:11:03.0324459Z',
										},
									},
									'5750': {
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
					},
					$version: 31,
				},
			},
		}

		const config = {
			act: true,
			actwt: 120,
			mvres: 600,
			mvt: 7200,
			loct: 60,
			accath: 8.5,
			accith: 2.5,
			accito: 0.5,
			nod: [],
		}

		const device = {
			v: {
				imei: '351358815340515',
				iccid: '0000000000000000000',
				modV: '22.8.1+0',
				brdV: 'Nordic Semiconductor ASA',
			},
			ts: 1476186613000,
		}

		const roamingInfo = {
			v: {
				band: 1,
				nw: '6',
				rsrp: -85,
				area: 12,
				mccmnc: 2422,
				cell: 34237196,
				ip: ['10.160.120.155'],
				eest: 5,
			},
			ts: 1688731863032,
		}

		const battery = {
			v: 80,
			ts: 1476186613, //000
		}

		const environmental = {
			v: {
				temp: 15,
				hum: 30,
				atmp: 10,
			},
			ts: 167318632,
		}

		const gnss = {
			v: {
				lat: -43.5723,
				lng: 153.2176,
				acc: 24.798573,
				alt: 2,
				spd: 5,
				hdg: 0,
			},
			ts: 1665149633,
		}

		const result = {
			cfg: config,
			dev: device,
			roam: roamingInfo,
			bat: battery,
			env: environmental,
			gnss,
		}

		expect(await converter(coioteAzureLwM2M)).toMatchObject(result)
	})

	it(`should throw an error if required object is missing its value`, async () => {
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
						// Device (3) object is missing
						'4': {
							'0': {
								'0': {
									value: 6,
								},
								'1': {
									'0': {
										value: 6,
									},
									'1': {
										value: 7,
									},
									attributes: {
										dim: '2',
									},
								},
								'2': {
									value: -85,
								},
								'3': {
									value: 23,
								},
								'4': {
									'0': {
										value: '10.160.120.155',
									},
									attributes: {
										dim: '1',
									},
								},
								'8': {
									value: 34237196,
								},
								'9': {
									value: 2,
								},
								'10': {
									value: 242,
								},
								'12': {
									value: 12,
								},
							},
							attributes: {},
						},
						'6': {
							'0': {
								'0': { value: -43.5723 },
								'1': { value: 153.2176 },
								'2': { value: 2 },
								'3': { value: 24.798573 },
								'5': { value: 1665149633 },
								'6': { value: 5 },
							},
						},
						'3303': {
							'0': {
								'5700': {
									value: 15,
								},
							},
						},
						'3304': {
							'0': {
								'5700': {
									value: 30,
								},
								'5518': {
									value: 167318632,
								},
							},
						},
						'3323': {
							'0': {
								'5601': {
									value: 101697,
								},
								'5602': {
									value: 101705,
								},
								'5700': {
									value: 10,
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
						[Config_50009_urn]: {
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
									value: 60,
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
					$metadata: {
						$lastUpdated: '2023-07-07T12:11:03.0324459Z',
						lwm2m: {
							'3347': {
								'0': {
									'5501': {
										$lastUpdated: '2023-07-07T12:11:03.0324459Z',
										value: {
											$lastUpdated: '2023-07-07T12:11:03.0324459Z',
										},
									},
									'5750': {
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
					},
					$version: 31,
				},
			},
		}

		try {
			await converter(coioteAzureLwM2M)
		} catch (e: any) {
			expect(e.message).not.toBe(undefined)
		}
	})

	it(`should throw an error if required object is missing in input`, async () => {
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
						'3': {}, // error here
						'4': {
							'0': {
								'0': {
									value: 6,
								},
								'1': {
									'0': {
										value: 6,
									},
									'1': {
										value: 7,
									},
									attributes: {
										dim: '2',
									},
								},
								'2': {
									value: -85,
								},
								'3': {
									value: 23,
								},
								'4': {
									'0': {
										value: '10.160.120.155',
									},
									attributes: {
										dim: '1',
									},
								},
								'8': {
									value: 34237196,
								},
								'9': {
									value: 2,
								},
								'10': {
									value: 242,
								},
								'12': {
									value: 12,
								},
							},
							attributes: {},
						},
						'6': {
							'0': {
								'0': { value: -43.5723 },
								'1': { value: 153.2176 },
								'2': { value: 2 },
								'3': { value: 24.798573 },
								'5': { value: 1665149633 },
								'6': { value: 5 },
							},
						},
						'3303': {
							'0': {
								'5700': {
									value: 15,
								},
							},
						},
						'3304': {
							'0': {
								'5700': {
									value: 30,
								},
								'5518': {
									value: 167318632,
								},
							},
						},
						'3323': {
							'0': {
								'5601': {
									value: 101697,
								},
								'5602': {
									value: 101705,
								},
								'5700': {
									value: 10,
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
						[Config_50009_urn]: {
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
									value: 60,
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
					$metadata: {
						$lastUpdated: '2023-07-07T12:11:03.0324459Z',
						lwm2m: {
							'3347': {
								'0': {
									'5501': {
										$lastUpdated: '2023-07-07T12:11:03.0324459Z',
										value: {
											$lastUpdated: '2023-07-07T12:11:03.0324459Z',
										},
									},
									'5750': {
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
					},
					$version: 31,
				},
			},
		}

		try {
			await converter(coioteAzureLwM2M)
		} catch (e: any) {
			expect(e.message).not.toBe(undefined)
		}
	})

	it(`should throw an error if required resource is missing from object`, async () => {
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
						'4': {
							'0': {
								'0': {
									value: 6,
								},
								'1': {
									'0': {
										value: 6,
									},
									'1': {
										value: 7,
									},
									attributes: {
										dim: '2',
									},
								},
								'2': {
									value: -85,
								},
								'3': {
									value: 23,
								},
								'4': {
									'0': {
										value: '10.160.120.155',
									},
									attributes: {
										dim: '1',
									},
								},
								'8': {
									value: 34237196,
								},
								'9': {
									value: 2,
								},
								'10': {
									value: 242,
								},
								'12': {
									value: 12,
								},
							},
							attributes: {},
						},
						'6': {
							'0': {
								'0': { value: -43.5723 },
								'1': { value: 153.2176 },
								//'2': { value: 2 },  // ERROR GENERATED HERE
								'3': { value: 24.798573 },
								'5': { value: 1665149633 },
								'6': { value: 5 },
							},
						},
						'3303': {
							'0': {
								'5700': {
									value: 15,
								},
							},
						},
						'3304': {
							'0': {
								'5700': {
									value: 30,
								},
								'5518': {
									value: 167318632,
								},
							},
						},
						'3323': {
							'0': {
								'5601': {
									value: 101697,
								},
								'5602': {
									value: 101705,
								},
								'5700': {
									value: 10,
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
						[Config_50009_urn]: {
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
									value: 60,
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
					$metadata: {
						$lastUpdated: '2023-07-07T12:11:03.0324459Z',
						lwm2m: {
							'3347': {
								'0': {
									'5501': {
										$lastUpdated: '2023-07-07T12:11:03.0324459Z',
										value: {
											$lastUpdated: '2023-07-07T12:11:03.0324459Z',
										},
									},
									'5750': {
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
					},
					$version: 31,
				},
			},
		}

		try {
			await converter(coioteAzureLwM2M)
		} catch (e: any) {
			expect(e.message).not.toBe(undefined)
		}
	})
})
