import type { LwM2MDocument } from '@nordicsemiconductor/lwm2m-types'
import { setCustomFormat } from '../utils/setCustomFormat'
import { setLwM2MFormat } from '../utils/setLwM2MFormat'
import type { orderObjects } from './1-group'

/**
 * Remove coiote format from instances and set the LwM2M format as described in @nordicsemiconductor/lwm2m-types
 */
export const removeCoioteFormat = (
	input: orderObjects,
): { lwm2m: LwM2MDocument; customObjects: any } => {
	const lwm2m = setLwM2MFormat(input.lwm2m)
	const customObjects = setCustomFormat(input.customObjects)

	return { lwm2m, customObjects }
}
