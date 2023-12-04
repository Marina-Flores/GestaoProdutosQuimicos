import React from 'react';
// import { Link } from "react-router-dom";

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
// import Modal from '../components/modal/Modal';

// importando estilo da página
import '../styles/cadastroDeProdutos.css';

export default function CadastroDeProdutos(props) {
    return (
        <>
            <Header />

            <div className="center__container">
                <div className="form__div">
                    <form action="" method="POST">
                        <h1>Cadastro de Produto Químico</h1>

                        <label htmlFor="">Nome do produto</label>
                        <input type="text" name="nome_produto" id="" maxLength={120} required/>
                        
                        <label htmlFor="dataFabricação">Data de Fabricação</label>
                        <input type="date" name="dataFabricacao" id="" required/>

                        <label htmlFor="dataValidade">Data de Validade</label>
                        <input type="date" name="dataValidade" id="" required/>

                        <label htmlFor="estadoFísico">Estado Físico</label>
                        <select name="estadoFisico" id="" required>
                            <option value=""></option>
                            <option value="">Líquido (ml)</option>
                            <option value="">Sólido (g)</option>
                            <option value="">Gasoso (m3)</option>
                        </select>

                        <label htmlFor="classe">Classe</label>
                        <input type="number" min={1} max={9} name="classe" id="" required/>

                        <label htmlFor="controlado">Controlado</label>
                        <input type="text" name="controlado" id=""/>

                        <label htmlFor="fisqp">FISQP</label>
                        <input type="file" name="fisqp" id="" accept=".doc, .docx, .pdf" />

                        <button className='button__cadastrar__produto' type="submit">cadastrar</button>
                    </form>
                </div>
            </div>
{/*            
            <Modal message={`Tem certeza que deseja excluir permanentemente este usuário?`}  
                user="Gabriel Carvalho"
                userID="012893902139128"/> */}
            <Footer />
        </>
    );
}