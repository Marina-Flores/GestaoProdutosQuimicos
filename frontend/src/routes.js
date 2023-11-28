// routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListaUsuarios from './components/ListaUsuarios/ListaUsuarios';
import Header from './components/Header/Header';


export default function WebRoute() {
  return (
    <Routes>
      <Route path="/listar-usuarios" element={<ListaUsuarios />} />
      <Route path="/*" element={<Header />} /> {/* Substitua por sua outra página */}
    </Routes>
  );
}
