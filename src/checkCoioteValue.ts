export type coioteValueFormat =
	| Record<'value', string | number | boolean>
	| Record<string, never>

/**
 * Remove the key 'value' from element and set expected data type
 */
export const setValue = (
	input: coioteValueFormat,
	dataType?: string,
): undefined | number | boolean | string => {
	const value = input.value

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

	if (value === undefined && isRequired === true) return false

	return true
}
