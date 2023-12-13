import React, { useEffect, useState } from "react";
import { useNavigate  } from 'react-router-dom'; 
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

    const [redirecionar, setRedirecionar] = useState(false); 
    const navigate = useNavigate();

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

    useEffect(() => {
        if (redirecionar) {
            navigate('/listar-produtos'); 
        }
    }, [redirecionar, navigate]);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [credenciaisInvalidas, setCredenciaisInvalidas] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, senha }),
            });

            const data = await response.json();

            if (data.message == "Credenciais inválidas") {
                setCredenciaisInvalidas(true);
               
            } else {
                var usuarioInfo = {
                    email: email,
                    token: data.accessToken 
                };

                sessionStorage.setItem("infoUsuario", JSON.stringify(usuarioInfo));
                setRedirecionar(true);


            } 
        } catch (error) {
            console.error('Erro ao tentar fazer login:', error.message);
        }
    };

    const [emailRecuperacao, setEmailRecuperacao] = useState('');
    const [mensagemEnvio, setMensagemEnvio] = useState('');
    const [erroEnvio, setErroEnvio] = useState('');

    const handleSubmitRecuperacaoSenha = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/recuperar-senha/enviar-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: emailRecuperacao }),
            });

            const data = await response.json();
            console.log(data.message);
            if (data.message == "Usuário não encontrado.") {
                setErroEnvio('Usuário não encontrado.');
                setMensagemEnvio('');
                
            } else {        
                setMensagemEnvio('E-mail de recuperação enviado com sucesso!');
                setErroEnvio('');
            }
        } catch (error) {
            console.error('Erro ao tentar enviar e-mail de recuperação:', error);
            setErroEnvio('Erro ao tentar enviar e-mail de recuperação');
            setMensagemEnvio('');
        }
    };

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
                        <form onSubmit={handleSubmit} action="#">
                            <div className="input-box">
                                <span className="icon"><EmailIcon /> </span>
                                <input type="email" required onChange={(e) => setEmail(e.target.value)}></input>
                                <label>Email</label>
                            </div>
                            <div className="input-box">
                                <span className="icon password"><Password /> </span>
                                <input type="password" required onChange={(e) => setSenha(e.target.value)}></input>
                                <label>Senha</label>
                            </div>
                            <div className="remember-forgot">
                                <label><input type="checkbox"></input>Manter Login</label>
                                <a href="#" className="register-link">Esqueceu a Senha?</a>
                            </div>
                            <button type="submit" className="btn">Entrar</button>
                            <div className="mensagem-envio">
                            {credenciaisInvalidas && <p className="mensagem-erro">Credenciais inválidas. Por favor, verifique seu email e senha.</p>}
                            </div>
                        </form>
                    </div>
                    <div className="form-box register">
                        <h2 className="title-recuperacao">Esqueceu a Senha?</h2>                    
                        <form onSubmit={handleSubmitRecuperacaoSenha} action="#">
                            <div className="input-box">
                                <span className="icon"><EmailIcon /> </span>
                                <input
                                    type="email"
                                    required
                                    value={emailRecuperacao}
                                    onChange={(e) => setEmailRecuperacao(e.target.value)}
                                ></input>
                                <label>Email de Recuperação</label>
                            </div>
                            <button type="submit" className="btn">Enviar</button>
                            <div className="login-register">
                                <p>Conta recuperada? <a href="#" className="login-link">Voltar</a></p>
                            </div>
                            <div className="mensagem-envio">
                                {mensagemEnvio && <p className="mensagem-sucesso">{mensagemEnvio}</p>}
                                {erroEnvio && <p className="mensagem-erro">{erroEnvio}</p>}
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




