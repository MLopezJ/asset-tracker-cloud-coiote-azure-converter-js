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
    '1:1.2@1.2': [
        {
            '0': 1,
            '1': 50,
            '6': false,
            '7': 'U',
            '16': true,
            '23': false
        }
    ],
    '3:1.2@1.1': {
        '0': 'Nordic Semiconductor ASA',
        '1': 'Thingy:91',
        '2': '351358815340515',
        '3': '22.8.1+0',
        '11': [0],
        '13': 1675874731000,
        '16': 'UQ',
        '19': '3.2.1'
    },
    '4:1.3@1.1': {
        '0': 6,
        '1': [6, 7],
        '2': -85,
        '3': 23,
        '4': ['10.160.120.155'],
        '8': 34237196,
        '9': 2,
        '10': 242,
    },
    '5:1.1@1.1': { '1': '', '3': 0, '5': 1, '8': [0, 1], '9': 2 },
    '6': { '0': { 'pmin': 600, 'pmax': 3600 }, '1': { 'pmin': 600, 'pmax': 3600 } },
    '3303:1.1': [
        {
          '5700': { 'pmin': 600, 'pmax': 3600 },
          '5701': 'Cel',
        }
    ],
    '3304:1.1': [
        {
          '5700': { 'pmin': 600, 'pmax': 3600 },
          '5701': '%RH',
        }
    ],
    '3313': {
        "5701": "m/s2"
    },
    '3315': {
        '5700': { 'pmin': 600, 'pmax': 3600 },
        "5701": "Pa"
    },
    '3347:1.1': [ { '5750': 'Button 0' } ],
    '3420': { "1": "#000000" },
    '10256': [
        { '0': 428, '2': 6300, '3': 52, '4': 14, '5': 0 },
    ],
    "50001": {
        "0": 5,
        "1": 128,
    }
}
```
