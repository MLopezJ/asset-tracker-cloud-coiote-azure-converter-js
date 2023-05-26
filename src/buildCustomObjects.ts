import _ from 'lodash'
import assign from 'lodash.assign'
import type { CoioteAzure } from "./main"
import customObjectsSchema from '../customObjects.schema.json'
import { removeFormat } from "./removeFormat"
import { convertObjectUsingSchema } from './convertObjectUsingSchema'
/**
 * Build custom objects
 */
export const buildCustomObjects = (objects: CoioteAzure[]): any | undefined => {
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

		const schema =
		customObjectsSchema.properties[
				urn as unknown as keyof (typeof customObjectsSchema)['properties']
			]
		
		if (schema === undefined){
			return {[`${urn}`]: removeFormat(value)}
		}

		return { [urn]: convertObjectUsingSchema(value, schema) }
	})

	const wrongFormatObjects = list.filter(element => element === null)
	if (wrongFormatObjects.length > 0) return undefined

	return assign.apply(_, list as any)
}