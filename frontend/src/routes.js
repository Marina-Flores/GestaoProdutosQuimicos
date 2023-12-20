import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  
import Login from './pages/Login';
import EsqueciSenha from './pages/EsqueciSenha';
// import Home from './pages/Home';
import CadastroDeProdutos from './pages/CadastroDeProdutos';
import CadastroDeUsuarios from './pages/CadastroDeUsuarios';
import EditarProdutos from "./pages/EditarProdutos";
import ListagemDeProdutos from './pages/ListagemDeProdutos';
import ListagemDeUsuarios from './pages/ListagemDeUsuarios';
import CadastroDeAulas from "./pages/CadastroDeAulas";

export default function WebRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/recuperar-senha" element={<EsqueciSenha />} />
                <Route path="/cadastrar-produtos" element={<CadastroDeProdutos />} />
                <Route path="/cadastrar-usuario" element={<CadastroDeUsuarios />} />
                <Route path="/editar-usuario/:id" element={<CadastroDeUsuarios />} />
                <Route path="/editar-produto/:id" element={<EditarProdutos />} />
                <Route path="/listar-usuarios" element={<ListagemDeUsuarios />} />
                <Route path="/listar-produtos" element={<ListagemDeProdutos />} />
                <Route path="/cadastrar-aula" element={<CadastroDeAulas />} />
            </Routes>
        </BrowserRouter>
    );
}