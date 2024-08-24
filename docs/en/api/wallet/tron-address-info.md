# Get TRON Wallet Details  {#TRON-API}

::: tip 
Get TRON Wallet Details 
:::

**URL**


  ```sh
  /tron/account/get_address?address=TVbo8fGRDmaiitf1JhpDhai5bLLxBwWpPt
  ```

**Request Method**


> GET


**Query Parameters Translation**


| Parameter Name | Example Value                      | Data Type | Required | Description    |
| -------------- | ---------------------------------- | --------- | -------- | -------------- |
| address        | TVbo8fGRDmaiitf1JhpDhai5bLLxBwWpPt | String    | Yes      | wallet address |



**Response**

* success(200)

```json
{
	"code": 0,
	"data": {
		"address": "QddV2w6a6Q5m53ZunZg1flV96F7p",
		"balance": 58,
		"asset_optimized": true,
		"create_time": 360819486441,
		"latest_opration_time": 1241340283804, 
		"latest_consume_free_time": 1590559150046,  
		"net_window_size": 68,
		"net_window_optimized": true,
		"account_resource": {
			"latest_consume_time_for_energy": 9,
			"energy_window_size": 98,
			"energy_window_optimized": true
		},
		"owner_permission": { 
			"permission_name": "owner",
			"threshold": 13,
			"keys": [
				{
					"address": "QddV2w6a6Q5m53ZunZg1flV96F7p",
					"weight": 56
				}
			]
		},
		"active_permission": [
			{
				"type": 44,
				"id": 9,
				"permission_name": "active",
				"threshold": 4,
				"operations": "f/8fwAM++w8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
				"keys": [
					{
						"address": "QddV2w6a6Q5m53ZunZg1flV96F7p",
						"weight": 17
					}
				]
			}
		],
		"frozenV2": [
			{
				"type": 81
			}
		]
	},
	"msg": "success"
}
```

* fail(404)


```json
No data available

```

| Parameter Name                  |        Example Value         | Data Type | Description |
| ------------------------------- | :--------------------------: | :-------: | :---------: |
| code                            |              0               |  Number   |      -      |
| data                            |              -               |  Object   |      -      |
| address                         | QddV2w6a6Q5m53ZunZg1flV96F7p |  String   |      -      |
| balance                         |              58              |  Number   |      -      |
| asset_optimized                 |             true             |  Boolean  |      -      |
| create_time                     |         360819486441         |  Number   |      -      |
| latest_opration_time            |        1241340283804         |  Number   |      -      |
| latest_consume_free_time        |        1590559150046         |  Number   |      -      |
| net_window_size                 |              68              |  Number   |      -      |
| net_window_optimized            |             true             |  Boolean  |      -      |
| account_resource                |              -               |  Object   |      -      |
| .latest_consume_time_for_energy |              9               |  Number   |      -      |
| .energy_window_size             |              98              |  Number   |      -      |
| .energy_window_optimized        |             true             |  Boolean  |      -      |
| data.owner_permission           |              -               |  Object   |      -      |
| .permission_name                |            owner             |  String   |      -      |
| .threshold                      |              13              |  Number   |      -      |
| .keys                           |              -               |   Array   |      -      |
| .keys.address                   | QddV2w6a6Q5m53ZunZg1flV96F7p |  String   |      -      |
| .keys.weight                    |              56              |  Number   |      -      |
| data.active_permission          |              -               |   Array   |      -      |
| .type                           |              44              |  Number   |      -      |
| .id                             |              9               |  Number   |      -      |
| .permission_name                |            active            |  String   |      -      |
| .threshold                      |              4               |  Number   |      -      |
| .operations                     |          f/8fwAM++=          |  String   |      -      |
| .keys                           |              -               |   Array   |      -      |
| .keys.address                   | QddV2w6a6Q5m53ZunZg1flV96F7p |  String   |      -      |
| .keys.weight                    |              17              |  Number   |      -      |
| data.frozenV2                   |              -               |   Array   |      -      |
| data.frozenV2.type              |              81              |  Number   |      -      |
| msg                             |           success            |  String   |      -      |
