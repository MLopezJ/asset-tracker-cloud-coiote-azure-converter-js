type deviceTwin = any // TODO: set proper type
type EquivalentLwM2M = any // TODO: set proper type

/**
 * Convert LwM2M JSON written by AVSystem's Coiote Azure integration
 * to Equivalent-LwM2M JSON
 *
 * @see https://iotdevzone.avsystem.com/docs/Demo_Projects/Tracking_tutorial/
 * Equivalent-LwM2M JSON is a temporal name to represent nRF Asset Tracker LwM2M JSON because
 * there are some question about it
 */
export const main = (deviceTwin: deviceTwin): EquivalentLwM2M => {
	const payload = getPayload(deviceTwin)
	return payload
}

type payload = any // TODO: set proper type

/**
 * Remove not usefull object layers from the device twin response and return the LwM2M data
 */
export const getPayload = (twin: deviceTwin): payload => {
	return null
}
