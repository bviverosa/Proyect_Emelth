// LoginPage.js
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function LoginRegister() {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate =useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData.username,formData.password);
    let username=formData.username;
    let password=formData.password;

    
  };
  const handleFormSubmit2 = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.username || !formData.password) {
      setError('Por favor, ingrese un usuario y contraseña.');
      return;
    }
    // Reset error message
    setError('');

    // API call to register or login
    axios.post("http://localhost:3001/login", formData)
      .then(res => {
        let data= res.data;
        if(data.Status){
          navigate("/home");

        }else{
          setError('Error al iniciar sesión. Por favor, intente de nuevo.');
        }
      })
      .catch(err => {
        // Handle error, display error message
        setError('Error al iniciar sesión. Por favor, intente de nuevo.');
        console.log(err);
      });}
    

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Registrar en mi Aplicación</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
      <h1 className="loginPage-title">Iniciar sesión en mi Aplicación</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleFormSubmit2}>
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
    
  );
}

export default LoginRegister;
