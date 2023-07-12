import { getURN } from '@nordicsemiconductor/lwm2m-types'

import type { CoioteAzure } from '../main'

export type orderObjects = {
	lwm2m: CoioteAzure[]
	customObjects: CoioteAzure[]
}

/**
 * Split the input in 2 groups:
 *
 * 1- Recognized LwM2M type objects
 * 2- Not recognized LwM2M type objects (custom objects)
 *
 * The @nordicsemiconductor/lwm2m-types is used to determinated if an object is recognized as LwM2M type or not.
 * The group of the recognized objects change its key for the URN used in lwm2m-type lib
 */
export const group = async (objects: CoioteAzure): Promise<orderObjects> => {
	const customObjects: CoioteAzure[] = []
	const lwm2m: CoioteAzure[] = []

	for (const [objectId, value] of Object.entries(objects)) {
		const urn = await getURN(objectId)
		urn === undefined
			? customObjects.push({ [`${objectId}`]: value })
			: lwm2m.push({ [`${urn}`]: value })
	}

	return {
		lwm2m,
		customObjects,
	}
}
