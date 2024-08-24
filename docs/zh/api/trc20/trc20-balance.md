# 获取TRC20代币余额 {#TRON-API}

::: tip 小提示
用户获取钱包的TRC20的代币余额,TRON上每个不同的代币使用的是不同的合约
:::

**接口URL**

```sh
/tron/trc20_balance?address=TVbo8fGRDmaiitf1JhpDhai5bLLxBwWpPt&contract_address=TF17BgPaZYbz8oxbjhriubPDsA7ArKoLX3
```

**请求方式**

> GET

**请求Query参数**

| 参数名           | 示例值          | 参数类型 | 是否必填 | 参数描述       |
| ---------------- | --------------- | -------- | -------- | -------------- |
| address          | TVbo8fGRDma...  | String   | 是       | 钱包地址       |
| contract_address | TF17BgPaZYbz... | String   | 是       | 代币的合约地址 |


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
| data   | 970000000000000000000 | Number   | 代币余额 |
| msg    | success               | String   | -        |


**测试网**

| 代币名称 |              合约地址              |
| :------: | :--------------------------------: |
|   JST    | TF17BgPaZYbz8oxbjhriubPDsA7ArKoLX3 |
|   WIN    | TU2T8vpHZhCNY8fXGVaHyeZrKm8s6HEXWe |


**主网**

| 代币名称 | 合约地址 |
| -------- | -------- |
| USDT     | 0        |
