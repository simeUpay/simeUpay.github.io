# Create Payment Order  <Badge type="tip" text="Payment System Version" />

::: tip 
Create TRON Payment Order
:::

**URL**

  ```sh
/order
  ```

**Request Method**


> POST

**Content-Type**

> form-data

**Request Body Parameters**

| Parameter Name      | Example Value      | Data Type | Required | Description |
| ------------------- | ------------------ | --------- | -------- | ----------- |
| order_no            | 12123123           | String    | Yes      | -           |
| order_type          | recharge           | String    | Yes      | -           |
| payment_amount      | 1000               | String    | Yes      | -           |
| product_id          | 1                  | String    | Yes      | -           |
| product_name        | balance recharge   | String    | Yes      | -           |
| product_description | balance recharge   | String    | Yes      | -           |
| receiving_address   | 0x4F07AdA08F49.... | String    | Yes      | -           |


**Response**

* success(200)


```json

{
    "code": 0,
    "msg": "create order success"
}

```

* fail(404)

```json
No data available

```

| Parameter Name | Example Value        | Data Type | Description |
| -------------- | -------------------- | --------- | ----------- |
| code           | 0                    | Number    | -           |
| msg            | create order success | String    | -           |