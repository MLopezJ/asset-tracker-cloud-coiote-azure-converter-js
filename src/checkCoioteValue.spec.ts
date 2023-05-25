import { coioteValueFormat, setValue, validValue } from './checkCoioteValue'

describe('setValue', () => {
	it('should return string if not data type is specified', () => {
		expect(setValue({ value: 1 })).toBe('1')
	})

    it('should transform input in array', () => {
        const list = { '0': { value: 0 }, '1': { value: 0 }, attributes: { dim: '2' }}
        const result = setValue(list)
		expect(result).toMatchObject([0, 0])
        if(Array.isArray(result)){
            expect(result.length).toBe(Number(list.attributes.dim))
        }
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

    it('should return true when checking a valid list value', () => {
        const list = { '0': { value: 0 }, attributes: { dim: '1' }}
        expect(validValue(list, true)).toBe(true)
    })

    it('should return false when checking an invalid list value', () => {
        const list = { '0': { value: 0 }, attributes: { }} as unknown as  coioteValueFormat
        expect(validValue(list, true)).toBe(false)
    })
})
