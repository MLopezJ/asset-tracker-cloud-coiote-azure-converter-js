/**
 * @see https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/%24id.ts
 */
export const $id = (id: string): string =>
	`https://nordicsemiconductor.github.io/asset-tracker-cloud-docs/${
		process.env.VERSION ?? 'saga'
	}/docs/cloud-protocol/${id}.schema.json`
