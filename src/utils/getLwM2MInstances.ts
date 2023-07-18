import type { LwM2MDocumentSchema } from "@nordicsemiconductor/lwm2m-types"
import { setValue } from "../checkCoioteValue"
import type { instance } from "../main"
import { checkResource } from "./checkResource"
import assign from 'lodash.assign'
import _ from 'lodash'

/**
 * Remove coiote format from instances of a LwM2M object and convert to list using the given schema
 */
export const getLwM2MInstances = (
    input: instance,
	schema: (typeof LwM2MDocumentSchema.properties)[keyof (typeof LwM2MDocumentSchema)['properties']],
): Record<string, unknown>[] | undefined => {
    const instances = Object.entries(input)
    const requiredResources: string[] = schema.items.required // required resources in the LwM2M shcema definition of that object
   return instances.map(([instanceId, resources]) => {
       const instance = Object.entries(resources)
           .map(([resourceId, value]) => {
               const isRequired = requiredResources.includes(resourceId) // TODO: fix it
               const isValid = checkResource(value , isRequired) // TODO: remove any // checkRequiredInstance
               
               if (isValid === false) {
                   console.log(
                       `id ${resourceId} is required in object in order with schema definition but missing in instance ${instanceId}`,
                       schema,
                   )
                   return false
               }

               // empty value
               if (Object.keys(value).length === 0) return undefined

               const dataType = schema.items.properties[`${resourceId}`].type // TODO: fix it
               const newValueFormat = setValue(value , dataType)
               return {
                   [`${resourceId}`]: newValueFormat,
               }
           })
           .filter((result) => result !== undefined) // remove empty values

       if (instance.includes(false)) return undefined

       return assign.apply(_, instance as any)
   })
}
