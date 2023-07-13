import { ConnectivityMonitoring_4_urn, Device_3_urn, Humidity_3304_urn, Location_6_urn, Pressure_3323_urn, Temperature_3303_urn } from "@nordicsemiconductor/lwm2m-types"
import { transformation } from "./4-transform"

describe('transform', () => {
    it('should build the expected input of the Asset tracker web app', () => {
        const serverTime = 1563968743666
        const input = {
            lwm2m: {
                [Device_3_urn]: {
                    '0': 'Nordic Semiconductor ASA',
                    '1': 'Thingy:91',
                    '2': '351358815340515',
                    '3': '22.8.1+0',
                    '11': 0,
                    '7': 80,
                    '13': 1675874731000,
                    '16': 'UQ',
                    '19': '3.2.1',
                },
                [Temperature_3303_urn]: [{
                    '5518': 1651820400,
                    '5601': 23.51,
                    '5602': 23.51,
                    '5603': -40,
                    '5604': 85,
                    '5700': 24.57,
                    '5701': 'Celsius degrees',
                }],
                [Humidity_3304_urn]:[
                    {
                        '5518': 1651820400,
                        '5601': 31.06,
                        '5602': 31.06,
                        '5603': 0,
                        '5604': 100,
                        '5700': 28.93,
                        '5701': '%',
                    },
                ],
                [Pressure_3323_urn]: [
                    {
                        '5518': 1651820400,
                        '5601': 98.24,
                        '5602': 98.24,
                        '5603': 30,
                        '5604': 110,
                        '5700': 98.23,
                        '5701': 'kPa',
                    },
                ],
                [Location_6_urn]: {
                    '0': -43.5723,
                    '1': 153.2176,
                    '2': 170.528305,
                    '3': 24.798573,
                    '5': 1665149633,
                    '6': 0.579327,
                },
                [ConnectivityMonitoring_4_urn]: {
                    '0': 6, // Network Bearer
                    '1': 6,
                    '2': -97, // Radio Signal Strength
                    '3': 0,
                    '4': '10.160.225.39', // IP Addresses
                    '7': 'ibasis.iot',
                    '8': 33703719, // Cell ID
                    '9': 2,
                    '10': 2420,
                    '11': 0,
                    '12': 12, // LAC = Location Area Code
                }
            },
            customObjects: {
                '5009': {
                    '0': true,
                    '1': 120,
                    '2': 120,
                    '3': 600,
                    '4': 7200,
                    '5': 8.5,
                    '6': true,
                    '7': false,
                    '8': 2.5,
                    '9': 0.5,
                }
            }
        }

        const output = {
            bat: {
                v: 80,
                ts: 1675874731000,
            },
            env: {
                v: {
                    temp: 24.57,
                    hum: 28.93,
                    atmp: 98.23,
                },
                ts: 1651820400,
            },
            gnss: {
                v: {
                    lng: 153.2176,
                    lat:  -43.5723,
                    acc: 24.798573, 
                    alt: 170.528305, 
                    spd: 0.579327, 
                    hdg: 176.12, // ***** origin missing *****
                },
                ts: 1665149633,
            },
            cfg: {
                loct: 120, // /5009/0/1
                act: true, // /5009/0/0
                actwt: 120, // /5009/0/2
                mvres: 600, // /5009/0/3
                mvt: 7200, // /5009/0/4
                accath: 8.5, // /5009/0/5
                accith: 2.5, // /5009/0/8
                accito: 0.5, // /5009/0/9
                nod: [],
            },
            dev: {
                v: {
                    imei: '351358815340515', // /3/0/2
                    iccid: '89450421180216216095', // ***** origin missing *****
                    modV: '22.8.1+0', // /3/0/3
                    brdV: 'Nordic Semiconductor ASA', // /3/0/0
                },
                ts: 1675874731000, // /3/0/13 || server timestmap
            },
            roam: {
                v: {
                    band: 3, // ***** origin missing *****
                    nw: 6, //'NB-IoT', // /4/0/0 TODO: solve this
                    rsrp: -97, // 4/0/2
                    area: 12, // /4/0/12
                    mccmnc: 24202, // /4/0/10 & /4/0/9
                    cell: 33703719, // /4/0/8
                    ip: '10.160.225.39', // /4/0/4
                    eest: 7, // ***** origin missing *****
                },
                ts: 1563968743666, // server timestmap
            },
            firmware: {
                fwUpdateStatus: 'current',
                currentFwVersion: '0.0.0-development',
                pendingFwVersion: '',
            },
        }

        expect(transformation(input, serverTime)).toMatchObject(output)
    })
})