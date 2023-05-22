import { objectIdtoUrn } from './objectIdtoUrn'

describe('objectIdtoUrn', () => {
	it.each([
		['1', '1:1.2@1.2'],
		['6', '6'],
	])(
		`Shoudl convert the object id "%s" to the URN "%s"`,
		(objectId, expectedUrn) => {
			expect(objectIdtoUrn(objectId)).toBe(expectedUrn)
		},
	)

	it('should return null for unknown objects', () =>
		expect(objectIdtoUrn('foo')).toBeNull())
})
