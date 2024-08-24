# TRC20转账 {#TRON-API}

::: tip 小提示
用于转账TRON上的TRC20的代币
:::

**接口URL**

```sh
/tron/trc20_transfer
```

**请求方式**

> POST




**请求Body参数**

| 参数名           | 示例值                                                           | 参数类型 | 是否必填 | 参数描述                       |
| ---------------- | ---------------------------------------------------------------- | -------- | -------- | ------------------------------ |
| private_key      | b639151e1f18b28e6c71d38262d949da1864871d8385a198582d57e06492960b | String   | 是       | -                              |
| from             | TVbo8fGRDmaiitf1JhpDhai5bLLxBwWpPt                               | String   | 是       | -                              |
| to_address       | TYRU6GKmeSvfygYxDbtNQSbm4DdtRypZWQ                               | String   | 是       | -                              |
| amount           | 1                                                                | String   | 是       | 程序自动*1e18 直接传入单位既可 |
| contract_address | TF17BgPaZYbz8oxbjhriubPDsA7ArKoLX3                               | String   | 是       | JST 的合约地址                 |
| fee_limit        | 1000000                                                          | String   | 是       | 100000000  -> 默认1e8          |

**响应示例**

* 成功(200)

```json
{
    "code": 0,
    "data": "44d036424bb08599c58b9c7e7082a3d406cf1beecfaa2a0a17f5d177662f37b5",
    "msg": "transfer SUCCESS"
}
```

* 失败(404)

```json
暂无数据
```

| 参数名 | 示例值                                                           | 参数类型 | 参数描述 |
| ------ | ---------------------------------------------------------------- | -------- | -------- |
| code   | 0                                                                | Number   | -        |
| data   | 44d036424bb08599c58b9c7e7082a3d406cf1beecfaa2a0a17f5d177662f37b5 | String   | 转账Hash |
| msg    | transfer SUCCESS                                                 | String   | -        |
