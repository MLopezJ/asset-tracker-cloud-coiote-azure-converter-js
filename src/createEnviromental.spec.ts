import { createEnviromental } from "./createEnviromental"

describe("createEnviromental", () => {
    it("should create Env with LwM2M objects", () => {

        const temperature = [
            {'5700': 15}
        ]
        const humidity = [
            {'5700': 30,}
        ]
        const barometer = [
            {
                '5601': 101697,
                '5602': 101705,
                '5700': 101705,
                '5701': 'Pa',
            },
        ]
        
        const result = {
            v: {
                temp: 15,
                hum: 30,
                atmp: 101705,
            },
            ts: 123456,
        }

        expect(createEnviromental(temperature, humidity, barometer)).toMatchObject(result)
    })

    it('should return undefined if Enviromental values are not found in LwM2M objects', () => {
		const temperature = [
            {'5700': 15}
        ]
        const humidity = [
            {}
        ]
        const barometer = [
            {
                '5601': 101697,
                '5602': 101705,
                '5700': 101705,
                '5701': 'Pa',
            },
        ]

        expect(createEnviromental(temperature, humidity as any, barometer)).toBe(undefined)
	})
})