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

``` json
{
  "deviceId": "urn:imei:000000000000008",
  "etag": "AAAAAAAAAAE=",
  "deviceEtag": "MTMwNTk1MzI2",
  "status": "enabled",
  "statusUpdateTime": "0001-01-01T00:00:00Z",
  "connectionState": "Connected",
  "lastActivityTime": "0001-01-01T00:00:00Z",
  "cloudToDeviceMessageCount": 0,
  "authenticationType": "sas",
  "x509Thumbprint": {
    "primaryThumbprint": null,
    "secondaryThumbprint": null
  },
  "modelId": "",
  "version": 7,
  "properties": {
    "desired": {
      "$metadata": {
        "$lastUpdated": "2023-07-05T14:35:14.759071Z"
      },
      "$version": 1
    },
    "reported": {
      "lwm2m": {
        "1": {
          "0": {
            "0": {
              "value": 1
            },
            "1": {
              "value": 50
            },
            "6": {
              "value": false
            },
            "7": {
              "value": "U"
            },
            "16": {
              "value": true
            },
            "23": {
              "value": false
            }
          }
        },
        "3": {
          "0": {
            "0": {
              "value": "Nordic Semiconductor"
            },
            "1": {
              "value": "Thingy:91"
            },
            "2": {
              "value": "351358815340515"
            },
            "3": {
              "value": "22.8.1+0"
            },
            "11": {
              "0": {
                "value": 0
              },
              "attributes": {
                "dim": "1"
              }
            },
            "13": {
              "value": 1675874731000
            },
            "16": {
              "value": "UQ"
            },
            "19": {
              "value": "3.2.1"
            }
          }
        },
        "4": {
          "0": {
            "0": {
              "value": 6
            },
            "1": {
              "0": {
                "value": 6
              },
              "1": {
                "value": 7
              },
              "attributes": {
                "dim": "2"
              }
            },
            "2": {
              "value": -85
            },
            "3": {
              "value": 23
            },
            "4": {
              "0": {
                "value": "10.160.120.155"
              },
              "attributes": {
                "dim": "1"
              }
            },
            "8": {
              "value": 34237196
            },
            "9": {
              "value": 2
            },
            "10": {
              "value": 242
            }
          },
          "attributes": {
            "ver": "1.2"
          }
        },
        "5": {
          "0": {
            "0": { "value": "1.0.0" },
            "1": {
              "value": ""
            },
            "3": {
              "value": 0
            },
            "5": {
              "value": 1
            },
            "8": {
              "0": {
                "value": 0
              },
              "1": {
                "value": 1
              },
              "attributes": {
                "dim": "2"
              }
            },
            "9": {
              "value": 2
            }
          }
        },
        "6": {
          "0": {
            "0": { "value": -43.5723 },
            "1": { "value": 153.2176 },
            "2": { "value": 2 },
            "3": {},
            "5": { "value": 1665149633 },
            "6": { "value": 5 }
          }
        },
        "3303": {
          "0": {
            "5601": {
              "value": 27.18
            },
            "5602": {
              "value": 27.71
            },
            "5700": {
              "value": 27.18
            },
            "5701": {
              "value": "Cel"
            }
          }
        },
        "3304": {
          "0": {
            "5601": {
              "value": 23.535
            },
            "5602": {
              "value": 24.161
            },
            "5700": {
              "value": 24.057
            },
            "5701": {
              "value": "%RH"
            }
          }
        },
        "3313": {
          "0": {
            "5701": {
              "value": "m/s2"
            },
            "5702": {
              "value": -0.372652
            },
            "5703": {
              "value": -0.117679
            },
            "5704": {
              "value": -9.012311
            }
          }
        },
        "3315": {
          "0": {
            "5601": {
              "value": 101697
            },
            "5602": {
              "value": 101705
            },
            "5700": {
              "value": 101705
            },
            "5701": {
              "value": "Pa"
            }
          }
        },
        "3347": {
          "0": {
            "5500": {
              "value": false
            },
            "5501": {
              "value": 0
            },
            "5750": {
              "value": "Button 0"
            }
          }
        },
        "3420": {
          "0": {
            "1": {
              "value": "#000000"
            }
          }
        },
        "10256": {
          "0": {
            "0": {
              "value": 428
            },
            "2": {
              "value": 6300
            },
            "3": {
              "value": 52
            },
            "4": {
              "value": 14
            },
            "5": {
              "value": 0
            }
          }
        },
        "50001": {
          "0": {
            "0": {
              "value": 5
            },
            "1": {
              "value": 128
            },
            "6": {},
            "7": {
              "value": "403"
            },
            "8": {},
            "9": {},
            "10": {},
            "11": {}
          }
        },
        "50009": {
          "0": {
            "0": {
              "value": true
            },
            "2": {
              "value": 120
            },
            "3": {
              "value": 600
            },
            "4": {
              "value": 7200
            },
            "1": {
              "value": 120
            },
            "5": {
              "value": 8.5
            },
            "8": {
              "value": 2.5
            },
            "9": {
              "value": 0.5
            }
          }
        }
      },
      "$metadata": {
        "$lastUpdated": "2023-07-07T12:11:03.0324459Z"
      }
    },
    "$version": 6
  },
  "capabilities": {
    "iotEdge": false
  }
}
```

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
