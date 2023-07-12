import type { Location_6 } from '@nordicsemiconductor/lwm2m-types'

/**
 * Create GNSS
 */
 export const createGnss = (location: Location_6, serverTime: number): any => {
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