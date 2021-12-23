# WebSocket 和 mqtt

## WebSocket

利用 nodejs-websocket 创建 WebSocket 客户端和服务端

```
yarn add nodejs-websocket
```

服务端 ws.js

```js
const ws = require('nodejs-websocket')

const createServer = () => {
	let server = ws
		.createServer(connection => {
			connection.on('text', function (result) {
				console.log('客户端发来的消息', result)
				setInterval(() => {
					// connection.sendText('向客户端发送消息')
				}, 1000)
			})
			connection.on('connect', function (code) {
				console.log('开启连接', code)
			})
			connection.on('close', function (code) {
				console.log('关闭连接', code)
			})
			connection.on('error', function (code) {
				console.log('异常关闭', code)
			})
		})
		.listen(8001)
	return server
}

module.exports = createServer()
```

开启服务

```bash
node ws.js
```

客户端 ws.html

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>WebSocket</title>
	</head>

	<body>
		<script>
			if (window.WebSocket) {
				let ws = new WebSocket('ws://192.168.2.124:8001')
				ws.onopen = function (e) {
					console.log('连接服务器成功！')
					ws.send('启动！')
				}
				ws.onclose = function (e) {
					console.log('服务器关闭')
				}
				ws.onerror = function () {
					console.log('连接出错')
				}
				ws.onmessage = function (e) {
					console.log(e)
				}
			}
		</script>
	</body>
</html>
```

## mqtt

```
yarn add mqtt mosca
```

server.js

```

```

```bash
node server.js
```

报错

```
D:\WorkSpaces\o\node-websocket-mqtt\node_modules\jsonschema\lib\validator.js:110
    throw new SchemaError('Expected `schema` to be an object or boolean');
```

打开文件

```
node_modules\jsonschema\lib\validator.js
```

注释掉

```
  if((typeof schema !== 'boolean' && typeof schema !== 'object') || schema === null){
    throw new SchemaError('Expected `schema` to be an object or boolean');
  }
```

开启订阅

subclient.js

```

```

```bash
node subclient.js
```

发布订阅

pubclient.js

```

```

```bash
node pubclient.js
```

报错
```
Uncaught TypeError: net.createConnection is not a function
    at Object.streamBuilder (mqtt.js:1736)
    at MqttClient.wrapper [as streamBuilder] (mqtt.js:2525)
    at MqttClient._setupStream (mqtt.js:300)
    at new MqttClient (mqtt.js:279)
    at Function.connect (mqtt.js:2527)
    at index.html:15
```

[Github](https://github.com/liuzhenghe30265/node-websocket-mqtt.git)
