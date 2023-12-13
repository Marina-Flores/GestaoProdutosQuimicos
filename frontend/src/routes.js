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
import ListagemDeProdutos from './pages/ListagemDeProdutos';
import ListagemDeUsuarios from './pages/ListagemDeUsuarios';
import EditarProdutos from "./pages/EditarProdutos";

export default function WebRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/esqueci-senha" element={<EsqueciSenha />} />
                <Route path="/cadastrar-produtos" element={<CadastroDeProdutos />} />
                <Route path="/cadastrar-usuario" element={<CadastroDeUsuarios />} />
                <Route path="/listar-usuarios" element={<ListagemDeUsuarios />} />
                <Route path="/listar-produtos" element={<ListagemDeProdutos />} />
                <Route path="/editar-produto/:id" element={<EditarProdutos />} />
            </Routes>
        </BrowserRouter>
    );
}