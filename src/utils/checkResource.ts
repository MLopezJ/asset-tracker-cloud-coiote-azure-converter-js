import type { attribute, list, value } from '../main'

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
		return Number(list.attributes.dim) > 0 && isRequired ? true : false
	}

	return input.value !== undefined && isRequired === true ? true : false
}
