import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './header.css';

import logo from '../../assets/img/logo.png'; 

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
        
    };

    const handleCloseMenu = () => {
        setShowMenu(false);
    };

    return (
        <header>
            <div className="left">
                <div className='logo'>
                    <img src={logo} alt="Logo GPQ"/>
                </div>

                <div id='spacer' />

                <div className={`list ${showMenu ? 'open' : ''}`}>
                    <div className="close__menu" onClick={handleCloseMenu}>
                        <i id='fechar' className="fa-solid fa-square-xmark" />
                    </div>
                    <ul>
                        <li>
                            <Link to={'../cadastrar-produtos'} className='a__link' id='cadastrar'>Cadastrar Produtos</Link>
                        </li>
                        <li>
                            <Link to={"../listar-produtos"} className='a__link' id='listar'>Listar Produtos</Link>
                        </li>
                        <li>
                            <Link to={"../cadastrar-usuario"} className='a__link' id='listar'>Cadastrar Usuario</Link>
                        </li>
                        <li>
                            <Link to={"../listar-usuarios"} className='a__link' id='listar'>Listar Usuarios</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right">
                <div className="hamburger__area" onClick={handleMenuToggle}>
                    <i className="fa-solid fa-bars" id='toggle__menu'></i>
                </div>
                <div className="icons">
                    <div className="icon__menu">
                        <i className="fa-solid fa-bell" id='bell' />
                    </div>
                    <div className='icon__menu' id="user__profile">
                        <i className="fa-solid fa-user" id='user__icon' />
                    </div>
                </div>
            </div>

        </header>
    );
};