const express = require("express")
const path = require("path")
const app = express();
const server = require("http").createServer(app);
const socketIO = require("socket.io")
const moment = require("moment");

const io = socketIO(server);


app.use(express.static(path.join(__dirname + '/src')))
const PORT = process.env.PORT || 3000; 




io.on("connection", function(socket){
    socket.on("chatting", function(data){
        console.log(data)

        io.emit("chatting", data)
    })
    
    socket.on("td", function(data){
        io.emit("td", data)
        console.log(data)
    })
})


server.listen(PORT, function(){
console.log(`server listening: ${PORT} `)
})

