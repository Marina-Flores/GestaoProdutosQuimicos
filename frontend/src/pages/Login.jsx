import React, { useEffect } from "react";
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


export default function Login() {

    useEffect(() => {
        const wrapper = document.querySelector(".wrapper");
        const loginLink = document.querySelector(".login-link");
        const registerLink = document.querySelector(".register-link");
        const btnPopup = document.querySelector(".btnLogin-popup");
        const linkInicio = document.querySelector(".linkInicio");
        const btnClose = document.querySelector(".icon-close");
        const wrapperinit = document.querySelector(".wrapper-init");

    
        registerLink.addEventListener('click', () => {
            wrapper.classList.add('active');
        });
    
        loginLink.addEventListener('click', () => {
            wrapper.classList.remove('active');
        });

        btnPopup.addEventListener('click', () => {
            wrapper.classList.add('active-popup');
            wrapperinit.classList.add('active-popup');
        });

        linkInicio.addEventListener('click', () => {
            wrapper.classList.remove('active-popup');
            wrapperinit.classList.remove('active-popup');

        });       
        btnClose.addEventListener('click', () => {
            wrapper.classList.remove('active-popup');
        });
    
        return () => {
            registerLink.removeEventListener('click', () => {
                wrapper.classList.add('active');
            });
    
            loginLink.removeEventListener('click', () => {
                wrapper.classList.remove('active');
            });

            btnPopup.removeEventListener('click', () => {
                wrapper.classList.add('active-popup');
                wrapperinit.classList.add('active-popup');

            });
            linkInicio.removeEventListener('click', () => {
                wrapper.classList.remove('active-popup');
                wrapperinit.classList.remove('active-popup');

            });
            btnClose.removeEventListener('click', () => {
                wrapper.classList.remove('active-popup');
            });
        };
    }, []); 

    return (
        <div className="App">
            <header>
                <img className='logo' src={logo} alt="Logo GPQ"/>
                <nav className="navigation">
                    <a href="#" className="linkInicio">Início</a>
                    <a href="#">Sobre</a>
                    <a href="#">Contato</a>
                    <button className="btnLogin-popup">Entrar</button>
                </nav>
            </header>
            <div className="body-login">
                <div className="wrapper">
                    <span className="icon-close">
                        <CloseIcon />
                    </span>
                    <div className="form-box login">
                        <h2>Login</h2>
                        <form action="#">
                            <div className="input-box">
                                <span className="icon"><EmailIcon /> </span>
                                <input type="email" required></input>
                                <label>Email</label>
                            </div>
                            <div className="input-box">
                                <span className="icon password"><Password /> </span>
                                <input type="password" required></input>
                                <label>Senha</label>
                            </div>
                            <div className="remember-forgot">
                                <label><input type="checkbox"></input>Manter Login</label>
                                <a href="#" className="register-link">Esqueceu a Senha?</a>
                            </div>
                            <button type="submit" className="btn">Entrar</button>

                        </form>
                    </div>
                    <div className="form-box register">
                        <h2 className="title-recuperacao">Esqueceu a Senha?</h2>
                        <form action="#">
                            {/* <div className="input-box">
                                <span className="icon"><UserIcon /> </span>
                                <input type="text" required></input>
                                <label>Nome do Usuário</label>
                            </div> */}
                            <div className="input-box">
                                <span className="icon"><EmailIcon /> </span>
                                <input type="email" required></input>
                                <label>Email de Recuperação</label>
                            </div>
                            {/* <div className="input-box">
                                <span className="icon password"><Password /> </span>
                                <input type="password" required></input>
                                <label>Senha</label>
                            </div>                      
                            <div className="input-box">
                                <span className="icon password"><Password /> </span>
                                <input type="password" required></input>
                                <label>Confirmar Senha</label>
                            </div>
                            <div className="remember-forgot">
                                <label><input type="checkbox"></input>Eu concordo com os Termos de Uso</label>
                            </div> */}
                            <button type="submit" className="btn">Enviar</button>
                            <div className="login-register">
                                <p>Conta recuperada? <a href="#" className="login-link">Voltar</a></p>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="wrapper-init">
                    <img className='igminit' src={imginit} alt="Imagem Inicial"/>   
                    <div className="init-body">
                        <h1>
                        GESTÃO DE PRODUTOS <br></br>QUIMICOS
                        </h1>
                        <br></br>
                        <h2>
                        Sistema  de  Gestão  de  Produtos  Químicos
                        </h2>
                    </div>      
                </div>
            </div>          
        </div>
    )
}




