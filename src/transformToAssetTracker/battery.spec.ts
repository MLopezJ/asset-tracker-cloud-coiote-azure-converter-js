import { createBatery } from './battery'

describe('createBatery', () => {
	let serverTime: number

	beforeEach(() => {
		serverTime = 45612456
	})

	it('should create Batery with Device values', () => {
		const device = {
			'0': 'Nordic Semiconductor ASA',
			'1': 'Thingy:91',
			'2': '351358815340515',
			'3': '22.8.1+0',
			'11': 0,
			'7': 80,
			'13': 1675874731000,
			'16': 'UQ',
			'19': '3.2.1',
		}

		expect(createBatery(device, serverTime)).toMatchObject({
			v: 80,
			ts: 1675874731000,
		})
	})

	it('should return undefined if Batery values are not found in Device object', () => {
		const device = {
			'0': 'Nordic Semiconductor ASA',
			'1': 'Thingy:91',
			'2': '351358815340515',
			'3': '22.8.1+0',
			'11': 0,
			'13': 1675874731000,
			'16': 'UQ',
			'19': '3.2.1',
		}

		expect(createBatery(device, serverTime)).toBe(undefined)
	})
})
