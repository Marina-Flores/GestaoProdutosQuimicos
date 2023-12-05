import React from 'react';
import { Link } from "react-router-dom";

import './footer.css';

import logo from '../../assets/img/logo.png';  

export default function Footer() {
    return (
        <footer>
            <div className="images">
                <img id='logo' src={logo} alt="Logo GPQ"/>

                <div className='spacer' />
            </div>
            <div className="rights">
                <div className="p__place">
                    <p>&copy; 2023 - Gestão de Produtos Químicos</p>
                    <p>Jair Galvão de Araújo</p>
                </div>
                <div>
                    <i class="fa-brands fa-github"></i>
                    <Link className='link' to={"https://github.com/vieirarester"}
                        target="_blank" 
                        rel="noopener noreferrer">
                        Ester Rodrigues
                    </Link>
                </div>

                <div>
                    <i class="fa-brands fa-github"></i>
                    <Link className='link' to={"https://github.com/iamgabs"}
                        target="_blank" 
                        rel="noopener noreferrer">
                        Gabriel Carvalho
                    </Link>
                </div>
                
                <div>
                    <i class="fa-brands fa-github"></i>
                    <Link className='link' to={"https://github.com/Nizekul"}
                        target="_blank" 
                        rel="noopener noreferrer">
                        Lucas Santos
                    </Link>
                </div>
                
                <div>
                    <i class="fa-brands fa-github"></i>
                    <Link className='link' to={"https://github.com/luisaferreira"}
                        target="_blank" 
                        rel="noopener noreferrer">
                        Luísa Ferreira
                    </Link>
                </div>
               
               <div>
                    <i class="fa-brands fa-github"></i>
                    <Link className='link' to={"https://github.com/Amoneleais"}
                        target="_blank" 
                        rel="noopener noreferrer">
                        Manoel Elias
                    </Link>
               </div>
                
                <div>
                    <i class="fa-brands fa-github"></i>
                    <Link className='link' to={"https://github.com/Marina-Flores"}
                        target="_blank" 
                        rel="noopener noreferrer">
                        Marina Flores
                    </Link>          
                </div>
                      
                <div>
                    <i class="fa-brands fa-github"></i>
                    <Link className='link' to={"https://github.com/mikekennedymk"}
                        target="_blank" 
                        rel="noopener noreferrer">
                        Mike Kennedy
                    </Link>
                </div>
                
                <div>
                    <i class="fa-brands fa-github"></i>
                    <Link className='link' to={"https://github.com/otaviotrk"}
                        target="_blank" 
                        rel="noopener noreferrer">
                        Otávio Jordão
                    </Link>
                </div>
               
            </div>
        </footer>
    );
};