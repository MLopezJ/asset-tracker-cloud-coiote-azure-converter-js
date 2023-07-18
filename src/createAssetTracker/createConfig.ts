/**
 * Asset Tracker Configuration
 *
 * Asset Tracker v2 configuration object
 *
 * @see https://github.com/NordicSemiconductor/asset-tracker-cloud-firmware-aws/blob/saga/src/cloud/lwm2m_integration/config_object_descript.xml
 *
 * ID: 50009
 * LWM2MVersion:
 * ObjectVersion:
 * MultipleInstances: false
 * Mandatory: false
 */
export type Config_50009 = Readonly<{
	'0': boolean
	'1': number
	'2': number
	'3': number
	'4': number
	'5': number
	'6': boolean
	'7': boolean
	'8': number
	'9': number
}>

/**
 * Asset Tracker web app Configuration object
 *
 * @see https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/Config.ts
 */
export type cfg = Readonly<{
	loct: number
	act: boolean
	actwt: number
	mvres: number
	mvt: number
	accath: number
	accith: number
	accito: number
	nod: string[]
}>

/**
 * Create config
 */
export const createConfig = (config: Config_50009): cfg => {
	return {
		loct: config[1],
		act: config[0],
		actwt: config[2],
		mvres: config[3],
		mvt: config[4],
		accath: config[5],
		accith: config[8],
		accito: config[9],
		nod: [],
	}
}
