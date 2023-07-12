# Build Asset Tracker Input from Coiote Azure [![npm version](https://img.shields.io/npm/v/@nordicsemiconductor/coiote-azure-converter-js.svg)](https://www.npmjs.com/package/@nordicsemiconductor/coiote-azure-converter-js)

[![Test and Release](https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/actions/workflows/test-and-release.yaml/badge.svg)](https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/actions/workflows/test-and-release.yaml)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
[![Mergify Status](https://img.shields.io/endpoint.svg?url=https://api.mergify.com/v1/badges/NordicSemiconductor/asset-tracker-cloud-coiote-azure-converter-js)](https://mergify.io)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier/)
[![ESLint: TypeScript](https://img.shields.io/badge/ESLint-TypeScript-blue.svg)](https://github.com/typescript-eslint/typescript-eslint)

> Build [expected input](https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/state.reported.azure.json) of Asset Tracker web application from the result of the [integration](https://github.com/MLopezJ/thingy91-coiote-cloud-connection) between Coiote and Azure.

## Status: Work in progress

Currently there is no functionality in this project. This is work in progress.


## Installation

```
npm install
```

## Test

```
npm test
```

## Expected input

The input is the result of a device with Asset Tracker v2 firmware publishing
data to a Coite instance which has an integration with Microsoft Azure.

[Input](https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/tree/saga/documents/i.ts)

## Expected output

The output is a new data struct which contain 2 sections; the recognized LwM2M
objects and no LwM2M objects. The LwM2M Types lib is been using to check the
veracity of LwM2M objects.

[Output](https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/tree/saga/documents/o.ts)

## Specifications

To accomplish the expected result, the program execute 4 different process consecutively:

1. Group
2. Build
3. Check
4. Transform

### 1- Group

Split the input data in 2 groups: LwM2M objects and custom objects. The [LwM2M
Types lib](https://github.com/NordicSemiconductor/lwm2m-types-js) is used to
determinated if the object is LwM2M type.

### 2- Build

The Coiote format is removed from the objects and new object is built using the
json schema of it as reference

### 3- Check

Using [LwM2M
Types lib](https://github.com/NordicSemiconductor/lwm2m-types-js) the LwM2M objects
are checked to validate if they have the expected data format.

### 4- Transform

Convert the result of the process in the format of the expected input in Asset
Tracker
