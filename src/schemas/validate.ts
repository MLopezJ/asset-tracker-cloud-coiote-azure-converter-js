import type { assetTracker } from './AssetTracker'
import { AssetTracker } from './AssetTracker'
import { validateWithJSONSchema } from './validateWithJsonSchema'

/**
 * Validate a JSON document against the LwM2M Document Schema
 */
export const validate = validateWithJSONSchema<assetTracker>(AssetTracker)
