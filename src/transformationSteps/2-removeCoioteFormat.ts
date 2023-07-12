import type { LwM2MDocument } from '@nordicsemiconductor/lwm2m-types'
import { buildCustomObjects } from '../buildCustomObjects'
import { buildLwM2M } from '../buildLwM2M'
import type { orderObjects } from './1-group'

/**
 * Remove coiote format from objects and set the LwM2M format as described in @nordicsemiconductor/lwm2m-types
 */
export const removeCoioteFormat = (
	input: orderObjects,
): { lwm2m: LwM2MDocument; customObjects: any } => {
	const lwm2m = buildLwM2M(input.lwm2m)
	const customObjects = buildCustomObjects(input.customObjects)

	return { lwm2m, customObjects }
}
