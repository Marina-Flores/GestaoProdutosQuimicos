import React from 'react';

// importando o css global
import './styles/index.css';

import Header from './components/Header/Header';
import Login from './ControleAcesso/Login';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Login />          
    </div>
    
  );
}

export default App;
