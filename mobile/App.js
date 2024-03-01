
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';
//import and connecet with the socket server
import io from 'socket.io-client'
const socket = io('http://192.168.20.141:3001');//"https://ipadress:3001"
export default function App() {
  const handleInputChange = (name,text) => {
    setPatientData({
      ...patientData,
      [name]: text,
    });
  };
  
  const [patientData, setPatientData] = useState({
    Type:'request',
    Name: '',
    LastName: '',
    LastName2:'',


  });
  const handleSendData = () => {
    // Emit a custom event with the input text to the server
    socket.emit('send_message', { message: patientData });

    // Clear the input field
   
  };
   useEffect(() => {
    // Connect to the socket when the component mounts
    socket.connect();

    // Disconnect from the socket when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

 
  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
        type="text"
        id="Name"
        name="Name"
        value={patientData.Name}
        onChangeText={(text) => handleInputChange('Name', text)}
        placeholder="Nombre"
        
      />
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
      type="text"
        id="LastName"
        name="LastName"
        placeholder="Apellido Paterno"
        value={patientData.LastName}
        onChangeText={(text) => handleInputChange('LastName', text)}
        
      />
       <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
      type="text"
        id="LastName2"
        name="LastName2"
        placeholder="Apellido Materno"
        value={patientData.LastName}
        onChangeText={(text) => handleInputChange('LastName2', text)}
      />
     
      
      
   
      <Button title="Send Data" onPress={handleSendData} />
          </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
