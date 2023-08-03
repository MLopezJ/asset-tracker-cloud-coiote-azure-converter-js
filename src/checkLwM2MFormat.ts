import type { LwM2MDocument } from '@nordicsemiconductor/lwm2m-types'
import { validate } from '@nordicsemiconductor/lwm2m-types'

/**
 * Check if input follows the expected data format described by @nordicsemiconductor/lwm2m-types lib
 */
export const checkLwM2MFormat = (
	input: Partial<LwM2MDocument>,
): true | Error => {
	const maybeValidLwM2M = validate(input)
	if ('errors' in maybeValidLwM2M) {
		return Error(JSON.stringify(maybeValidLwM2M.errors))
	}
	return true
}
