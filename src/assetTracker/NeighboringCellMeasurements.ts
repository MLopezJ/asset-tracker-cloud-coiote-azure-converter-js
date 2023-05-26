import { Type } from '@sinclair/typebox'

export const Cell = Type.Integer({
	description:
		'The cell ID the User Equipment (UE) is camped on. 4-byte Evolved Terrestrial Radio Access Network (E-UTRAN) cell ID.',
	minimum: 1,
	examples: [33703719],
})

export const Area = Type.Integer({
	minimum: 1,
	description: 'Area code.',
	examples: [12],
})

export const EARFCN = Type.Integer({
	description:
		'E-UTRA Absolute Radio Frequency Channel Number (EARFCN) of the current cell where the EARFCN is as defined in 3GPP TS 36.101. LTE carrier channel number for unique identification of LTE band and carrier frequency.',
	minimum: 1,
	examples: [262143],
})

export const RSRP = Type.Number({
	minimum: -199,
	maximum: 0,
	title: 'RSRP',
	description:
		'Reference Signal Received Power (RSRP). The average power level in dBm received from a single reference signal in an LTE (Long-term Evolution) network. Typically this value ranges from -140 to -40 dBm. ',
	examples: [-97, -104],
})