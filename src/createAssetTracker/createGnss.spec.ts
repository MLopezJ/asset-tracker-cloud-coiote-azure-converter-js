import type { Location_6 } from '@nordicsemiconductor/lwm2m-types'

describe('createGnss', () => {
    let serverTime: number
	
	beforeEach(() => {
		serverTime = 45612456
	})

	it('should create gnss', () => {
		const input: Location_6 = {
			'0': -43.5723,
			'1': 153.2176,
			'2': 170.528305,
            '3': 24.798573,
			'5': 1665149633,
			'6': 0.579327,
		}
		const expected = {
			v: {
				lng: 153.2176,
				lat:  -43.5723,
				acc: 24.798573, 
				alt: 170.528305, 
				spd: 0.579327, 
				hdg: 176.12, // ***** origin missing *****
			},
			ts: 1665149633,
		}
        expect(createGnss(input, serverTime)).toMatchObject(expected)
	})

    it('should create gnss using server time', () => {
		const input: Location_6 = {
			'0': -43.5723,
			'1': 153.2176,
			'2': 170.528305,
            '3': 24.798573,
			'6': 0.579327,
		} as unknown as Location_6

		const expected = {
			v: {
				lng: 153.2176,
				lat:  -43.5723,
				acc: 24.798573, 
				alt: 170.528305, 
				spd: 0.579327, 
				hdg: 176.12, // ***** origin missing *****
			},
			ts: serverTime,
		}
        expect(createGnss(input, serverTime)).toMatchObject(expected)
	})
})

/**
 * Create GNSS
 */
const createGnss = (location: Location_6, serverTime: number) => {
    return {
        v: {
            lng: location[1],
            lat: location[0],
            acc: location[3],
            alt: location[2],
            spd: location[6],
            hdg: 176.12, // ***** origin missing *****
        },
        ts: location[5] === undefined ? serverTime : location[5]
    }
}