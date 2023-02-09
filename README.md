# Coiote LwM2M JSON encoding to nRF Asset Tracker LwM2M JSON encoding [![npm version](https://img.shields.io/npm/v/@nordicsemiconductor/coiote-azure-converter-js.svg)](https://www.npmjs.com/package/@nordicsemiconductor/coiote-azure-converter-js)

[![Test and Release](https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/actions/workflows/test-and-release.yaml/badge.svg)](https://github.com/MLopezJ/asset-tracker-cloud-coiote-azure-converter-js/actions/workflows/test-and-release.yaml)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
[![Mergify Status](https://img.shields.io/endpoint.svg?url=https://api.mergify.com/v1/badges/NordicSemiconductor/asset-tracker-cloud-coiote-azure-converter-js)](https://mergify.io)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier/)
[![ESLint: TypeScript](https://img.shields.io/badge/ESLint-TypeScript-blue.svg)](https://github.com/typescript-eslint/typescript-eslint)

Convert the LwM2M JSON encoding written by
[AVSystem's Coiote Azure integration](https://iotdevzone.avsystem.com/docs/Demo_Projects/Tracking_tutorial/)

## Status: Work in progress
Currently there is no functionality in this project. This is work in progress.


## Expected input

Result of this [tutorial](https://iotdevzone.avsystem.com/docs/Demo_Projects/Tracking_tutorial/)
``` javascript
{
    "properties": {
        "desired": {
            "$metadata": {
                "$lastUpdated": "2023-02-08T14:59:36.5459563Z"
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
                        },
                        "attributes": {
                            "pmax": "600"
                        }
                    },
                    "attributes": {
                        "pmax": "600"
                    },
                    "observed": true
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
                        "0": {},
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
                        "0": {
                            "attributes": {
                                "pmin": "600",
                                "pmax": "3600"
                            }
                        },
                        "1": {
                            "attributes": {
                                "pmin": "600",
                                "pmax": "3600"
                            }
                        },
                        "2": {},
                        "3": {},
                        "5": {},
                        "6": {}
                    }
                },
                "3303": {
                    "0": {
                        "5601": {},
                        "5602": {},
                        "5700": {
                            "attributes": {
                                "pmax": "3600",
                                "pmin": "600"
                            }
                        },
                        "5701": {
                            "value": "Cel"
                        },
                        "attributes": {
                            "pmin": "300",
                            "pmax": "600"
                        }
                    },
                    "attributes": {
                        "pmax": "600",
                        "pmin": "300"
                    },
                    "observed": true
                },
                "3304": {
                    "0": {
                        "5601": {},
                        "5602": {},
                        "5700": {
                            "attributes": {
                                "pmax": "3600",
                                "pmin": "600"
                            }
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
                        "5702": {},
                        "5703": {},
                        "5704": {}
                    }
                },
                "3315": {
                    "0": {
                        "5601": {},
                        "5602": {},
                        "5700": {
                            "attributes": {
                                "pmax": "3600",
                                "pmin": "600"
                            }
                        },
                        "5701": {
                            "value": "Pa"
                        }
                    }
                },
                "3347": {
                    "0": {
                        "5500": {},
                        "5501": {},
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
                        "7": {},
                        "8": {},
                        "9": {},
                        "10": {},
                        "11": {}
                    }
                }
            },
            "$metadata": {},
            "$version": 31
        }
    },
}
```

## Expected output
``` javascript
{
  '6': { '0': 0, '1': 0, '2': 0, '3': 0, '4': '', '5': 0, '6': 0 },
  '10256': [
    { '0': 247, '1': 0, '2': 6400, '3': -96, '4': -12, '5': 0 },
    { '0': 425, '1': 0, '2': 300, '3': -115, '4': -12, '5': 23 },
    { '0': 195, '1': 0, '2': 300, '3': -119, '4': -16, '5': 23 }
  ],
  '4:1.3@1.1': {
    '0': 6,
    '1': [ 6, 7 ],
    '2': -96,
    '3': 0,
    '4': [ '10.160.225.39' ],
    '7': [ 'ibasis.iot' ],
    '8': 21627653,
    '9': 1,
    '10': 242,
    '11': 0,
    '12': 30401
  },
  '50009@1.2': {
    '1': 10,
    '2': 5,
    '3': 60,
    '4': 120,
    '5': true,
    '6': 30,
    '7': 120,
    '8': 3600,
    '9': true,
    '10': true
  },
  '3:1.2@1.1': {
    '0': 'Nordic Semiconductor ASA',
    '1': 'thingy91_nrf9160',
    '2': '351358815340515',
    '3': '0.0.0-development',
    '7': [ 4113 ],
    '11': [ 0 ],
    '13': 1665149602,
    '14': '',
    '15': '',
    '16': 'U',
    '17': '',
    '18': 'nRF9160_SICA',
    '19': 'mfw_nrf9160_1.3.2'
  },
  '5:1.1@1.1': { '0': 'Package', '1': '', '3': 0, '5': 1, '6': '', '7': '', '9': 2 },
  '3304:1.1': [
    {
      '5518': 1665149602,
      '5601': 31.064,
      '5602': 31.064,
      '5603': 0,
      '5604': 100,
      '5700': 28.927,
      '5701': '%',
      '5750': ''
    }
  ],
  '1:1.2@1.2': [
    {
      '0': 101,
      '1': 43200,
      '2': 0,
      '3': 0,
      '5': 86400,
      '6': 0,
      '7': 'U',
      '22': '',
      '23': 0
    }
  ],
  '3323:1.1': [
    {
      '5518': 1665149602,
      '5601': 98.236,
      '5602': 98.236,
      '5603': 30,
      '5604': 110,
      '5700': 98.226,
      '5701': 'kPa',
      '5750': ''
    }
  ],
  '3347:1.1': [ { '5500': 0, '5501': 0, '5518': 0, '5750': 'Push button 1' } ],
  '3303:1.1': [
    {
      '5518': 1665149602,
      '5601': 23.51,
      '5602': 23.51,
      '5603': -40,
      '5604': 85,
      '5700': 24.57,
      '5701': 'Celsius degrees',
      '5750': ''
    }
  ]
}

```
