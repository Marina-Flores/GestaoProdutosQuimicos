import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import '../styles/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import logo from '../assets/img/logo.png'; 


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

  
    }, []); 
    const location = useLocation();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [mensagem, setMensagem] = useState('');
    
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const searchParams = new URLSearchParams(location.search);
      const token = searchParams.get('token');
      console.log(token);
      if (password === confirmPassword) {
       if (token) {         
                try {
                    const response = await fetch('http://localhost:3001/api/user/trocarSenha', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ token, newPassword: password }),
                    });

                    const data = await response.json();
                    console.log('Resposta da atualização de senha:', data);

                    if (data.response=="Usuário não encontrado") {
                        setMensagem('Erro ao atualizar a senha.'); // Mensagem de erro

                    } else {
                        setMensagem('Senha atualizada com sucesso!'); // Mensagem de sucesso

                    }
   
                } catch (error) {
                    console.error('Erro ao tentar atualizar a senha:', error);
                    setMensagem('Erro ao tentar atualizar a senha.');
                }
            }
            else{
                setMensagem('Token não válido.');
            }
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
              <button type="submit" className="btn">Salvar</button>
              {!passwordMatch && (
                <p className="confirma-senhas" style={{ color: 'red' }}>As senhas não coincidem.</p>
              )}
              <div className="mensagem-envio">
              {mensagem && (
                
                    <p className={mensagem.includes('Erro') ? 'mensagem-erro' : 'mensagem-sucesso'}>
                        {mensagem}
                    </p>
                )}
                </div>
            </form>
          </div>
        </div>
      </div>        
        </div>
    )
}




