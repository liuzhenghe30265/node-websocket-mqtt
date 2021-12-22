const ws = require('nodejs-websocket')

const createServer = () => {
    let server = ws.createServer(connection => {
        connection.on('text', function (result) {
            console.log('客户端发来的消息', result)
            setInterval(() => {
                connection.sendText('向客户端发送消息')
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
    }).listen(8001)
    return server
}

module.exports = createServer()