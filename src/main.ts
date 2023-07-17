import type { LwM2MDocument } from '@nordicsemiconductor/lwm2m-types'
import { validate } from '@nordicsemiconductor/lwm2m-types'
import type { assetTracker } from './assetTracker/AssetTracker'
import { buildCustomObjects } from './buildCustomObjects'
import { buildLwM2M } from './buildLwM2M'
import { createAssetTracker } from './createAssetTracker'
import { group } from './group'

export type NoValue = Record<string, never> //{}
export type value = { value: string | number | boolean }
export type listValue = { '0': value | NoValue; attributes: { dim: string } } //TODO: solve this. Record<string, value | NoValue> & { attributes: {dim: string} }
export type valueOptions = value | NoValue | listValue // list or value
export type attribute = Record<string, valueOptions> // attribute id: value options
export type objectInstance = Record<string, attribute> // instance id: attribute id

type resource = {[key: string] : NoValue | value | listValue }
type instanceId = string
export type instance = Record<instanceId, resource>
type objectId = string
export type lwm2mCoiote = Record<objectId, instance> // coiote format of LwM2M objects

export type deviceTwin = {
	properties: {
		desired: unknown
		reported: { lwm2m: lwm2mCoiote; $metadata: unknown; $version: number }
	}
}

export type customObjectValue = Record<string, number | string | boolean>
export type customObject = Record<string, customObjectValue>

export type objects = {
	lwm2m: LwM2MDocument
	customObjects: customObject
}

/**
 *
 */
export const main = (deviceTwin: deviceTwin): assetTracker | undefined => {
	const input = deviceTwin.properties.reported.lwm2m
	const objects = group(input)
	const lwm2m = buildLwM2M(objects.lwm2m)
	const maybeValidLwM2M = validate(lwm2m)

	if ('errors' in maybeValidLwM2M) {
		console.error(maybeValidLwM2M.errors)
	}

	const customObjects = buildCustomObjects(objects.customObjects)

	const assetTracker = createAssetTracker({ lwm2m, customObjects })

	if (assetTracker === undefined) return undefined

	return assetTracker
}
