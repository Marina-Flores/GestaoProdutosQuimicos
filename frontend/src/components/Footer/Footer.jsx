import React from 'react';
import { Link } from "react-router-dom";

import './footer.css';

import logo from '../../assets/img/logo.png';  
import logoIfpe from '../../assets/img/ifpe-logo.png';

export default function Footer() {
    return (
        <footer>
            <div className="images">
                <img id='logo' src={logo} alt="Logo GPQ"/>

                <div className='spacer' />

                <img id='logoIF' src={logoIfpe} alt="Logo IFPE"/>
            </div>
            <div className="rights">
                <div className="p__place">
                    <p>&copy; 2023 - Gestão de Produtos Químicos</p>
                    <p>Jair Galvão de Araújo</p>
                </div>
                <Link className='link' to={"https://github.com/vieirarester"}
                    target="_blank" 
                    rel="noopener noreferrer">
                    Ester Rodrigues
                </Link>
                <Link className='link' to={"https://github.com/iamgabs"}
                    target="_blank" 
                    rel="noopener noreferrer">
                    Gabriel Carvalho
                </Link>
                <Link className='link' to={"https://github.com/Nizekul"}
                    target="_blank" 
                    rel="noopener noreferrer">
                    Lucas Santos
                </Link>
                <Link className='link' to={"https://github.com/luisaferreira"}
                    target="_blank" 
                    rel="noopener noreferrer">
                    Luísa Ferreira
                </Link>
                <Link className='link' to={"https://github.com/Amoneleais"}
                    target="_blank" 
                    rel="noopener noreferrer">
                    Manoel Elias
                </Link>
                <Link className='link' to={"https://github.com/Marina-Flores"}
                    target="_blank" 
                    rel="noopener noreferrer">
                    Marina Flores
                </Link>                
                <Link className='link' to={"https://github.com/mikekennedymk"}
                    target="_blank" 
                    rel="noopener noreferrer">
                    Mike Kennedy
                </Link>
                <Link className='link' to={"https://github.com/otaviotrk"}
                    target="_blank" 
                    rel="noopener noreferrer">
                    Otávio Jordão
                </Link>
            </div>
        </footer>
    );
};