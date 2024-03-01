import {useState} from "react";
export function Formulario(){
    const[nombre, setNombre]=useState('');
    const[password, setPassword]=useState('');

    return(
<section>
    <h1>
        Login
    </h1>
    <form>
        <input 
        type="text"
        value={nombre}
        onChange={e =>setNombre(e.target.value)}
        />
        <input 
        type="password"
        value={password}
        onChange={e =>setPassword(e.target.value)}

        
        />
        <button>Iniciar Sesion</button>
    </form>
    


</section>
    );
}