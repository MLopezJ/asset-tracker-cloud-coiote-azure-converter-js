import _ from 'lodash'
import assign from 'lodash.assign'

import type { customObjectValue, objectInstance, value } from './group'

/**
 * Remove the Coiote format from object
 */
export const removeFormat = (
	input: objectInstance,
): customObjectValue | customObjectValue[] | undefined => {
	const data = dataCleaning(input)
	const result = buildStruct(data)

	return result.length === 1 ? result[0] : result
}

/**
 * Remove the 'value' key from element
 * and remove empty elements
 */
const dataCleaning = (rawData: objectInstance): customObjectValue[][] => {
	const cleanData = Object.values(rawData).map((object) => {
		const attributesList = Object.entries(object)
		return attributesList
			.map((element) => {
				const id = element[0]
				const value = element[1]

				// empty value
				if (Object.keys(value).length === 0) return undefined

				const newValue = value as value

				return {
					[id]: newValue.value,
				}
			})
			.filter((result) => result !== undefined)
	})
	return cleanData as customObjectValue[][]
}

/**
 * Build expected struct
 */
const buildStruct = (input: customObjectValue[][]) =>
	input.reduce((previus, current) => {
		const result = assign.apply(_, current as any)
		previus.push(result)
		return previus
	}, [])
