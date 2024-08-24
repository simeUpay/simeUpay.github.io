# Query Tron Order List  <Badge type="tip" text="Payment System Version" />

::: tip 
Query Tron Order List 
:::

**URL**


  ```sh
/order?order_type=buy_vip&receiving_address=0x4F07AdA08F4970dB9343d60A42ec65140c777B06
  ```

**Request Method**


> GET


**Query Parameters Translation**


| Parameter Name    | Example Value         | Data Type | Required | Description |
| ----------------- | --------------------- | --------- | -------- | ----------- |
| order_type        | buy_vip               | String    | No       | -           |
| product_id        | 1                     | String    | No       | -           |
| receiving_address | 0x4F07AdA08F4970..... | String    | No       | -           |


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