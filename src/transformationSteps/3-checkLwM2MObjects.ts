import type { LwM2MDocument } from '@nordicsemiconductor/lwm2m-types'
import { validate } from '@nordicsemiconductor/lwm2m-types'

/**
 * Check if input follows the expected data format
 */
export const checkLwM2MObjects = (input: Partial<LwM2MDocument>): boolean => {
	const maybeValidLwM2M = validate(input)
	let check = true
	if ('errors' in maybeValidLwM2M) {
		console.error(maybeValidLwM2M.errors)
		check = false
	}

	return check
}
