import React, { useEffect } from 'react';
import Header from '../components/Header/Header.jsx';
import '../styles/cadastroDeUsuarios.css'

export default function CadastroDeUsuarios (props) {
    useEffect(() => {
        var btnSalvar = document.getElementById('btn-salvar');
        btnSalvar.onclick = function () {
            var contador = 0;
            var nome = document.getElementById('nome-usuario');
            var matricula = document.getElementById('matricula-usuario');
            var cargo = document.getElementById('cargo-usuario');
            var nomeLabel = document.getElementById('label-nome-usuario');
            var matriculaLabel = document.getElementById('label-matricula-usuario');
            var cargoLabel = document.getElementById('label-cargo-usuario');
            var nomeRegex = /^[a-zA-Z\s]+$/;

            if (nome.value !== "" && nomeRegex.test(nome.value)) {
                contador++;
                nomeLabel.classList.remove('label-erro');
            } else {
                nomeLabel.classList.add('label-erro');
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

            if(contador == 3) {
                // Fazer a lógica de edição de usuário
            }
        }
    })

    return (
        <div>
            <Header />
            <div className='container-cadastro'>
                <h1 className='titulo'>Edição de Usuário</h1>

                <div className='container-input'>
                    <label className='label' for='nome-usuario' id='label-nome-usuario'>Nome</label>
                    <input type="text" className='input' id="nome-usuario"></input>
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

                <button className='btn-salvar pointer' id='btn-salvar'>Salvar</button>
            </div>
        </div>
    );
}