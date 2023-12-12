import React from "react";

import './produto.css';
    
export default function Produto(props) {
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
                <div className="all__prod">
                    <div className="produto__quantidade">
                        {props.quantidade}
                    </div>
                    <div className="produto__estado__fisico">
                        {props.estadoFisico}
                    </div>
                    <div className="produto__data__fabricacao">
                        {props.dataFabricacao}
                    </div>
                    <div className="produto__data__validade">
                        {props.dataValidade}
                    </div>
                    <div className={`produto__classe__de__risco`}>
                        {props.classeDeRisco}
                    </div>
                    <div className="produto__controlado">
                        {props.controlado}
                    </div>
                    <div className="produto__sala">
                        {props.sala}
                    </div>
                </div>
            </div>
            <div className="produto__button">
                <i class="fa-solid fa-pen-to-square"></i>
            </div>
        </div>
    );
};