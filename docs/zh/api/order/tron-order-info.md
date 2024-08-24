# 获取订单详情 <Badge type="tip" text="支付系统版" />

::: tip 小提示
获取TRON的订单详情
:::

**接口URL**

  ```sh
/order/{id}
  ```

**请求方式**

> GET


**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| ------ | ------ | -------- | -------- | -------- |
| id     | 1      | String   | 是       | 订单id   |


**响应示例**

* 成功(200)

```json

{
    "code": 0,
    "data": {
        "id": 1,
        "create": "23:35:10",
        "update": "23:35:10",
        "order_no": "12123123",
        "order_type": "recharge",
        "payment_amount": 1,
        "order_status": 0,
        "product_id": 1,
        "product_name": "余额充值",
        "product_description": "余额充值",
        "payment_address": "",
        "receiving_address": "0x4F07AdA08F4970dB9343d60A42ec65140c777B06",
        "order_hash": "",
        "refund_hash": "",
        "paid_time": 0,
        "refunded_time": 0
    },
    "msg": "获取订单详情成功"
}
```

* 失败(404)

```json
暂无数据
```

| 参数名                   | 示例值                                     | 参数类型 | 参数描述 |
| ------------------------ | ------------------------------------------ | -------- | -------- |
| code                     | 0                                          | Number   | -        |
| data                     | -                                          | Object   | 转账Hash |
| data.id                  | 1                                          | Number   | -        |
| data.create              | 23:35:10                                   | String   | -        |
| data.update              | 23:35:10                                   | String   | -        |
| data.order_no            | 12123123                                   | String   | -        |
| data.order_type          | recharge                                   | String   | -        |
| data.payment_amount      | 1                                          | Number   | -        |
| data.order_status        | 0                                          | Number   | -        |
| data.product_id          | 1                                          | Number   | -        |
| data.product_name        | 余额充值                                   | String   | -        |
| data.product_description | 余额充值                                   | String   | -        |
| data.payment_address     | -                                          | String   | -        |
| data.receiving_address   | 0x4F07AdA08F4970dB9343d60A42ec65140c777B06 | String   | -        |
| data.order_hash          | -                                          | String   | -        |
| data.refund_hash         | -                                          | String   | -        |
| data.paid_time           | 0                                          | Number   | -        |
| data.refunded_time       | 0                                          | Number   | -        |
| msg                      | 获取订单详情成功                           | String   | -        |
