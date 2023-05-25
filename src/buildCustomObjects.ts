import type { CoioteAzure } from "./main"

/**
 * Build custom objects
 */
export const buildCustomObjects = (objects: CoioteAzure[]): any => {
    console.log(objects)

    // [] iterate list
    // [] check if exist a schema definition of object
    // [] if exist, check if is a list or object and uses already existing methods
    // [] if not, uses remove format method
    // return object

    return {
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
	}
}