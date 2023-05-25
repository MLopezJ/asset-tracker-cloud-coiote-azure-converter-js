type value = Record<'value', string | number | boolean>
type dimension = Record<'dim', string>
type coioteListFormat = Record<string | 'attributes', value | dimension>

export type coioteValueFormat = value | Record<string, never> | coioteListFormat

/**
 * Remove the key 'value' from element and set expected data type
 */
export const setValue = (
	input: coioteValueFormat,
	dataType?: string,
): undefined | number | boolean | string | unknown[] => {
	const value = input.value

	if (input['attributes']?.dim !== undefined) { // TODO: solve this
		// is a list
		return Object.values(input)
			.filter((element) => {
				if (element.dim === undefined) {
					return element
				}
			})
			.map((element) => element.value)
	}

	if (value === undefined) return undefined

	switch (dataType) {
		case 'number':
		case 'integer':
			return Number(value)
		case 'boolean':
			return Boolean(value)
		default:
			return String(value)
	}
}

/**
 * If the value is required it should not be undefine
 */
export const validValue = (
	input: coioteValueFormat,
	isRequired: boolean,
): boolean => {
	const value = input.value

	if (value === undefined) {
		// input could be a list. check it format
		const list = input['attributes'] // TODO: solve this
		if (list?.dim !== undefined) {
			// is a list with valid format, return true
			return true
		}

		// input does not contains list format neither value format
		if (isRequired === true) return false
	}

	return true
}
