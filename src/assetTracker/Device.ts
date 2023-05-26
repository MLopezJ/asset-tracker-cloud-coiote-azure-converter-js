import { Type } from '@sinclair/typebox'
import { Timestamp } from './Timestamp.js'
import { $id } from './$id.js'

export const DeviceValue = Type.Object({
	imei: Type.String({
		description: 'Board IMEI',
		minLength: 15,
		maxLength: 16,
		examples: ['352656106111232'],
	}),
	iccid: Type.String({
		description: 'SIM ICCID',
		minLength: 19,
		maxLength: 20,
		examples: ['89450421180216216095'],
	}),
	modV: Type.String({
		description: 'Modem Firmware Version',
		minLength: 1,
		examples: ['mfw_nrf9160_1.0.0'],
	}),
	brdV: Type.String({
		description: 'Board Version',
		minLength: 1,
		examples: ['thingy91_nrf9160'],
	}),
})
export const Device = Type.Object(
	{
		v: DeviceValue,
		ts: Timestamp(),
	},
	{
		$id: $id('device'),
		description:
			'Static device information. This information shall be updated by the device once after reboot.',
	},
)