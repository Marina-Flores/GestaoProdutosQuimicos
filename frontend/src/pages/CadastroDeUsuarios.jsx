import React, { useEffect } from 'react';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import '../styles/cadastroDeUsuarios.css'
import { useNavigate } from 'react-router-dom';

export default function CadastroDeUsuarios(props) {
    const navigate = useNavigate();
    
    useEffect(() => {
        const verificarUsuarioLogado = () => {
            var dadosJson = sessionStorage.getItem("infoUsuario")
            var dados = JSON.parse(dadosJson);

            if(dados == null) {
                navigate('../');
            }
        }

        verificarUsuarioLogado();

const cadastrarUsuario = async (usuario) => {
    try {
        const response = await fetch('http://localhost:3000/api/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })

        if(response.status == 201) {
            navigate('../listar-usuarios');
        }
    } catch (error) {
        
    }

}

        var btnSalvar = document.getElementById('btn-salvar');
        btnSalvar.onclick = function () {
            var contador = 0;
            var nome = document.getElementById('nome-usuario');
            var email = document.getElementById('email-usuario');
            var matricula = document.getElementById('matricula-usuario');
            var cargo = document.getElementById('cargo-usuario');
            var senha = document.getElementById('senha-usuario');
            var nomeLabel = document.getElementById('label-nome-usuario');
            var emailLabel = document.getElementById('label-email-usuario');
            var matriculaLabel = document.getElementById('label-matricula-usuario');
            var cargoLabel = document.getElementById('label-cargo-usuario');
            var senhaLabel = document.getElementById('label-senha-usuario');
            var nomeRegex = /^[a-zA-Z\s]+$/;
            var emailRegex = /^[\w.\+]+@\w+.\w{2,}(?:.\w{2})?$/;

            if (nome.value !== "" && nomeRegex.test(nome.value)) {
                contador++;
                nomeLabel.classList.remove('label-erro');
            } else {
                nomeLabel.classList.add('label-erro');
            }

            if (email.value !== "" && emailRegex.test(email.value)) {
                contador++;
                emailLabel.classList.remove('label-erro');
            } else {
                emailLabel.classList.add('label-erro');
            }

            if (matricula.value !== "") {
                contador++;
                matriculaLabel.classList.remove('label-erro');
            } else {
                matriculaLabel.classList.add('label-erro');
            }

            if (cargo.value !== "") {
                contador++;
                cargoLabel.classList.remove('label-erro');
            } else {
                cargoLabel.classList.add('label-erro');
            }

            if (senha.value !== "") {
                contador++;
                senhaLabel.classList.remove('label-erro');
            } else {
                senhaLabel.classList.add('label-erro');
            }

            if(contador == 5) {
                var usuario = {
                    nome: nome.value,
                    email: email.value,
                    senha: senha.value,
                    matricula: matricula.value,
                    cargo: cargo.value
                }

                cadastrarUsuario(usuario);
            }
        }
    })

    return (
        <div>
            <Header />
            <div className='container-cadastro'>
                <h1 className='titulo'>Cadastro de Usuários</h1>

                <div className='container-input'>
                    <label className='label' for='nome-usuario' id='label-nome-usuario'>Nome</label>
                    <input type="text" className='input' id="nome-usuario"></input>
                </div>
                <div className='container-input'>
                    <label className='label' for='email-usuario' id='label-email-usuario'>Email</label>
                    <input type="email" className='input' id="email-usuario"></input>
                </div>
                <div className='container-input'>
                    <label className='label' for='matricula-usuario' id='label-matricula-usuario'>Matrícula</label>
                    <input type="text" className='input' id='matricula-usuario'></input>
                </div>
                <div className='container-input'>
                    <label className='label' for='cargo-usuario' id='label-cargo-usuario'>Cargo</label>
                    <select className='input' id='cargo-usuario'>
                        <option></option>
                        <option value={"Analista"}>Analista</option>
                        <option value={"Professor"}>Professor</option>
                    </select>
                </div>
                <div className='container-input'>
                <label className='label' for='senha-usuario' id='label-senha-usuario'>Senha</label>
                    <input type="password" className='input' id='senha-usuario'></input>
                </div>

                <button className='btn-salvar pointer' id='btn-salvar'>Salvar</button>
            </div>
            <Footer />
        </div>
    );
}