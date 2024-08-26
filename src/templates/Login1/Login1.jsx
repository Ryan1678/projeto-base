import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "./Login1.css";

const Login1 = () => {

    const navigate = useNavigate();

    const goto = () => {
        navigate("/home");
    }

    const backto = () => {
        navigate("/");
    }



const Login1 = () => {

    const [username, setUsername] = useState("");
    const [passaword, setPassword] = useState("");

    const handleSubmit = () => {

        Event.preventDefault();

        alert("Login realizado" + username + " - " + password);
        
    };

  return (
   <div className="container">
    <form onSubmit={handleSubmit}>
     <h1>Acesse nossa Lanchonete</h1>
     <div className="input-field">
    <input type="email" placeholder="RM" onChange={(e) => setUsername(e.target.value)}/>
    <FaUser className="icon" />
    </div>

    <div className="input-field">
    <input type="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)} />
    <FaLock className="icon" />
    </div>

    <div className="recall-forget">
        <label>
            <input type="checkbox" />
            Lembre de mim
        </label>
        <a href="#"> Esqueceu a Senha? </a>
    </div>

    <button>Acessar</button>

    <div className="signup-link">
        <p> Não se cadastrou? <a href="#"> Resgistar </a>
        </p>
    </div>

    </form>
   </div>
      
   
  )
}
}

export default Login1
