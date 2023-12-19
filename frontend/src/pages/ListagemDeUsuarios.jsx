import React, { useState, useEffect } from 'react';
import '../styles/listagemDeUsuarios.css';
import Header from '../components/Header/Header.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer/Footer.jsx';
import { useNavigate } from 'react-router-dom';

export default function ListagemUsuarios (props) {
  const [usuarios, setUsuarios] = useState([]);
  const [filtros, setFiltros] = useState({
    ativo: false,
    inativo: false,
    cargoProfessor: false,
    cargoAnalista: false,
  });
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

    const fetchUsuarios = async () => {
      try {
        const response = await fetch('http://localhost:3002/api/users/all');
        if (response.ok) {
          const data = await response.json();
          setUsuarios(data.safeUsers || []);
        } else {
          console.error('Erro ao buscar usuários:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchUsuarios();
  }, []);

  const handleFiltroChange = (filtro) => {
    setFiltros((prevFiltros) => ({ ...prevFiltros, [filtro]: !prevFiltros[filtro] }));
  };

  const aplicarFiltros = (usuario) => {
    const { ativo, inativo, cargoProfessor, cargoAnalista } = filtros;
    return (
      (ativo && usuario.status === 'Ativo') ||
      (inativo && usuario.status === 'Inativo') ||
      (cargoProfessor && usuario.cargo === 'Professor') ||
      (cargoAnalista && usuario.cargo === 'Analista')
    );
  };

  const usuariosFiltrados = usuarios.filter(aplicarFiltros);

  return (
    <div>
      <Header />
      <div className='listar-usuarios'>
        <h1 className='titulo'>Listagem de Usuários</h1>

        <div className='container-principal'>
          <div className='container-filtros'>
            <aside className='filtros-usuario'>
              <h2 className='titulo-filtro'>Filtros</h2>
              <div className='container-filtro-secao'>
                <h4 className='titulo-filtro-secao'>Status</h4>
                <div className='container-filtro-secao-opcoes'>
                  <label className='pointer'>
                    <input
                      type='checkbox'
                      checked={filtros.ativo}
                      onChange={() => handleFiltroChange('ativo')}
                    ></input>{' '}
                    Ativo
                  </label>
                  <label className='pointer'>
                    <input
                      type='checkbox'
                      checked={filtros.inativo}
                      onChange={() => handleFiltroChange('inativo')}
                    ></input>{' '}
                    Inativo
                  </label>
                </div>
              </div>
              <div className='container-filtro-secao'>
                <h4 className='titulo-filtro-secao'>Cargo</h4>
                <div className='container-filtro-secao-opcoes'>
                  <label className='pointer'>
                    <input
                      type='checkbox'
                      checked={filtros.cargoProfessor}
                      onChange={() => handleFiltroChange('cargoProfessor')}
                    ></input>{' '}
                    Professor
                  </label>
                  <label className='pointer'>
                    <input
                      type='checkbox'
                      checked={filtros.cargoAnalista}
                      onChange={() => handleFiltroChange('cargoAnalista')}
                    ></input>{' '}
                    Analista
                  </label>
                </div>
              </div>
            </aside>
          </div>

          <div className='container-usuarios'>
            <div className='container-opcoes-usuarios'>
              <input type='text' placeholder='Buscar' className='input-busca'></input>
              <div className='container-opcoes-usuarios-botoes'>
                <select className='select-quantidade-itens pointer'>
                  <option value={10} defaultValue>
                    10 usuários por página
                  </option>
                  <option value={20}>20 usuários por página</option>
                  <option value={50}>50 usuários por página</option>
                </select>
                <button className='btn-novo-usuario pointer'>
                  Novo usuário <i className='fa-solid fa-plus'></i>
                </button>
              </div>
            </div>

            <div className='container-lista-cabecalho'>
              <h5 className='titulo-lista-cabecalho-nome'>Nome</h5>
              <h5 className='titulo-lista-cabecalho'>Cargo</h5>
              <h5 className='titulo-lista-cabecalho'>Matrícula</h5>
              <h5 className='titulo-lista-cabecalho-acoes'>Ações</h5>
            </div>

            <ul className='lista-usuarios'>
                {usuariosFiltrados.map((usuario) => (
                    <li key={usuario.matricula} className='item-usuario'>
                    <p className='item-usuario-nome'>{usuario.nome}</p>
                    <p className='item-usuario-cargo'>{usuario.cargo}</p>
                    <p className='item-usuario-matricula'>{usuario.matricula}</p>
                    {/* Adicione as ações do usuário aqui */}
                    </li>
                ))}
            </ul>

            <ul className='lista-usuarios'>
              {usuarios.map((usuario) => (
                <li key={usuario.matricula} className='item-usuario'>
                  {/* Utilize safeUsers se a estrutura for safeUsers: { safeUsers: [{usuario}] } */}
                  <p className='item-usuario-nome'>{usuario.nome}</p>
                  <p className='item-usuario-cargo'>{usuario.cargo}</p>
                  <p className='item-usuario-matricula'>{usuario.matricula}</p>
                  <div className='item-usuario-acoes'>
                        <a>
                            <FontAwesomeIcon icon={faEdit} className='icone icone-edicao' />
                        </a>
                        <a>
                            <FontAwesomeIcon icon={faTrash} className='icone icone-delecao' />
                        </a>
                    </div>
                  {/* Adicione as ações do usuário aqui */}
                </li>
              ))}
            </ul>

            <div className='botoes-paginacao'>
            <button className='pagina-anterior pointer'>
                                <i class="fa-solid fa-chevron-left"></i> Anterior
                            </button>
                            <button className='proxima-pagina pointer'>
                                Próxima <i class="fa-solid fa-chevron-right"></i>
                            </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};