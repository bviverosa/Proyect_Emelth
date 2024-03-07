import { Alert,StyleSheet,TextInput, Button, View, Text } from 'react-native';
import React, { useMemo, useState, useEffect } from "react";
import RadioGroup from "react-native-radio-buttons-group";
import io from 'socket.io-client'
const socket = io('http://192.168.20.141:3001');//"https://ipadress:3001"

export default function TabTwoScreen() {
  const regex = /^[A-Z][a-z\s]*$/;
 function validate(name:string){
    return regex.test(name);



}
const handleReceiveMessage = (data:Object) => {
  const request1 = data;

  type ObjectKey = keyof typeof request1;
 const message = 'message' as ObjectKey;
 const messageObject= request1[message];
 type messagekey = keyof typeof messageObject;
 const typeKey= 'Type' as ObjectKey;
 console.log(messageObject[typeKey]);
  

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
const showCustomAlert = (titulo: string) => {
  Alert.alert(
    `${titulo}`,
    'Este es el mensaje de la alerta.',
    [
      { text: 'Cancelar', style: 'cancel', onPress: () => console.log('Alerta cancelada') },
    ],
    { cancelable: true }
  );
};
const emergencyButtons = useMemo(
  () => [
    {
      id: "1",
      label: "C1",
      value: "C1",
      borderColor: "#FFFFFF",
      color: "#FFFFFF",
    },
    {
      id: "2",
      label: "C2",
      value: "C2",
      borderColor: "#FFFFFF",
      color: "#FFFFFF",
    },
    {
      id: "3",
      label: "C3",
      value: "C3",
      borderColor: "#FFFFFF",
      color: "#FFFFFF",
    },
    {
      id: "4",
      label: "C4",
      value: "C4",
      borderColor: "#FFFFFF",
      color: "#FFFFFF",
    },
    {
      id: "5",
      label: "C5",
      value: "C5",
      borderColor: "#FFFFFF",
      color: "#FFFFFF",
    },
  ],
  []
);
const sexButtons = useMemo(
  () => [
    {
      id: "1",
      label: "Femenino",
      value: "femenino",
      borderColor: "#FFFFFF",
      color: "#FFFFFF",
    },
    {
      id: "2",
      label: "Masculino",
      value: "Masculino",
      borderColor: "#FFFFFF",
      color: "#FFFFFF",
    },
  ],
  []
);
  const handleInputChange = (name:string,text:string) => {
    setPatientData({
      ...patientData,
      [name]: text,
    });
  };
  const handleSendData = () => {
    // Emit a custom event with the input text to the server
    socket.emit('send_message', { message: patientData });
    console.log (validate(patientData.Name));
    setPatientData({
      Type: 'request',
      Name: '',
      LastName: '',
      LastName2: '',
      Description:'',
      Age:'',
      Emergency:'',
      Sex:'',

    });
   
  };
  const [patientData, setPatientData] = useState({
    Type:'request',
    Name: '',
    LastName: '',
    LastName2:'',
    Description:'',
    Emergency:'',
    Age:'',
    Sex:'',


  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#374151",
        padding: 20,
        paddingTop: 50,
      }}
    >
      <Text style={{ color: "white", fontSize: 20, marginBottom: 10 }}>
        Crear Folio
      </Text>
      <Text style={{ color: "white" }}>Selecciona el nivel de emergencia</Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
      >
        <RadioGroup
          radioButtons={emergencyButtons}
          onPress={(id) => handleInputChange('Emergency', String(id))}
          selectedId={patientData.Emergency}
          labelStyle={{ color: "white" }}
          layout="row"
        />
      </View>
      <Text style={{ color: "white" }}>Nombre paciente</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          color: "white",
        }}
        onChangeText={(text) => handleInputChange('Name', String(text))}
        value={patientData.Name}
        placeholder="Nombre del paciente"
      />
      <Text style={{ color: "white" }}>Apellido Paterno</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          color: "white",
        }}
        onChangeText={(text) => handleInputChange('LastName', String(text))}
        value={patientData.LastName}
        placeholder="Apellido Paterno"
      />
      <Text style={{ color: "white" }}>Apellido Materno</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          color: "white",
        }}
        onChangeText={(text) => handleInputChange('LastName2', String(text))}
        value={patientData.LastName2}
        placeholder="Apellido Materno"
      />
      <Text style={{ color: "white" }}>Edad</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          color: "white",
        }}
        onChangeText={(text) => handleInputChange('Age', String(text))}
        value={patientData.Age}
        placeholder="Edad"
        keyboardType="numeric"
      />
      <Text style={{ color: "white" }}>Sexo</Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
      >
        <RadioGroup
          radioButtons={sexButtons}
          onPress={(id) => handleInputChange('Sex', String(id))}
          selectedId={patientData.Sex}
          labelStyle={{ color: "white" }}
        />
      </View>
      <Text style={{ color: "white" }}>Padecimiento actual</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          color: "white",
        }}
        onChangeText={(text) => handleInputChange('Description', String(text))}
        value={patientData.Description}
        placeholder="Padecimiento"
      />
      <Button title="Generar" onPress={handleSendData} color="#1F2937" />
    </View>
  );
  
}
