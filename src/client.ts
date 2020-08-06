import io from "socket.io-client"

const socket = io.connect("ws://192.168.0.103:3000",)
socket.on("connect", () => {
    console.log("is connection")
    // socket.emit("joinRoom", { roomName: "testRoom" })

})
socket.on("chat", (msg: string) => {
    console.log(`this is chat :${msg}`)
})