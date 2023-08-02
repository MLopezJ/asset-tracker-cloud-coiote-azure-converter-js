# Environment

## Link: [here](https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/Reported.ts)

## Details

| Field | Description                                              | Type   | Minimum | Maximum | Required |
| ----- | -------------------------------------------------------- | ------ | ------- | ------- | -------- |
| temp  | Temperature reading from external sensor                 | number |         |         | Yes      |
| hum   | Humidity reading from external sensor                    | number | 1       | 100     | Yes      |
| atmp  | Atmospheric pressure reading from external sensor in kPa | number | 0       |         | Yes      |

## Data

| Field | LwM2M |
| ----- | --------- |
| temp  | 3303.0.5700  |
| hum   | 3304.0.5700  |
| atmp  | 3323.0.5700  |
