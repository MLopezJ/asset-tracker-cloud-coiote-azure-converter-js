import { Device_3_urn } from '@nordicsemiconductor/lwm2m-types'
import {
	getTimestamp,
	type instance_metadata,
	type lwm2m_metadata,
	type resource_metadata,
	type value_metadata,
} from './getTimestamp.js'

const objectURN = Device_3_urn
const resourceId = 7

// TODO: this is temporal
// remove this when solve TODO in src/utils/getTimestamp.ts

const value = {
	$lastUpdated: '2023-07-07T12:11:03.0324459Z',
	value: {
		$lastUpdated: '2023-07-07T12:11:03.0324459Z',
	},
}
const v = (v: value_metadata) => console.log(v)
v(value)

const resource = {
	'0': value,
	$lastUpdated: '2023-07-07T12:11:03.0324459Z',
}

const r = (r: resource_metadata) => console.log(r)
r(resource)

const instance = {
	'0': resource,
	$lastUpdated: '2023-07-07T12:11:03.0324459Z',
}
const i = (i: instance_metadata) => console.log(i)
i(instance)

const object = {
	'3': instance,
	$lastUpdated: '2023-07-07T12:11:03.0324459Z',
}
const o = (o: lwm2m_metadata) => console.log(o)
o(object)

/**/
const metadata = {
	$lastUpdated: '2023-07-07T12:11:03.0324459Z',
	lwm2m: object,
}

getTimestamp(objectURN, resourceId, metadata)
