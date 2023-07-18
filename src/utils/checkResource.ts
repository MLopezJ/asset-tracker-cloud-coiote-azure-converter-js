import type { attribute, list, value } from '../index'

/**
 * If the resource is required it should not be undefined
 */
export const checkResource = (
	input: value | list,
	isRequired: boolean,
): boolean => {
	// if input is a list
	if ((input as list).attributes !== undefined) {
		const list: attribute = input as any

		if (Number(list.attributes.dim) <= 0 && isRequired === true) return false

		return true
	}

	// if input is not a list
	if (input.value === undefined && isRequired === true) return false

	return true
}
