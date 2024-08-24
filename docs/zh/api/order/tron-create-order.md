# 创建支付订单  <Badge type="tip" text="支付系统版" />

::: tip 小提示
创建TRON的支付订单
:::

**接口URL**

  ```sh
/order
  ```

**请求方式**

> POST

**Content-Type**

> form-data

**请求Body参数**

| 参数名              | 示例值             | 参数类型 | 是否必填 | 参数描述 |
| ------------------- | ------------------ | -------- | -------- | -------- |
| order_no            | 12123123           | String   | 是       | 订单编号 |
| order_type          | recharge           | String   | 是       | 订单类型 |
| payment_amount      | 1000               | String   | 是       | 支付金额 |
| product_id          | 1                  | String   | 是       | 商品id   |
| product_name        | 余额充值           | String   | 是       | 商品名称 |
| product_description | 余额充值           | String   | 是       | 商品描述 |
| receiving_address   | 0x4F07AdA08F49.... | String   | 是       | 收款地址 |


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