import type { ConfigData } from '@nordicsemiconductor/asset-tracker-cloud-docs/protocol'
import type { Config_50009 } from 'src/schemas/Config_50009'

/**
 * Transform input into config format
 */
export const transformToConfig = (input: Config_50009): ConfigData => {
	const act = input[0]
	const loct = input[1]
	const actwt = input[2]
	const mvres = input[3]
	const mvt = input[4]
	const accath = input[5]
	const accith = input[8]
	const accito = input[9]

	return {
		loct,
		act,
		actwt,
		mvres,
		mvt,
		accath,
		accith,
		accito,
		nod: [],
	}
}
