# Check LwM2M objects using LwM2M Types [![npm version](https://img.shields.io/npm/v/@nordicsemiconductor/coiote-azure-converter-js.svg)](https://www.npmjs.com/package/@nordicsemiconductor/coiote-azure-converter-js)

[![Test and Release](https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/actions/workflows/test-and-release.yaml/badge.svg)](https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/actions/workflows/test-and-release.yaml)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
[![Mergify Status](https://img.shields.io/endpoint.svg?url=https://api.mergify.com/v1/badges/NordicSemiconductor/asset-tracker-cloud-coiote-azure-converter-js)](https://mergify.io)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier/)
[![ESLint: TypeScript](https://img.shields.io/badge/ESLint-TypeScript-blue.svg)](https://github.com/typescript-eslint/typescript-eslint)

> Split input into LwM2M objects or custom objects, using the LwM2M Type library
## Status: Work in progress
Currently there is no functionality in this project. This is work in progress.
 
## Expected input
The input is the result of a device with Asset Tracker v2 firmware publishing to a Coite instance which has an integration with Microsoft Azure.

[Input](https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/tree/saga/documents/i.ts)

## Expected output
The output is a new data struct which contain 2 sections; the recognized LwM2M objects and no LwM2M objects. The LwM2M Types lib is been using to check the veracity of LwM2M objects.

[Output](https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/tree/saga/documents/o.ts)

## Transformation process
Here is described the steps required to went from the [expected input](https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/tree/transformation-process#expected-input) to the [expected output](https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/tree/transformation-process#expected-output)

### Assumptions

// TODO: transform this to tests

#### 1- Empty objects

``` json
"1": {
    "0": {
        "3": {}, // here
    }
},
```

Object with id 3 is considered as empty value and will be removed from output

``` json
"1": { }
```

#### 2- List definition

``` json
"1": {
    "0": {
        "8": {
            "0": {
                "value": 10
            },
            "1": {
                "value": 14
            },
            "attributes": {
                "dim": "2"
            }
        }
    }
}
```

Objects with the object ` {"attributes": { "dim": X }} ` as props are going to be interpret as lists

``` json
"1": { "8": [10, 14] }
```


