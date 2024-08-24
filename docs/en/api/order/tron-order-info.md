# Query Order Details  <Badge type="tip" text="Payment System Version" />

::: tip 
Query TRON Order Details
:::

**URL**


  ```sh
/order/{id}
  ```

**Request Method**


> GET

**Query Parameters Translation**

| Parameter Name | Example Value | Data Type | Required | Description |
| -------------- | ------------- | --------- | -------- | ----------- |
| id             | 1             | String    | 是       | order_id    |


**Response**


* success(200)


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
        "product_name": "balance recharge",
        "product_description": "balance recharge",
        "payment_address": "",
        "receiving_address": "0x4F07AdA08F4970dB9343d60A42ec65140c777B06",
        "order_hash": "",
        "refund_hash": "",
        "paid_time": 0,
        "refunded_time": 0
    },
    "msg": "success"
}
```

* fail(404)

```json
暂无数据
```

| Parameter Name           | Example Value                              | Data Type | Description |
| ------------------------ | ------------------------------------------ | --------- | ----------- |
| code                     | 0                                          | Number    | -           |
| data                     | -                                          | Object    | -           |
| data.id                  | 1                                          | Number    | -           |
| data.create              | 23:35:10                                   | String    | -           |
| data.update              | 23:35:10                                   | String    | -           |
| data.order_no            | 12123123                                   | String    | -           |
| data.order_type          | recharge                                   | String    | -           |
| data.payment_amount      | 1                                          | Number    | -           |
| data.order_status        | 0                                          | Number    | -           |
| data.product_id          | 1                                          | Number    | -           |
| data.product_name        | balance recharge                           | String    | -           |
| data.product_description | balance recharge                           | String    | -           |
| data.payment_address     | -                                          | String    | -           |
| data.receiving_address   | 0x4F07AdA08F4970dB9343d60A42ec65140c777B06 | String    | -           |
| data.order_hash          | -                                          | String    | -           |
| data.refund_hash         | -                                          | String    | -           |
| data.paid_time           | 0                                          | Number    | -           |
| data.refunded_time       | 0                                          | Number    | -           |
| msg                      | success                                    | String    | -           |
