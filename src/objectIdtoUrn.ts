import type { LwM2MDocument } from '@nordicsemiconductor/lwm2m-types'
import LwM2MSchema from '../node_modules/@nordicsemiconductor/lwm2m-types/LwM2MDocument.schema.json' // TODO: import from "@nordicsemiconductor/lwm2m-types"

/**
 * Given the object id returns the lasted URN definition of the object in @nordicsemiconductor/lwm2m-types
 */
export const objectIdtoUrn = (objectId: string): keyof LwM2MDocument | null => {
	const match = Object.entries(LwM2MSchema.properties).find(
		([id]) => id.split(':')[0] === objectId,
	)

	if (match === undefined) return null
	const [id] = match
	return id as keyof LwM2MDocument
}
