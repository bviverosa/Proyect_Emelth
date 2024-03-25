import { useEffect, useState } from "react";
// import {link1} from 'ports.js';
import './App.css';
import io from 'socket.io-client';
const socket= io.connect("http://10.0.0.23:3001");

function App() {
  const [requests, setRequests] = useState([]);
  function addRequestToState(request) {
    setRequests((prevState) => [...prevState, request]);
  }
  const handleAcept=(index)=>{
    console.log(index,true);

  }
  const handleReject=(index)=>{
    console.log(index,false);

  }
  const handleReceiveMessage = (data) => {
    let request1 = data.message;
    console.log(request1);

    switch (request1.Type) {
      case "request":
        addRequestToState(request1);
        break;
       

      default:
        break;
    }

  };
  const handleRequests=(data)=>{
    console.log(data);
    for(let index in data){
   
      addRequestToState(data[index]);


      
    }
  
  }
    useEffect(()=>{
        socket.on("recieve_message", handleReceiveMessage);
        socket.on("server_requests",handleRequests);
        socket.on('server_message', (data)=>{
          console.log(data);

        })
        return () => {
          socket.off("recieve_message",handleReceiveMessage);
          console.log("Unsubscribing from receive_message");
          socket.off('server_message');
          socket.off('server_requests');
        };
  },[]); 
  return(
  <div className="App">
  <div>
<table>
<thead>
  <tr>
    <th>Nombre</th><th>Apellido Paterno</th><th>Apellido Paterno</th><th>Emergncia</th>
   
  </tr>
</thead>
<tbody>
{requests.map((request, index) => (
            <tr key={index}>
              <td>{request.Name}</td>

              <td>
              <button onClick={() => handleAcept(index)}>Aceptar</button>
              <button onClick={() => handleReject(index)}>Rechazar</button>
            </td>
            </tr>
          ))}
</tbody>
</table>
</div>
</div>
);
}
  

export default App;
