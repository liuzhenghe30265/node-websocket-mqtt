const ws = require('nodejs-websocket')

const position = [{ "longitude": 115.20981616624245, "latitude": 39.090207458529 }, { "longitude": 115.20981646879734, "latitude": 39.0902077752995 }, { "longitude": 115.20981684369896, "latitude": 39.0902079154479 }, { "longitude": 115.20981687834248, "latitude": 39.09020735238915 }, { "longitude": 115.20981641393755, "latitude": 39.09020751433551 }, { "longitude": 115.20981671653554, "latitude": 39.09020782558642 }, { "longitude": 115.20981660547628, "latitude": 39.0902 }, { "longitude": 115.20981600574244, "latitude": 39.09020741568768 }, { "longitude": 115.20981649824103, "latitude": 39.09020799853487 }, { "longitude": 115.20981628733749, "latitude": 39.0902078893118 }, { "longitude": 115.20981685691171, "latitude": 39.090207417848546 }, { "longitude": 115.20981632617732, "latitude": 39.090207310787676 }, { "longitude": 115.20981627583754, "latitude": 39.0902072411 }, { "longitude": 115.20981637270424, "latitude": 39.09020776182161 }, { "longitude": 115.20981680276658, "latitude": 39.09020745381708 }, { "longitude": 115.20981635247175, "latitude": 39.09020707668866 }, { "longitude": 115.20981695276866, "latitude": 39.090207534164165 }, { "longitude": 115.2098168567403, "latitude": 39.090207 }, { "longitude": 115.20981669115962, "latitude": 39.09020738106079 }, { "longitude": 115.20981674787637, "latitude": 39.09020717645842 }]

const createServer = () => {
    let server = ws.createServer(connection => {
        connection.on('text', function (result) {
            console.log('客户端发来的消息', result)
            setInterval(() => {
                // connection.sendText('向客户端发送消息')
                connection.sendText(JSON.stringify(position[Math.floor((Math.random() * position.length))]))
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