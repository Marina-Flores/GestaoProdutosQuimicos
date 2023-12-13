import React, { useEffect, useState } from "react";
import '../styles/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import logo from '../assets/img/logo.png'; 
import imginit from '../assets/img/init-img.png'; 

const EmailIcon = () => (

    <FontAwesomeIcon icon={faEnvelope} />

)
const BackIcon = () => (


    <FontAwesomeIcon icon={faArrowLeft} />

)

const Password = () => (

    <FontAwesomeIcon icon={faLock} />

)

const CloseIcon = () => (

    <FontAwesomeIcon icon={faXmark} />

)
const UserIcon = () => (

    <FontAwesomeIcon icon={faUser} />

)


export default function EsqueciSenha() {

    useEffect(() => {
        const wrapper = document.querySelector(".wrapper");
        const loginLink = document.querySelector(".login-link");
        const registerLink = document.querySelector(".register-link");
        const btnPopup = document.querySelector(".btnLogin-popup");
        const linkInicio = document.querySelector(".linkInicio");
        const btnClose = document.querySelector(".icon-close");
        const wrapperinit = document.querySelector(".wrapper-init");

  
    }, []); 
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (password === confirmPassword) {
        // Senhas coincidem, pode prosseguir com a lógica de envio
        setPasswordMatch(true);
      } else {
        setPasswordMatch(false);
      }
    };
    
    return (
        <div className="App">
            <header>
                <img className='logo-esqueci-senha' src={logo} alt="Logo GPQ"/>
                <nav className="navigation">
                </nav>
            </header>
            <div className="body-login">
        <div className="wrapper-esqueci-senha">
          <div className="form-box esqueci-senha">
            <h2 className="title-recuperacao">Atualizar Senha</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <span className="icon password"><Password /></span>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <label>Senha</label>
              </div>
              <div className="input-box">
                <span className="icon password"><Password /></span>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                />
                <label>Confirmar Senha</label>
              </div>
              {!passwordMatch && (
                <p className="confirma-senhas" style={{ color: 'red' }}>As senhas não coincidem.</p>
              )}
              <button type="submit" className="btn">Salvar</button>
            </form>
          </div>
        </div>
      </div>        
        </div>
    )
}




