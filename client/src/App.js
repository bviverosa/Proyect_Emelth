import { useEffect, useState } from "react";
import './App.css';
import io from 'socket.io-client';
const socket= io.connect("http://10.0.0.23:3001");

function App() {
  const [requests, setRequests] = useState([]);
  const handleReceiveMessage = (data) => {
    let request1 = data.message;
    console.log(request1);

    switch (request1.Type) {
      case "request":
        setRequests((prevRequests) => [...prevRequests, request1]);
        break;
      default:
        break;
    }
  };
    useEffect(()=>{
        socket.on("recieve_message", handleReceiveMessage);
        socket.on('server_message', (data)=>{
          console.log(data);

        })
        return () => {
          socket.off("recieve_message",handleReceiveMessage);
          console.log("Unsubscribing from receive_message");
          socket.off('server_message');
        };
  },[]); 
  return(<div className="App">
  <div>
<table>
<thead>
  <tr>
    <th>Nombre</th><th>Apellido Paterno</th><th>Apellido Paterno</th><th>Emergncia</th>
    {/* Agrega más encabezados según tus necesidades */}
  </tr>
</thead>
<tbody>
{requests.map((request, index) => (
            <tr key={index}>
              <td>{request.Name}</td>
              {/* Agrega más celdas según las propiedades de tu mensaje */}
            </tr>
          ))}
</tbody>
</table>
</div>
</div>
);
}
  

export default App;
