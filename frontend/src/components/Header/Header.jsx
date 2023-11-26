import React from 'react';
import './header.css';

import logo from '../../assets/img/logo.png'; 

export default function Header() {
    return (
        <header>
            <div className="left">
                <div className='logo'>
                    <img src={logo} alt="Logo GPQ"/>
                </div>

                <div className='spacer' />

                <div className="list">
                    <ul>
                        <li>
                            <a href="#" id='cadastrar'>Cadastrar produtos</a>
                        </li>
                        <li>
                            <a href="#" id='listar'>Listar Produtos </a>
                        </li>
                        <li>
                            <a href="#" id='estoque'>Estoque</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right">
                <div className="bell__area">
                    <i class="fa-solid fa-bell" id='bell' />
                </div>
                <div className="user__profile">
                    <i class="fa-solid fa-user" id='user__icon' />
                </div>
            </div>
        </header>
    );
}