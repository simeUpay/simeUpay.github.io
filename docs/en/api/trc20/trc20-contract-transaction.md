# Retrieve TRC20 token transaction history {#TRON-API}

::: tip
Retrieve TRC20 token transaction history
:::

**URL**


  ```sh
/tron/account/contract_transaction?address=TVbo8fGRDmaiitf1JhpDhai5bLLxBwWpPt&contract=TF17BgPaZYbz8oxbjhriubPDsA7ArKoLX3
  ```

**Request Method**


> GET

**Query Parameters Translation**


| Parameter Name | Example Value                      | Data Type | Required | Description |
| -------------- | ---------------------------------- | --------- | -------- | ----------- |
| address        | TVbo8fGRDmaiitf1JhpDhai5bLLxBwWpPt | String    | Yes      | -           |
| contract       | TF17BgPaZYbz8oxbjhriubPDsA7ArKoLX3 | String    | Yes      | -           |



**Response**

* success(200)

```json
{
    "code": 0,
    "data": {
        "success": true,
        "data": [
            {
                "transaction_id": "44d036424bb08599c58b9c7e7082a3d406cf1beecfaa2a0a17f5d177662f37b5",
                "block_timestamp": 1724072916000,
                "from": "TVbo8fGRDmaiitf1JhpDhai5bLLxBwWpPt",
                "to": "TYRU6GKmeSvfygYxDbtNQSbm4DdtRypZWQ",
                "value": "1000000000000000000",
                "type": "Transfer",
                "token_info": {
                    "name": "JUST GOV",
                    "symbol": "JST",
                    "decimals": 18,
                    "address": "TF17BgPaZYbz8oxbjhriubPDsA7ArKoLX3"
                }
            }
        ],
        "meta": {
            "page_size": 10,
            "at": 1724073809414
        }
    },
    "msg": "success"
}


```

* fail(404)

```json
No data available

```

| Parameter Name                | Example Value                                                    | Data Type | Description |
| ----------------------------- | ---------------------------------------------------------------- | --------- | ----------- |
| code                          | 0                                                                | Number    | -           |
| data                          | -                                                                | Object    |             |
| data.success                  | true                                                             | Boolean   | -           |
| data.data                     | -                                                                | Array     | -           |
| data.data.transaction_id      | 44d036424bb08599c58b9c7e7082a3d406cf1beecfaa2a0a17f5d177662f37b5 | String    | -           |
| data.data.block_timestamp     | 1724072916000                                                    | Number    | -           |
| data.data.from                | TVbo8fGRDmaiitf1JhpDhai5bLLxBwWpPt                               | String    | -           |
| data.data.to                  | TYRU6GKmeSvfygYxDbtNQSbm4DdtRypZWQ                               | String    | -           |
| data.data.value               | 1000000000000000000                                              | String    | -           |
| data.data.type                | Transfer                                                         | String    | -           |
| data.data.token_info          | -                                                                | Object    | -           |
| data.data.token_info.name     | JUST GOV                                                         | String    | -           |
| data.data.token_info.symbol   | JST                                                              | String    | -           |
| data.data.token_info.decimals | 18                                                               | Number    | -           |
| data.data.token_info.address  | TF17BgPaZYbz8oxbjhriubPDsA7ArKoLX3                               | String    | -           |
| data.meta                     | -                                                                | Object    | -           |
| data.meta.page_size           | 10                                                               | Number    | -           |
| data.meta.at                  | 1724073809414                                                    | Number    | -           |
| msg                           | success                                                          | String    | -           |