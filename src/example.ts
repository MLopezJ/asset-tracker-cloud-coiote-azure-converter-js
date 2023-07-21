import type { deviceTwin } from './converter'
import { converter } from './converter'

const deviceTwin: deviceTwin = {
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
				'5009': {
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

const assetTrackerWebAppInput = await converter(deviceTwin)

console.log(assetTrackerWebAppInput)

/**
{
	bat: { v: 80, ts: 1476186613 },
	env: { v: { temp: 15, hum: 30, atmp: 10 }, ts: 1563968743666 },
	gnss: {
		v: {
			lng: 153.2176,
			lat: -43.5723,
			acc: 24.798573,
			alt: 2,
			spd: 5,
			hdg: 176.12,
		},
		ts: 1665149633,
	},
	cfg: {
		loct: 60,
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
			iccid: '89450421180216216095',
			modV: '22.8.1+0',
			brdV: 'Nordic Semiconductor ASA',
		},
		ts: 1476186613,
	},
	roam: {
		v: {
			band: 3,
			nw: '6',
			rsrp: -85,
			area: 12,
			mccmnc: 2422,
			cell: 34237196,
			ip: [Array],
			eest: 7,
		},
		ts: 1563968743666,
	},
	firmware: {
		fwUpdateStatus: 'current',
		currentFwVersion: '0.0.0-development',
		pendingFwVersion: '',
	},
}
 */
