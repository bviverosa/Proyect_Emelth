const express = require('express');
const app= express();
const http = require("http");
const {Server}= require('socket.io');
const cors= require("cors")
app.use(cors());
const server= http.createServer(app);
const io= new Server(server,{
    cors:
        {
            origin:"http://10.0.0.23:3000",
            methods:["GET","POST"],
        },
    });
    io.on("connection",(socket)=>{
        let id = socket.id;
        console.log(`User Connected ${id}`
        )
        
        socket.emit('receive_message',{Type:"id",socketID:id})
        
        socket.on("send_message",(data)=>{
            console.log(data.message);
            socket.broadcast.emit("recieve_message",data)

        })
    })
    server.listen(3001,()=>{
        console.log("Server is running");


    });