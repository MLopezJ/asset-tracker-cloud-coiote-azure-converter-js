import { buildCustomObjects } from "./buildCustomObjects"
import type { CoioteAzure, objectInstance } from "./main"

describe("buildCustomObjects", () => {
    it('should build custom objects', () => {
        const input = [
            {
                '50001': {
                    '0': {
                        '0': {
                            value: 5,
                        },
                        '1': {
                            value: 128,
                        },
                        '6': {},
                        '7': {
                            value: 403,
                        },
                        '8': {},
                        '9': {},
                        '10': {},
                        '11': {},
                    },
                },
            },
            {
                '50009': {
                    '0': {
                        '0': {
                            value: true,
                        },
                        '2': {
                            value: 120,
                        },
                        '3': {
                            value: 600,
                        },
                        '4': {
                            value: 7200,
                        },
                        '1': {
                            value: 120,
                        },
                        '5': {
                            value: 8.5,
                        },
                        '8': {
                            value: 2.5,
                        },
                        '9': {
                            value: 0.5,
                        },
                    },
                },
            },
        ]
        const expected = {
            '50001': {
                '0': 5,
                '1': 128,
                '7': 403,
            },
            '50009': {
                '0': true,
                '2': 120,
                '3': 600,
                '4': 7200,
                '1': 120,
                '5': 8.5,
                '8': 2.5,
                '9': 0.5,
            },
        }

        expect(buildCustomObjects(input)).toMatchObject(expected)
    })

    it('should return undefined when value of object is not found', () => {
        const input = [
            {
                '50001': undefined as unknown as objectInstance,
            }
        ]
        expect(buildCustomObjects(input)).toBe(undefined)
    })

    it('should return undefined when object is not found', () => {
        const input = [
            {
                undefined
            } as unknown as CoioteAzure
        ]
        expect(buildCustomObjects(input)).toBe(undefined)
    })
})