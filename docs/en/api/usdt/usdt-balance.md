# USDT Balance {#TRON-API}

::: tip 
Query the USDT balance of the wallet
:::

**URL**

```sh
/tron/usdt_balance?address=TVbo8fGRDmaiitf1JhpDhai5bLLxBwWpPt
```

**Request Method**


> GET

**Query Parameters Translation**

| Parameter Name | Example Value  | Data Type | Required | Description    |
| -------------- | -------------- | --------- | -------- | -------------- |
| address        | TVbo8fGRDma... | String    | 是       | wallet address |


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

| Parameter Name | Example Value         | Data Type | Description  |
| -------------- | --------------------- | --------- | ------------ |
| code           | 0                     | Number    | -            |
| data           | 970000000000000000000 | Number    | usdt Balance |
| msg            | success               | String    | -            |