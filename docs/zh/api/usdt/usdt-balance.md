# USDT余额查询 {#TRON-API}

::: tip 小提示
查询钱包的USDT余额
:::

**接口URL**

```sh
/tron/usdt_balance?address=TVbo8fGRDmaiitf1JhpDhai5bLLxBwWpPt
```

**请求方式**

> GET

**请求Query参数**

| 参数名  | 示例值         | 参数类型 | 是否必填 | 参数描述 |
| ------- | -------------- | -------- | -------- | -------- |
| address | TVbo8fGRDma... | String   | 是       | 钱包地址 |


**响应示例**

* 成功(200)

```json

{
    "code": 0,
    "data": 970000000000000000000,
    "msg": "success"
}

```

* 失败(404)

```json
暂无数据
```


| 参数名 | 示例值                | 参数类型 | 参数描述 |
| ------ | --------------------- | -------- | -------- |
| code   | 0                     | Number   | -        |
| data   | 970000000000000000000 | Number   | USDT余额 |
| msg    | success               | String   | -        |