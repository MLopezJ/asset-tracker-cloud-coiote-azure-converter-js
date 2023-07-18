import type { list } from 'src/main'
import { checkResource } from './checkResource'

describe('checkResource', () => {
	it('should return true when required resource value is not undefined', () => {
		const isRequired = true
		const input = { value: 6 }
		expect(checkResource(input, isRequired)).toBe(true)
	})

	it('should return false when required resource value is undefined', () => {
		const isRequired = true
		const input = {}
		expect(checkResource(input, isRequired)).toBe(false)
	})

	it('should return true when a not required value is not undefined', () => {
		const isRequired = false
		const input = {
			value: false,
		}
		expect(checkResource(input, isRequired)).toBe(true)
	})

	it('should return true when a not required value is undefined', () => {
		const isRequired = false
		const input = {}
		expect(checkResource(input, isRequired)).toBe(true)
	})

	it('should return true when required resource list is not undefined', () => {
		const isRequired = true
		const input: list = {
			'0': {
				value: '10.160.120.155',
			},
			attributes: {
				dim: '1',
			},
		}

		input.attributes
		expect(checkResource(input, isRequired)).toBe(true)
	})

	it('should return false when required resource list is undefined', () => {
		const isRequired = true
		const input = {
			attributes: {
				dim: '0',
			},
		}
		expect(checkResource(input, isRequired)).toBe(false)
	})

	it('should return true when no required resource list is not undefined', () => {
		const isRequired = false
		const input: list = {
			'0': {
				value: '10.160.120.155',
			},
			attributes: {
				dim: '1',
			},
		}

		input.attributes
		expect(checkResource(input, isRequired)).toBe(true)
	})

	it('should return true when no required resource list is undefined', () => {
		const isRequired = false
		const input = {
			attributes: {
				dim: '0',
			},
		}
		expect(checkResource(input, isRequired)).toBe(true)
	})

	
})