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

## Installation

```
npm install
```

## Test

```
npm test
```

## Coverage

```
npm test -- --coverage
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
        "lwm2m": {
          "3347": {
            "0": {
              "5501": {
                "$lastUpdated": "2023-07-07T12:11:03.0324459Z",
                "value": {
                  "$lastUpdated": "2023-07-07T12:11:03.0324459Z"
                }
              },
              "5750": {
                "$lastUpdated": "2023-07-07T12:11:03.0324459Z",
                "value": {
                  "$lastUpdated": "2023-07-07T12:11:03.0324459Z"
                }
              },
              "$lastUpdated": "2023-07-07T12:11:03.0324459Z"
            },
            "$lastUpdated": "2023-07-07T12:11:03.0324459Z"
          },
          "$lastUpdated": "2023-07-07T12:11:03.0324459Z"
        }
      }
    },
    "$version": 6
  },
  "capabilities": {
    "iotEdge": false
  }
}
```

full device twin object here: [input.js](documents/input.ts)

## Expected output

The output is an object with the struct described in the
[Asset Tracker Web Application input](https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/state.reported.azure.json)

```json
{
  "bat": {
    "v": 2754,
    "ts": 1563968747123
  },
  "env": {
    "v": {
      "temp": 23.6,
      "hum": 50.5,
      "atmp": 100.36
    },
    "ts": 1563968743666
  },
  "gnss": {
    "v": {
      "lng": 10.436642,
      "lat": 63.421133,
      "acc": 24.798573,
      "alt": 170.528305,
      "spd": 0.579327,
      "hdg": 0 // ***** origin missing *****
    },
    "ts": 1563968752991
  },
  "cfg": {
    "loct": 60,
    "act": false,
    "actwt": 60,
    "mvres": 60,
    "mvt": 3600,
    "accath": 10.5,
    "accith": 5.2,
    "accito": 1.7,
    "nod": []
  },
  "dev": {
    "v": {
      "imei": "352656106111232",
      "iccid": "0000000000000000000", // ***** origin missing *****
      "modV": "mfw_nrf9160_1.0.0",
      "brdV": "thingy91_nrf9160"
    },
    "ts": 1563968743666
  },
  "roam": {
    "v": {
      "band": 3, // ***** origin missing *****
      "nw": "NB-IoT",
      "rsrp": -97,
      "area": 12,
      "mccmnc": 24202,
      "cell": 33703719,
      "ip": "10.81.183.99",
      "eest": 5 // ***** origin missing *****
    },
    "ts": 1563968743666
  }
}
```

## Data transition

| LwM2M                                                                                                                                             | Name                    | Asset Tracker                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------- |
| [3](https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/version_history/3-1_1.xml)                                                     | Device                  | [bat](documents/battery.md), [dev](documents/device.md) |
| [4](https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/version_history/4-1_1.xml)                                                     | Connectivity Monitoring | [roam](documents/roaming.md)                            |
| [6](https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/version_history/6-1_0.xml)                                                     | Location                | [gnss](documents/gnss.md)                               |
| [3303](https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/version_history/3303-1_1.xml)                                               | Temperature             | [env](documents/environment.md)                         |
| [3304](https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/version_history/3304-1_1.xml)                                               | Humidity                | [env](documents/environment.md)                         |
| [3323](https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/version_history/3323-1_1.xml)                                               | Pressure                | [env](documents/environment.md)                         |
| [50009](https://github.com/NordicSemiconductor/asset-tracker-cloud-firmware-aws/blob/saga/src/cloud/lwm2m_integration/config_object_descript.xml) | Config                  | [cfg](documents/config.md)                              |

## Usage

```JavaScript
try {
	const result = await converter(deviceTwin)
	console.log(result)
} catch (error) {
	console.error('There is an error when trying to convert')
}
```

See [example.ts](src/example.ts)

## Notes

### Missing values

There are some values from
[Asset Tracker Web App](https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/state.reported.azure.json)
whose origin is still missing.

- `hdg` from `gnss`. Until find the origin, default value is `0`
- `iccid` from `dev`. Until find the origin, default value is
  `'0000000000000000000'`
- `band` from `roam`. Until find the origin, default value is `3`
- `eest` from `roam`. Until find the origin, default value is `5`

more info:
[data transicion](https://github.com/MLopezJ/nRF-Asset-Tracker-through-Coiote-flow#data-transicion)

### Default LwM2M version

The default LwM2M version used by this converter is `1.1`.

[Timestamp Hierarchy](#timestamp-hierarchy) is implemented to catch error
related to missing timestamp resources in version `1.0`.
[More info](https://github.com/MLopezJ/LwM2M-Asset-Tracker/issues/4)

### Timestamp Hierarchy

The timestamp values reported in the final output of the process follows the
next hierarchy in order to select the value to be reported:

1. Resource value of the object related to timestamp
2. $lastUpdated value from the resource reported in device twin metadata
3. $lastUpdated value from the instance reported in device twin metadata
4. $lastUpdated value from the object reported in device twin metadata
5. $lastUpdated value from the LwM2M reported in device twin metadata
6. $lastUpdated value reported to the metadata object in device twin

[device twin metadata](src/utils/getTimestamp.ts) type
