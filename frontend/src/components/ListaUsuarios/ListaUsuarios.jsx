import React, { useState } from 'react';
import './listaUsuarios.css';
import Header from '../Header/Header';

export default function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState([
        { Nome: "Maria Luisa Ferreira", Cargo: "Analista", Matricula: "123456789" },
        { Nome: "Mike Kennedy", Cargo: "Analista", Matricula: "234567891" },
        { Nome: "Gabriel Carvalho", Cargo: "Analista", Matricula: "3456789" },
        { Nome: "Lucas Santos", Cargo: "Professor", Matricula: "456789123" },
        { Nome: "Ester Vieira", Cargo: "Analista", Matricula: "567891234" },
        { Nome: "Marina Flores", Cargo: "Professor", Matricula: "678912345"  },
        { Nome: "Manoel Elias", Cargo: "Analista", Matricula: "789123456"  },
    ]);
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
                                <h4 className='titulo-filtro-secao'>Matrícula</h4>
                                <div className='container-filtro-secao-opcoes'>
                                    <label className='pointer'><input type='checkbox'></input> Ativo</label>
                                    <label className='pointer'><input type='checkbox'></input> Inativo</label>
                                </div>
                            </div>
                            <div className='container-filtro-secao'>
                                <h4 className='titulo-filtro-secao'>Cargo</h4>
                                <div className='container-filtro-secao-opcoes'>
                                    <label className='pointer'><input type='checkbox'></input> Professor</label>
                                    <label className='pointer'><input type='checkbox'></input> Analista</label>
                                </div>
                            </div>
                        </aside>
                    </div>


                    <div className='container-usuarios'>
                        <div className='container-opcoes-usuarios'>
                            <input type='text' placeholder='Buscar' className='input-busca'></input>
                            <div className='container-opcoes-usuarios-botoes'>
                                <select className='select-quantidade-itens pointer'>
                                    <option value={10} selected>10 usuários por página</option>
                                    <option value={20}>20 usuários por página</option>
                                    <option value={50}>50 usuários por página</option>
                                </select>
                                <button className='btn-novo-usuario pointer'>Novo usuário <i class="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                        <div className='container-lista-cabecalho'>
                            <h5 className='titulo-lista-cabecalho-nome'>Nome</h5>
                            <h5 className='titulo-lista-cabecalho'>Cargo</h5>
                            <h5 className='titulo-lista-cabecalho'>Matrícula</h5>
                            <h5 className='titulo-lista-cabecalho-acoes'>Ações</h5>
                        </div>

                        <ul className='lista-usuarios'>
                            {
                                usuarios.map(usuario => (
                                    <li className='item-usuario'>
                                        <p className='item-usuario-nome'>{usuario.Nome}</p>
                                        <p className='item-usuario-cargo'>{usuario.Cargo}</p>
                                        <p className='item-usuario-matricula'>{usuario.Matricula}</p>
                                        <div className='item-usuario-acoes'>
                                            <a className='pointer'>
                                                <i class="fa-regular fa-pen-to-square icone icone-edicao"></i>
                                            </a>
                                            <a className='pointer'>
                                                <i class="fa-solid fa-trash icone icone-delecao"></i>
                                            </a>
                                        </div>
                                    </li>
                                ))
                            }
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
        </div>
    );
}