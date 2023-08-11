// given a set of objects, it is expected that all of them are not undefined

// In case one of them is undefined, it should fail

// In case of fail, it should return an error message especifing which object is undefined

/**
 * // input
 *
 * {
 *  lat: 1,
 *  alt: undefined,
 *  spd: 3
 * }
 *
 *
 * // output
 * "alt" value is required but it is undefined
 */

/**
 * // input
 *
 * {
 *  lat: 1,
 *  alt: 2,
 *  spd: 3
 * }
 *
 *
 * // output
 * true
 */

describe('checkAllRequired', () => {
	it('should return true if all the given values are not undefined', () => {
		const object = {
			lat: 1,
			alt: 2,
			spd: 3,
		}
        expect(checkAllRequired(object).errors).toBe(undefined)
	})
})

/**
 *
 */
const checkAllRequired = (objects: Record<string, unknown>) => {
	return true
}


// TODO: continue this