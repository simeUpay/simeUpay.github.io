# TRX Transfer {#TRON-API}

::: tip 
User transfers TRX to a specified wallet address
:::

**URL**

```sh
/tron/trx_transfer
```

**Request Method**

> POST




**Request Body Parameters**


| Parameter Name | Example Value                      | Data Type | Required | Description            |
| -------------- | ---------------------------------- | --------- | -------- | ---------------------- |
| private_key    | b639151e1f18b28e6c71d382....       | String    | Yes      | address private_key    |
| from           | TVbo8fGRDmaiitf1JhpDhai5bLLxBwWpPt | String    | Yes      | from address           |
| to_address     | TYRU6GKmeSvfygYxDbtNQSbm4DdtRypZWQ | String    | Yes      | to address             |
| amount         | 1000000                            | String    | Yes      | Transfer amount: 1 TRX |


**Response**


* success(200)

```json
{
    "code": 0,
    "data": "717b7393860c01d2dc4064310ca2dd8cc354bdd96d05727d23f5d934009b646b",
    "msg": "transfer success"
}
```

* fail(404)

```json
No data available
```

| Parameter Name | Example Value                                                    | Data Type | Description |
| -------------- | ---------------------------------------------------------------- | --------- | ----------- |
| code           | 0                                                                | Number    | -           |
| data           | 717b7393860c01d2dc4064310ca2dd8cc354bdd96d05727d23f5d934009b646b | String    | Hash        |
| msg            | transfer success                                                 | String    | -           |
