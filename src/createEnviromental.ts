import type { enviromental } from "./assetTracker/Environment"
import type { Temperature_3303, Humidity_3304, Barometer_3315 } from '@nordicsemiconductor/lwm2m-types'


/**
 * 
 */
export const createEnviromental = (
    temperature: Temperature_3303,
    humidity: Humidity_3304,
    barometer: Barometer_3315
): enviromental | undefined => {
    const temp = temperature[0] ? temperature[0]['5700']: undefined
    const hum = humidity[0] ? humidity[0]['5700']: undefined 
    const atmp = barometer[0] ? barometer[0]['5700']: undefined
     
    if (temp === undefined || hum === undefined || atmp === undefined){
        console.log('input format is not the expected', {temp, hum, atmp})
        return undefined
    }

    return {
		v: {
			temp,
			hum,
			atmp
		},
		ts: 123456,
	}
}