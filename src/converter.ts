import { checkLwM2MObjects } from './checkLwM2MObjects'
import { group } from './group'
import { removeCoioteFormat } from './removeCoioteFormat'
import type { assetTracker } from './schemas/AssetTracker'
import { transformation } from './transform'

export type value = { value: string | number | boolean }
export type list = Record<string, { dim: string } | value>
export type attribute = { attributes: { dim: string } }
export type resource = { [key: string]: value | list }
type instanceId = string
export type instance = Record<instanceId, resource>
type objectId = string
export type lwm2mCoiote = Record<objectId, instance>

export type deviceTwin = {
	properties: {
		desired: unknown
		reported: { lwm2m: lwm2mCoiote; $metadata: unknown; $version: number }
	}
}

export const converter = async (
	deviceTwin: deviceTwin,
): Promise<assetTracker | undefined> => {
	const input = deviceTwin.properties.reported.lwm2m

	// step # 1
	const objects = await group(input)

	// step # 2
	const { lwm2m, customObjects } = removeCoioteFormat(objects)

	// step # 3
	const check = checkLwM2MObjects(lwm2m)
	if (check === false) return undefined

	// step # 4
	const result = transformation({ lwm2m, customObjects }, 1563968743666) //buildAssetTrackerFormat

	return result
}
