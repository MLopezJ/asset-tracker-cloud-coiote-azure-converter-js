import type { assetTracker } from './assetTracker/AssetTracker'
import { group } from './transformationSteps/1-group'
import { removeCoioteFormat } from './transformationSteps/2-removeCoioteFormat'
import { checkLwM2MObjects } from './transformationSteps/3-checkLwM2MObjects'
import { transformation } from './transformationSteps/4-transform'

export type value = { value: string | number | boolean }
export type list = Record<string, { dim: string } | value> //NoValue
export type attribute = { attributes: { dim: string } }
export type resource = { [key: string]: value | list } // listValue NoValue
type instanceId = string
export type instance = Record<instanceId, resource> // TODO: or instanceS...
type objectId = string
export type lwm2mCoiote = Record<objectId, instance> // coiote format of LwM2M objects

export type deviceTwin = {
	properties: {
		desired: unknown
		reported: { lwm2m: lwm2mCoiote; $metadata: unknown; $version: number }
	}
}

export const index = async (
	deviceTwin: deviceTwin,
): Promise<assetTracker | undefined> => {
	const input = deviceTwin.properties.reported.lwm2m

	const objects = await group(input)

	const { lwm2m, customObjects } = removeCoioteFormat(objects)

	const check = checkLwM2MObjects(lwm2m)
	if (check === false) return undefined

	const result = transformation({ lwm2m, customObjects }, 1563968743666) //buildAssetTrackerFormat

	return result
}
