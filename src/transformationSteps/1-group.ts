import { getURN, type LwM2MDocument } from '@nordicsemiconductor/lwm2m-types'

import type { instance, lwm2mCoiote } from '../main'

type objectWithUrn = Record<keyof LwM2MDocument, instance>

export type orderObjects = {
	lwm2m: objectWithUrn[]
	customObjects: lwm2mCoiote[]
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
export const group = async (objects: lwm2mCoiote): Promise<orderObjects> => {
	const customObjects: lwm2mCoiote[] = []
	const lwm2m: objectWithUrn[] = []

	for (const [objectId, value] of Object.entries(objects)) {
		const urn = await getURN(objectId)
		if (urn === undefined) {
			customObjects.push({ [`${objectId}`]: value })
		} else {
			const recognizedObject = { [`${urn}`]: value } as objectWithUrn
			lwm2m.push(recognizedObject)
		}
	}

	return {
		lwm2m,
		customObjects,
	}
}
