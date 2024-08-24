# TRX转账 {#TRON-API}

::: tip 小提示
用户转账TRX到指定钱包地址中
:::

**接口URL**

```sh
/tron/trx_transfer
```

**请求方式**

> POST




**请求Body参数**

| 参数名      | 示例值                             | 参数类型 | 是否必填 | 参数描述     |
| ----------- | ---------------------------------- | -------- | -------- | ------------ |
| private_key | b639151e1f18b28e6c71d382....       | String   | 是       | 私钥         |
| from        | TVbo8fGRDmaiitf1JhpDhai5bLLxBwWpPt | String   | 是       | 发送地址     |
| to_address  | TYRU6GKmeSvfygYxDbtNQSbm4DdtRypZWQ | String   | 是       | 目标地址     |
| amount      | 1000000                            | String   | 是       | 转账数量1TRX |


**响应示例**

* 成功(200)

```json
{
    "code": 0,
    "data": "717b7393860c01d2dc4064310ca2dd8cc354bdd96d05727d23f5d934009b646b",
    "msg": "transfer success"
}
```

* 失败(404)

```json
暂无数据
```

| 参数名 | 示例值                                                           | 参数类型 | 参数描述 |
| ------ | ---------------------------------------------------------------- | -------- | -------- |
| code   | 0                                                                | Number   | -        |
| data   | 717b7393860c01d2dc4064310ca2dd8cc354bdd96d05727d23f5d934009b646b | String   | 转账Hash |
| msg    | transfer success                                                 | String   | -        |
