
import { useEffect, useState } from "react";
import './App.css';
import io from 'socket.io-client';
const socket= io.connect("http://10.0.0.23:3001");

function App() {
  
  const [message,setMessage]= useState("");

  const[nameReceived,setNameReceived]= useState("");
 
    useEffect(()=>{
        socket.on("recieve_message", (data) => {
          let request1 = data.message;
      console.log(request1);
      switch(request1.Type){
        case "request":
          setNameReceived(request1.Name);

          break;
        case "id":
         
          setNameReceived(request1.socketID);
          break;
      }
        });
  })
}

export default App;
