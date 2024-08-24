# 创建TRON钱包 {#TRON-API}

::: tip 小提示
用户创建TRON的钱包
:::

**接口URL**

```sh
/tron/account/create_address
```

**请求方式**

> POST


**响应示例**

* 成功(200)

```json
{
    "code": 0,
    "data": {
        "address": "0x412f7a659fc7cc01abb5a9.....", 
        "mnemonic": "wash cliff unable certain slender disorder .....",
        "private_key": "b89ac0bc68f272c230891dc8ebebb76216b0c......"
    },
    "msg": "获取成功"
}
```

* 失败(404)

```json
暂无数据
```


| 参数名           | 示例值                            | 参数类型 | 参数描述   |
| ---------------- | :---------------------------------: | :--------: | :----------: |
| code             | 0                                 | Number   | -          |
| data             | -                                 | Object   | -          |
| data.address     | 0x412f7a659fc7cc01ab              | String   | 钱包地址   |
| data.mnemonic    | wash cliff unable certain slender | String   | 钱包助记词 |
| data.private_key | b89ac0bc68f272c                   | String   | 钱包私钥   |
| msg              | 获取成功                          | String   | -          |
