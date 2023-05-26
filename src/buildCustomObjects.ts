import type { CoioteAzure } from "./main"

/**
 * Build custom objects
 */
export const buildCustomObjects = (objects: CoioteAzure[]): any | undefined => {
  
    // [x] iterate list
	// [x] check if correct format
    // [] check if exist a schema definition of object
    // [] if exist, check if is a list or object and uses already existing methods
    // [] if not, uses remove format method
    // return object

	const list = objects.map(element => {
		const urn = Object.keys(element)[0]
		const value = Object.values(element)[0]
		
		if (urn === undefined) {
			console.log('URN of element not found', element)
			return null
		}

		if (value === undefined){
			console.log('value of element not found', element)
			return null
		} 

		return element
	})

	const wrongFormatObjects = list.filter(element => element === null)
	if (wrongFormatObjects.length > 0) return undefined



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