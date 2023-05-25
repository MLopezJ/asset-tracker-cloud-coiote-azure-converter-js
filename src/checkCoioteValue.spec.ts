import { setValue, validValue } from './checkCoioteValue'

describe('setValue', () => {
	it('should return string if not data type is specified', () => {
		expect(setValue({ value: 1 })).toBe('1')
	})

	it.each([
		[{ value: 'a' }, 'string', 'a'],
		[{ value: 1 }, 'integer', 1],
		[{ value: 0 }, 'boolean', false],
	])(`should transform '%j' in %s`, (input, dataType, expected) => {
		expect(setValue(input, dataType)).toBe(expected)
	})
})

describe('validValue', () => {
	it('should return false when a required value is undefined', () => {
		expect(validValue({}, true)).toBe(false)
	})

	it('should return true when a required value is not undefined', () => {
		expect(validValue({ value: 'a' }, true)).toBe(true)
	})
})
