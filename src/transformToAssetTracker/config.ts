import type { Config_50009 } from 'src/schemas/Config_50009'
import type { config } from '../schemas/Config'

/**
 * Create config
 */
export const transformToConfig = (config: Config_50009): config => {
	const act = config[0]
	const loct = config[1]
	const actwt = config[2]
	const mvres = config[3]
	const mvt = config[4]
	const accath = config[5]
	const accith = config[8]
	const accito = config[9]

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
