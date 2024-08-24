# 获取TRON钱包详情 <Badge type="tip" text="支付系统版" />

::: tip 小提示
用于获取钱包的详情数据
:::

**接口URL**

  ```sh
/order?order_type=buy_vip&receiving_address=0x4F07AdA08F4970dB9343d60A42ec65140c777B06
  ```

**请求方式**

> GET


**请求Query参数**

| 参数名            | 示例值                | 参数类型 | 是否必填 | 参数描述 |
| ----------------- | --------------------- | -------- | -------- | -------- |
| order_type        | buy_vip               | String   | 是       | 订单类型 |
| product_id        | 1                     | String   | 是       | 商品id {可单都}   |
| receiving_address | 0x4F07AdA08F4970..... | String   | 是       | 收款地址过滤 {可单都} |


**响应示例**

* 成功(200)

```json

{
    "code": 0,
    "msg": "create order success"
}

```

* 失败(404)

```json
暂无数据
```

| 参数名 | 示例值               | 参数类型 | 参数描述 |
| ------ | -------------------- | -------- | -------- |
| code   | 0                    | Number   | -        |
| msg    | create order success | String   | -        |