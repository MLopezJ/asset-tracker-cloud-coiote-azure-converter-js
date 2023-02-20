import deviceTwin from '../documents/deviceTwin.json'
import equivalentLwM2M from '../documents/output.json'
import { getPayload, main } from './main'

describe('main', () => {
	it('should return the Equivalent LwM2M object given a device twin object', () => {
		expect(main(deviceTwin)).toMatchObject(equivalentLwM2M)
	})
})

describe('getPayload', () => {
	it('should return the LwM2M object from a given device twin', () => {
		expect(getPayload(deviceTwin)).toMatchObject(
			deviceTwin.properties.reported.lwm2m,
		)
	})
})
