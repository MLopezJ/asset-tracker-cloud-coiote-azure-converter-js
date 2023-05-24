import type { CoioteAzure } from './main'
import { objectIdtoUrn } from './objectIdtoUrn'

export type orderObjects = {
	lwm2m: CoioteAzure[]
	customObjects: CoioteAzure[]
}

/**
 * Split the Coiote's Azure LwM2M json in 2 groups:
 *
 * 1- Recognized LwM2M type objects
 * 2- Not recognized LwM2M type objects (custom objects)
 *
 * The @nordicsemiconductor/lwm2m-types is used to determinated if an object is recognized as LwM2M type or not.
 */
export const group = (objects: CoioteAzure): orderObjects => {
	const customObjects: CoioteAzure[] = []
	const lwm2m: CoioteAzure[] = []

	for (const [objectId, value] of Object.entries(objects)) {
		const urn = objectIdtoUrn(objectId)

		// not a LwM2M object
		if (urn === null) {
			customObjects.push({ [`${objectId}`]: value })
		} else {
			lwm2m.push({ [`${urn}`]: value })
		}
	}

	return {
		lwm2m,
		customObjects,
	}
}
