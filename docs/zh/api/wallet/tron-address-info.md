# 获取TRON钱包详情 {#TRON-API}

::: tip 小提示
用于获取钱包的详情数据
:::

**接口URL**

  ```sh
  /tron/account/get_address?address=TVbo8fGRDmaiitf1JhpDhai5bLLxBwWpPt
  ```

**请求方式**

> GET


**请求Query参数**

| 参数名  | 示例值                             | 参数类型 | 是否必填 | 参数描述 |
| ------- | ---------------------------------- | -------- | -------- | -------- |
| address | TVbo8fGRDmaiitf1JhpDhai5bLLxBwWpPt | String   | 是       | 钱包地址 |



**响应示例**

* 成功(200)

```json
{
	"code": 0,
	"data": {
		"address": "QddV2w6a6Q5m53ZunZg1flV96F7p",
		"balance": 58,
		"asset_optimized": true,
		"create_time": 360819486441,
		"latest_opration_time": 1241340283804, // 最近操作时间
		"latest_consume_free_time": 1590559150046,  //最近消费免费时间
		"net_window_size": 68,
		"net_window_optimized": true,
		"account_resource": {
			"latest_consume_time_for_energy": 9,
			"energy_window_size": 98,
			"energy_window_optimized": true
		},
		"owner_permission": { //用户权限
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
	"msg": "获取成功"
}
```

* 失败(404)

```json
暂无数据
```

| 参数名                          |            参数值            | 参数类型 | <div style="width:100px">参数描述</div> |
| ------------------------------- | :--------------------------: | :------: | :-------------------------------------: |
| code                            |              0               |  Number  |              交易结果代码               |
| data                            |              -               |  Object  |                    -                    |
| address                         | QddV2w6a6Q5m53ZunZg1flV96F7p |  String  |                用户地址                 |
| balance                         |              58              |  Number  |                账户余额                 |
| asset_optimized                 |             true             | Boolean  |              资产优化状态               |
| create_time                     |         360819486441         |  Number  |                创建时间                 |
| latest_opration_time            |        1241340283804         |  Number  |              最近操作时间               |
| latest_consume_free_time        |        1590559150046         |  Number  |            最近消费免费时间             |
| net_window_size                 |              68              |  Number  |              网络窗口大小               |
| net_window_optimized            |             true             | Boolean  |            网络窗口优化状态             |
| account_resource                |              -               |  Object  |                账户资源                 |
| .latest_consume_time_for_energy |              9               |  Number  |           最近消费时间(能量)            |
| .energy_window_size             |              98              |  Number  |              能量窗口大小               |
| .energy_window_optimized        |             true             | Boolean  |            能量窗口优化状态             |
| data.owner_permission           |              -               |  Object  |               所有者权限                |
| .permission_name                |            owner             |  String  |                权限名称                 |
| .threshold                      |              13              |  Number  |                  阈值                   |
| .keys                           |              -               |  Array   |                  密钥                   |
| .keys.address                   | QddV2w6a6Q5m53ZunZg1flV96F7p |  String  |                  地址                   |
| .keys.weight                    |              56              |  Number  |                  权重                   |
| data.active_permission          |              -               |  Array   |                活动权限                 |
| .type                           |              44              |  Number  |                权限类型                 |
| .id                             |              9               |  Number  |                 权限ID                  |
| .permission_name                |            active            |  String  |                权限名称                 |
| .threshold                      |              4               |  Number  |                  阈值                   |
| .operations                     |          f/8fwAM++=          |  String  |                  操作                   |
| .keys                           |              -               |  Array   |                  密钥                   |
| .keys.address                   | QddV2w6a6Q5m53ZunZg1flV96F7p |  String  |                  地址                   |
| .keys.weight                    |              17              |  Number  |                  权重                   |
| data.frozenV2                   |              -               |  Array   |                 冻结V2                  |
| data.frozenV2.type              |              81              |  Number  |                冻结类型                 |
| msg                             |           获取成功           |  String  |                    -                    |
