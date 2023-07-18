# Build Asset Tracker Input from Coiote Azure

[![Test and Release](https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/actions/workflows/test-and-release.yaml/badge.svg)](https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/actions/workflows/test-and-release.yaml)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier/)
[![ESLint: TypeScript](https://img.shields.io/badge/ESLint-TypeScript-blue.svg)](https://github.com/typescript-eslint/typescript-eslint)

> Build
> [expected input](https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/state.reported.azure.json)
> of Asset Tracker web application from the result of the
> [integration](https://github.com/MLopezJ/thingy91-coiote-cloud-connection)
> between Coiote and Azure.

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

Result of the
[integration](https://github.com/MLopezJ/thingy91-coiote-cloud-connection)
between Coiote and Azure.

```json
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

The output is an object with the struct described in the
[expected input of Asset Tracker web application](https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/state.reported.azure.json)

```json
{
  "bat": {
    "v": 2754, // /3/0/7
    "ts": 1563968747123 // /3/0/13 || server timestmap
  },
  "env": {
    "v": {
      "temp": 23.6, // /3303/0/5700
      "hum": 50.5, // 3304/0/5700
      "atmp": 100.36 // 3323/0/5700
    },
    "ts": 1563968743666 // /3303/0/5518 || 3304/0/5518 || 3323/0/5518 || server timestmap
  },
  "gnss": {
    "v": {
      "lng": 10.436642, // /6/0/1
      "lat": 63.421133, // /6/0/0
      "acc": 24.798573, // /6/0/3
      "alt": 170.528305, // /6/0/2
      "spd": 0.579327, // /6/0/6
      "hdg": 176.12 // ***** origin missing *****
    },
    "ts": 1563968752991 // /6/0/5 || server timestmap
  },
  "cfg": {
    "loct": 60, // /5009/0/1
    "act": false, // /5009/0/0
    "actwt": 60, // /5009/0/2
    "mvres": 60, // /5009/0/3
    "mvt": 3600, // /5009/0/4
    "accath": 10.5, // /5009/0/5
    "accith": 5.2, // /5009/0/8
    "accito": 1.7, // /5009/0/9
    "nod": []
  },
  "dev": {
    "v": {
      "imei": "352656106111232", // /3/0/2
      "iccid": "89450421180216216095", // ***** origin missing *****
      "modV": "mfw_nrf9160_1.0.0", // /3/0/3
      "brdV": "thingy91_nrf9160" // /3/0/0
    },
    "ts": 1563968743666 // /3/0/13 || server timestmap
  },
  "roam": {
    "v": {
      "band": 3, // ***** origin missing *****
      "nw": "NB-IoT", // /4/0/0
      "rsrp": -97, // 4/0/2
      "area": 12, // /4/0/12
      "mccmnc": 24202, // /4/0/10 & /4/0/9
      "cell": 33703719, // /4/0/8
      "ip": "10.81.183.99", // /4/0/4
      "eest": 7 // ***** origin missing *****
    },
    "ts": 1563968743666 // server timestmap
  },
  "firmware": {
    "fwUpdateStatus": "current",
    "currentFwVersion": "0.0.0-development",
    "pendingFwVersion": ""
  }
}
```

## Transformation steps

To accomplish the expected result, the program execute 4 different changes on
the data:

1. Group
2. Remove Coiote format
3. Check
4. Transform

### 1- Group

Split the input data in 2 groups: LwM2M objects and custom objects. The
[LwM2M Types lib](https://github.com/NordicSemiconductor/lwm2m-types-js) is used
to determinated if the object is LwM2M type.
[example](src/transformationSteps/1-group.spec.ts)

### 2- Remove Coiote format

The Coiote format is removed from the objects and new object is built using the
json schema of it as reference.
[example](src/transformationSteps/2-removeCoioteFormat.spec.ts)

### 3- Check

Uses [LwM2M Types lib](https://github.com/NordicSemiconductor/lwm2m-types-js) to
check if objects have the expected data format. This step is only applied to
verified LwM2M objects.
[example](src/transformationSteps/3-checkLwM2MObjects.spec.ts)

### 4- Transform

Convert the result of the process in the format of the expected input in Asset
Tracker web application
