import type { ConnectivityMonitoring_4 } from '@nordicsemiconductor/lwm2m-types'
import { transformToRoam } from './roam'

describe('transformToRoam', () => {
	let serverTime: number

	beforeEach(() => {
		serverTime = 1563968743666
	})

	it('should create roam object', () => {
		const connectMonitoring: ConnectivityMonitoring_4 = {
			'0': 6, // Network Bearer
			'1': 6,
			'2': -97, // Radio Signal Strength
			'3': 0,
			'4': '10.160.225.39', // IP Addresses
			'7': 'ibasis.iot',
			'8': 33703719, // Cell ID
			'9': 2,
			'10': 2420,
			'11': 0,
			'12': 12, // LAC = Location Area Code
		}

		const expected = {
			v: {
				band: 3, // ***** origin missing *****
				nw: '6', //'NB-IoT', // /4/0/0
				rsrp: -97, // 4/0/2
				area: 12, // /4/0/12
				mccmnc: 24202, // /4/0/10 & /4/0/9
				cell: 33703719, // /4/0/8
				ip: '10.160.225.39', // /4/0/4
				eest: 7, // ***** origin missing *****
			},
			ts: 1563968743666, // server timestamp
		}

		expect(transformToRoam(connectMonitoring, serverTime)).toMatchObject(
			expected,
		)
	})
})
