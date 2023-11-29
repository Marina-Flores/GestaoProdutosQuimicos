import React from "react";

import './produto.css';
    
export default function Produto(props) {

    function getCorDaClasse(classeDeRisco) {
        const mapaDeCores = {
          'inflamável': 'vermelho',
          'explosivo': 'vermelho',
          'corrosívo': 'verde',
          'tóxico': 'verde',
          'gases': 'azul',
          'infectante': 'amarelo',
          'peroxido organico': 'amarelo',
          'neutro': 'cinza',
        };
    
        const classeMinusc = classeDeRisco.toLowerCase();
      
        return mapaDeCores[classeMinusc] || 'cinza';
    }

    return (
        <div className="container__produto">
            <div className="left">
                {props.name}
                <div className="spacer__produto"></div>
            </div>
            <div className="right">
                <div className={props.fisqp === "fisqp" ? "fisqp__blue__icon" : "fisqp__gray__icon"}>
                    <i class="fa-solid fa-file-lines"></i>
                </div>
                <div className={`produto__classe__de__risco ${getCorDaClasse(props.classeDeRisco)}`}>
                    {props.classeDeRisco}
                </div>
                <div className="produto__controlado">
                    {props.controlado}
                </div>
            </div>
        </div>
    );
};