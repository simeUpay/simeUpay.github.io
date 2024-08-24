# USDT Transfer {#TRON-API}

::: tip
Transfer USDT to a specified wallet
:::

**URL**


```sh
/tron/usdt_transfer
```

**Request Method**


> POST

**Request Body Parameters**


| Parameter Name | Example Value                                                    | Data Type | Required | Description |
| -------------- | ---------------------------------------------------------------- | --------- | -------- | ----------- |
| private_key    | b639151e1f18b28e6c71d38262d949da1864871d8385a198582d57e06492960b | String    | Yes      | -           |
| from           | TVbo8fGRDmaiitf1JhpDhai5bLLxBwWpPt                               | String    | Yes      | -           |
| to_address     | TYRU6GKmeSvfygYxDbtNQSbm4DdtRypZWQ                               | String    | Yes      | -           |
| amount         | 1                                                                | String    | Yes      | -           |
| fee_limit      | 1000000                                                          | String    | Yes      | -           |

**Response**

* success(200)

```json
{
    "code": 0,
    "data": "44d036424bb08599c58b9c7e7082a3d406cf1beecfaa2a0a17f5d177662f37b5",
    "msg": "transfer SUCCESS"
}
```

* fail(404)

```json
No data available
```

| Parameter Name | Example Value                                                    | Data Type | Description |
| -------------- | ---------------------------------------------------------------- | --------- | ----------- |
| code           | 0                                                                | Number    | -           |
| data           | 44d036424bb08599c58b9c7e7082a3d406cf1beecfaa2a0a17f5d177662f37b5 | String    | Hash        |
| msg            | transfer SUCCESS                                                 | String    | -           |
