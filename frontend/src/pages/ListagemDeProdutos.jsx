import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Checkbox from '../components/checkbox/Checkbox';
import Produto from '../components/Produto/Produto';
import '../styles/listagemDeProdutos.css';

export default function ListagemDeProdutos(props) {
  const [produtos, setProdutos] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const produtosPorPagina = 10;

  useEffect(() => {
    // Função para buscar os produtos do backend
    const fetchProdutos = async () => {
      try {
        // Substitua a URL abaixo pela URL correta do seu backend
        const response = await fetch(`API_PARA_O_BACKEND?page=${paginaAtual}`);
        const data = await response.json();
        setProdutos(data); // Atualiza o estado com os produtos obtidos
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProdutos(); // Chama a função ao montar o componente ou quando a página atual muda
  }, [paginaAtual]);

  const handleProximo = () => {
    setPaginaAtual((prevPagina) => prevPagina + 1);
  };

  const handleAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual((prevPagina) => prevPagina - 1);
    }
  };

  // Função para obter os produtos a serem exibidos na página atual
  const produtosExibidos = produtos.slice((paginaAtual - 1) * produtosPorPagina, paginaAtual * produtosPorPagina);

  return (
    <>
      <Header />
      <section className="section__listagem">
        <h2 id="head2__listagem">Listagem de Produtos Químicos</h2>
        <div className="listagem__de__produtos">
          <div className="listagem">
            <aside className="aside__filtros">
              <h2>Filtros</h2>
              <div className="filtro status">
                    <h3>Status</h3>
                    <Checkbox name="Ativo" checked="checked"/>
                    <Checkbox name="Inativo" />
                </div>

                <div className="filtro classe__de__risco">
                    <h3>Classe de risco</h3>
                    <Checkbox name="1" checked="checked"/>
                    <Checkbox name="2" />
                    <Checkbox name="3" />
                    <Checkbox name="4" />
                    <Checkbox name="5" />
                    <Checkbox name="6" />
                    <Checkbox name="7" />
                    <Checkbox name="8" />
                    <Checkbox name="9" />
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
              <input type="text" name="buscar" id="buscar" placeholder="Buscar" />
              <Link to={"/cadastrar-produtos"} className="a__link" id="redirect__cadastro__de__produto">
                Novo Produto <i className="fa-solid fa-plus" id="icon__novo__produto"></i>
              </Link>
            </div>
            <div className="produtos">
              <div className="head">
                <div className="left">
                  <p>Nome</p>
                </div>
                <div className="right">
                  <p id='txt__fisqp'>FISQP</p>
                  <p>Quantidade</p>
                  <p id='txt__ef'>Estado Físico</p>
                  <p>D. Fabricação</p>
                  <p id='txt__cr'>D. Validade</p>
                  <p id='txt__cr'>Classe de Risco</p>
                  <p id="controlado">Controlado</p>
                  <p id="sala">Sala</p>
                </div>
              </div>
              <div className="body">
                {/* Mapeamento dos produtos */}
                {produtosExibidos.map((produto) => (
                  <Produto
                    key={produto.id}
                    name={produto.nome}
                    fisqp={produto.fisqp}
                    classeDeRisco={produto.classeDeRisco}
                    quantidade={produto.quantidade}
                    estadoFisico={produto.estadoFisico}
                    dataFabricacao={produto.dataFabricacao}
                    dataValidade={produto.dataValidade}
                    controlado={produto.controlado}
                    sala={produto.sala}
                  />
                ))}
                <Produto
                    key={'091823098'}
                    name='Álcool 70%'
                    fisqp={null}
                    classeDeRisco={7}
                    quantidade={8}
                    estadoFisico={'Líquido (ml)'}
                    dataFabricacao={'23/03/2023'}
                    dataValidade={'23/03/2028'}
                    controlado={'Não'}
                    sala={'12'}
                  />
              </div>
              <div className="footer">
                <div className="anterior" onClick={handleAnterior}>
                  <i className="fa-solid fa-arrow-left"></i>
                  <p>Anterior</p>
                </div>

                <div className="proximo" onClick={handleProximo}>
                  <p>Próximo</p>
                  <i className="fa-solid fa-arrow-right" onClick={handleAnterior()}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
