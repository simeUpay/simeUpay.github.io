# 获取TRC20 代币转账记录 {#TRON-API}

::: tip 小提示
用于获取钱包的详情数据
:::

**接口URL**

  ```sh
/tron/account/contract_transaction?address=TVbo8fGRDmaiitf1JhpDhai5bLLxBwWpPt&contract=TF17BgPaZYbz8oxbjhriubPDsA7ArKoLX3
  ```

**请求方式**

> GET

**请求Query参数**

| 参数名   | 示例值                             | 参数类型 | 是否必填 | 参数描述 |
| -------- | ---------------------------------- | -------- | -------- | -------- |
| address  | TVbo8fGRDmaiitf1JhpDhai5bLLxBwWpPt | String   | 是       | -        |
| contract | TF17BgPaZYbz8oxbjhriubPDsA7ArKoLX3 | String   | 是       | -        |



**响应示例**

* 成功(200)

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
    "msg": "获取成功"
}


```

* 失败(404)

```json
暂无数据
```

| 参数名                        | 示例值                                                           | 参数类型 | 参数描述     |
| ----------------------------- | ---------------------------------------------------------------- | -------- | ------------ |
| code                          | 0                                                                | Number   | -            |
| data                          | -                                                                | Object   |              |
| data.success                  | true                                                             | Boolean  | -            |
| data.data                     | -                                                                | Array    | 转账清单数据 |
| data.data.transaction_id      | 44d036424bb08599c58b9c7e7082a3d406cf1beecfaa2a0a17f5d177662f37b5 | String   | 转账Hash     |
| data.data.block_timestamp     | 1724072916000                                                    | Number   | 转账时间     |
| data.data.from                | TVbo8fGRDmaiitf1JhpDhai5bLLxBwWpPt                               | String   | 发送钱包     |
| data.data.to                  | TYRU6GKmeSvfygYxDbtNQSbm4DdtRypZWQ                               | String   | 接收钱包     |
| data.data.value               | 1000000000000000000                                              | String   | 转账数额     |
| data.data.type                | Transfer                                                         | String   | 类型         |
| data.data.token_info          | -                                                                | Object   | -            |
| data.data.token_info.name     | JUST GOV                                                         | String   | 代币名称     |
| data.data.token_info.symbol   | JST                                                              | String   | -            |
| data.data.token_info.decimals | 18                                                               | Number   | -            |
| data.data.token_info.address  | TF17BgPaZYbz8oxbjhriubPDsA7ArKoLX3                               | String   | 代币地址     |
| data.meta                     | -                                                                | Object   | -            |
| data.meta.page_size           | 10                                                               | Number   | -            |
| data.meta.at                  | 1724073809414                                                    | Number   | -            |
| msg                           | 获取成功                                                         | String   | -            |