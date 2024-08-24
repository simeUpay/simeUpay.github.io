# Create a TRON wallet {#TRON-API}

::: tip 
Create a TRON wallet
:::

**URL**

```sh
/tron/account/create_address
```

**Request Method**


> POST


**Response**


* success(200)


```json
{
    "code": 0,
    "data": {
        "address": "0x412f7a659fc7cc01abb5a9.....", 
        "mnemonic": "wash cliff unable certain slender disorder .....",
        "private_key": "b89ac0bc68f272c230891dc8ebebb76216b0c......"
    },
    "msg": "success"
}
```

* fail(404)

```json
No data available
```


| Parameter Name   | Example Value                     | Data Type | Description |
| ---------------- | :-------------------------------- | :-------: | :---------: |
| code             | 0                                 |  Number   |      -      |
| data             | -                                 |  Object   |      -      |
| data.address     | 0x412f7a659fc7cc01ab              |  String   |      -      |
| data.mnemonic    | wash cliff unable certain slender |  String   |      -      |
| data.private_key | b89ac0bc68f272c                   |  String   |      -      |
| msg              | success                           |  String   |      -      |
