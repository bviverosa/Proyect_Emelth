const express = require('express');
const linkHost =require('../ports.js');

const app= express();
const http = require("http");
const {Server}= require('socket.io');
const cors= require("cors")
app.use(cors());
const server= http.createServer(app);
const connectedUsers = {};
const unreadPetitions={};
let index=0;
const io= new Server(server,{
    cors:
        {
            origin:linkHost,
            methods:["GET","POST"],
        },
    });
    io.on("connection",(socket)=>{
       
        let id = socket.id;
        connectedUsers[id]=id;
        socket.join(id);
        data= {
            Type:"id",
            socketID:id

        }
        io.to(id).emit('server_message',data);
        
      
        console.log(connectedUsers);
        console.log(data);
        console.log(`User Connected ${id}`);
        
        
        socket.emit('server_requests',unreadPetitions);
       
        
        socket.on("send_message",(data,socket)=>{
            console.log(data.message);
            console.log(socket.id);
            index=Object.keys(unreadPetitions).length;
            unreadPetitions[index+1]=data.message;
            console.log(unreadPetitions);
            socket.broadcast.emit("recieve_message",data)
        })
        socket.on('disconnect', () => {
            delete connectedUsers[id];

            // Enviar la lista actualizada después de la desconexión de un usuario
            console.log(connectedUsers);
            console.log(`User Disconnected: ${id}`);
        });
    })
    server.listen(3001,()=>{
        console.log("Server is running");


    });
