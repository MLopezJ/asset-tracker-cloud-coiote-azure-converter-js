# Device

## Link: [here](https://github.com/NordicSemiconductor/asset-tracker-cloud-docs/blob/saga/docs/cloud-protocol/Reported.ts)

## Data

| Field | LwM2M |
| ----- | ------------ |
| imei  | 3.0.2        |
| iccid | **????**     |
| modV  | 3.0.3        |
| brdV  | 3.0.0        |


## Details

| Field | Description            | Type   | Min Length | Max Length | Examples                 | Required |
| ----- | ---------------------- | ------ | ---------- | ---------- | ------------------------ | -------- |
| imei  | Board IMEI             | string | 15         | 16         | ["352656106111232"]      | Yes      |
| iccid | SIM ICCID              | string | 19         | 20         | ["89450421180216216095"] | Yes      |
| modV  | Modem Firmware Version | string | 1          |            | ["mfw_nrf9160_1.0.0"]    | Yes      |
| brdV  | Board Version          | string | 1          |            | ["thingy91_nrf9160"]     | Yes      |
