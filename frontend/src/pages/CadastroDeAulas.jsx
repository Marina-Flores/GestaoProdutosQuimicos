import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Checkbox from "../components/checkbox/Checkbox";
import { useNavigate } from 'react-router-dom';

export default function CadastroDeAulas(props) {
    const [produtos, setProdutos] = useState([]);
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

        const obterProdutos = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/produtos',{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMCIsImlhdCI6MTcwMjQ3NzgwNCwiZXhwIjoxNzAyNDk1ODA0fQ.FlxNjVN5s2uR9V5VNQfSIu-v9s1D7wEWuscHq4agqnI`,
                    }
            });
                const data = await response.json()

                setProdutos(data);

            } catch (error) {
                console.log(error.message)
            }
        }

        obterProdutos();

        var btnSalvar = document.getElementById('btn-salvar');


        const obterCheckboxesMarcados = () => {
            var listaProdutos = [];

            var cbx = document.getElementsByName('produtos');
            for (var i = 0; i < cbx.length; i++) {
                if(cbx[i].checked)
                    listaProdutos.push(parseInt(cbx[i].value))
            }

            return listaProdutos;
        }

        const cadastrarAula = async (aula) => {
            try {
                const response = await fetch('http://localhost:3000/api/aula', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMCIsImlhdCI6MTcwMjQ3NzgwNCwiZXhwIjoxNzAyNDk1ODA0fQ.FlxNjVN5s2uR9V5VNQfSIu-v9s1D7wEWuscHq4agqnI`,
                    },
                    body: JSON.stringify(aula)
            });
            const json = await response.json()

            if(response.status == 201) {
                navigate('../listar-produtos');
            }

            } catch(error) {
                console.error(error.message)
            }
        }

        btnSalvar.onclick = function () {
            var contador = 0;
            var laboratorio = document.getElementById('laboratorio-aula');
            var data = document.getElementById('data-aula');
            var turno = document.getElementById('turno-aula');
            var listaProdutos = obterCheckboxesMarcados();
            var laboratorioLabel = document.getElementById('label-laboratorio-aula');
            var dataLabel = document.getElementById('label-data-aula');
            var turnoLabel = document.getElementById('label-turno-aula');
            var produtosLabel = document.getElementById('label-produtos-aula')

            if (laboratorio.value !== "") {
                contador++;
                laboratorioLabel.classList.remove('label-erro');
            } else {
                laboratorioLabel.classList.add('label-erro');
            }

            if (data.value !== "") {
                contador++;
                dataLabel.classList.remove('label-erro');
            } else {
                dataLabel.classList.add('label-erro');
            }

            if (turno.value !== "") {
                contador++;
                turnoLabel.classList.remove('label-erro');
            } else {
                turnoLabel.classList.add('label-erro');
            }

            if(listaProdutos.length > 0) {
                contador++;
                produtosLabel.classList.remove('label-erro')
            } else {
                produtosLabel.classList.add('label-erro');
            }

            if(contador == 4) {
                var aula = {
                    laboratorio: laboratorio.value,
                    data: data.value,
                    turno: turno.value,
                    produtos: listaProdutos,
                    reservadoPor: 1 //TODO: Alterar isso para obter o usuario logado
                };

                cadastrarAula(aula);
            }
        }

    }, []);
    return (
        <div>
            <Header />
            <div>
                <div className="container-cadastro">
                    <h1 className='titulo'>Cadastro de Aula</h1>

                    <div className='container-input'>
                        <label className='label' for='laboratorio-aula' id='label-laboratorio-aula'>Laboratório</label>
                        <select className='input' id='laboratorio-aula'>
                            <option></option>
                            <option value={"Lab 1"}>Laboratório 1</option>
                            <option value={"Lab 2"}>Laboratório 2</option>
                        </select>
                    </div>
                    <div className='container-input'>
                        <label className='label' for='data-aula' id='label-data-aula'>Data</label>
                        <input type="date" className='input' id="data-aula"></input>
                    </div>
                    <div className='container-input'>
                        <label className='label' for='turno-aula' id='label-turno-aula'>Turno</label>
                        <select className='input' id='turno-aula'>
                            <option></option>
                            <option value={"Manhã"}>Manhã</option>
                            <option value={"Tarde"}>Tarde</option>
                            <option value={"Noite"}>Noite</option>
                        </select>
                    </div>
                    <div>
                        <p className="label" id='label-produtos-aula'>Produtos</p>

                        {Array.isArray(produtos) ? produtos.map((p, index) => (
                            <Checkbox name={p.nome} key={index} value={p._id} nameElement={"produtos"} />
                        )) : ""}
                    </div>

                    <button className='btn-salvar pointer' id='btn-salvar'>Salvar</button>

                </div>
            </div>
            <Footer />
        </div>
    );
}