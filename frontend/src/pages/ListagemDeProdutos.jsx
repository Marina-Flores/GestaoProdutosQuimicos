import React from 'react';
import { Link } from "react-router-dom";

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Checkbox from '../components/checkbox/Checkbox';

// importando estilo da página
import '../styles/listagemDeProdutos.css';
import Produto from '../components/Produto/Produto';

export default function ListagemDeProdutos(props) {
    return (
        <>
            <Header />
            <section className="section__listagem">
                <h2 id='head2__listagem'>Listagem de Produtos Qúimicos</h2>
                <div className="listagem__de__produtos">
                    <div className="listagem">

                        <aside className='aside__filtros'>
                            <h2>Filtros</h2>

                            <div className="filtro status">
                                <h3>Status</h3>
                                <Checkbox name="Ativo" checked="checked"/>
                                <Checkbox name="Inativo" />
                            </div>

                            <div className="filtro classe__de__risco">
                                <h3>Classe de risco</h3>
                                <Checkbox name="Neutro" checked="checked"/>
                                <Checkbox name="Explosivos" />
                                <Checkbox name="Tóxicos" />
                                <Checkbox name="Gases" />
                                <Checkbox name="Infectantes" />
                                <Checkbox name="Inflamáveis" />
                                <Checkbox name="Oxidantes" />
                                <Checkbox name="Peróxidos Orgânicos" />
                            </div>                    

                            <div className="filtro ph">
                                <h3>PH</h3>
                                <Checkbox name="Ácido" />
                                <Checkbox name="Básico" />
                            </div>
                        </aside> 
                    </div>

                    <div className="acoes">
                        <div className="top">
                            <input type="text" name="buscar" id="buscar" placeholder='Buscar'/>
                            <Link to={"/cadastrar-produtos"} className='a__link' id='redirect__cadastro__de__produto'>
                                Novo Produto <i class="fa-solid fa-plus" id='icon__novo__produto'></i>
                            </Link>
                        </div>
                        <div className="produtos">
                            <div className="head">
                                <div className="left">
                                    <p>Nome</p>
                                </div>
                                <div className="right">
                                    <p>FISQP</p>
                                    <p>Classe de Risco</p>
                                    <p id='controlado'>Controlado</p>
                                </div>
                            </div>
                            <div className="body">
                                <Produto name="Acetona" 
                                    fisqp="fisqp"
                                    classeDeRisco="Inflamável" 
                                    controlado="Não"/>  
                                <Produto name="Agar Sangue" 
                                    classeDeRisco="Neutro" 
                                    controlado="Não"/>  
                                <Produto name="Água Sanitária" 
                                    fisqp="fisqp"
                                    classeDeRisco="Corrosívo" 
                                    controlado="Não"/>  
                                <Produto name="Álcool Etílico 70%" 
                                    fisqp="fisqp"
                                    classeDeRisco="Inflamável" 
                                    controlado="Não"/>  
                                <Produto name="Clorexidina" 
                                    classeDeRisco="Neutro" 
                                    controlado="Não"/>  
                                <Produto name="Cloro" 
                                    fisqp="fisqp"
                                    classeDeRisco="Gases" 
                                    controlado="Não"/>  
                                <Produto name="Dipirona" 
                                    classeDeRisco="Neutro" 
                                    controlado="Não"/>  
                            </div>
                            <div className="footer">
                                <div className="anterior">
                                    <i class="fa-solid fa-arrow-left"></i>
                                    <p>Anterior</p>
                                </div>

                                <div className="proximo">
                                    <p>Próximo</p>
                                    <i class="fa-solid fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </section>
            
            
            <Footer />
        </>
    );
};