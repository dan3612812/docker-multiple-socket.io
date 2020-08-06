import SocketIO from "socket.io"
import redisAdapter from "socket.io-redis"


const server = new SocketIO(4555, {
    pingInterval: 10 * 1000,
    pingTimeout: 5 * 1000
})
server.adapter(redisAdapter({ host: "redis", port: 6379 }))

server.on("connection", (socket) => {
    socket.emit("message", `PID:${process.pid} sId:${socket.id}`)
    console.log("is me")
    socket.on("chat", (msg: string) => {
        console.log(socket.request.headers)
        console.log("is chat" + msg)
        server.emit("chat", msg)
        // socket.emit("chat", msg)
    })
})