# To get the TRC20 token balance {#TRON-API}

::: tip 
To get the TRC20 token balance of a user's wallet on the TRON network, each different token uses a different contract.
:::

**URL**

```sh
/tron/trc20_balance?address=TVbo8fGRDmaiitf1JhpDhai5bLLxBwWpPt&contract_address=TF17BgPaZYbz8oxbjhriubPDsA7ArKoLX3
```

**Request Method**

> GET

**Query Parameters Translation**

| Parameter Name   | Example Value   | Data Type | Required | Description            |
| ---------------- | --------------- | --------- | -------- | ---------------------- |
| address          | TVbo8fGRDma...  | String    | 是       | wallet address         |
| contract_address | TF17BgPaZYbz... | String    | 是       | Token contract address |


**Response**

* success(200)

```json

{
    "code": 0,
    "data": 970000000000000000000,
    "msg": "success"
}

```

* fail(404)

```json
No data available
```


| Parameter Name | Example Value         | Data Type | Description |
| -------------- | --------------------- | --------- | ----------- |
| code           | 0                     | Number    | -           |
| data           | 970000000000000000000 | Number    | balance     |
| msg            | success               | String    | -           |


**Test network**

| Token |          contract address          |
| :---: | :--------------------------------: |
|  JST  | TF17BgPaZYbz8oxbjhriubPDsA7ArKoLX3 |
|  WIN  | TU2T8vpHZhCNY8fXGVaHyeZrKm8s6HEXWe |


**Main network**

| Token | contract address |
| ----- | ---------------- |
| USDT  | -                |
