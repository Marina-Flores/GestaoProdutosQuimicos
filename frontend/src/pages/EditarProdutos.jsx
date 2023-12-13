import React, { useState,  useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import NotificationModal from '../components/notification/NotificationModal'

import '../styles/editarProdutos.css';

export default function EditarProdutos(props) {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        nome_produto: '',
        dataFabricacao: '',
        dataValidade: '',
        quantidade: '',
        estadoFisico: '',
        classe: '',
        controlado: '',
        fornecedor: '',
        fisqp: null,
        sala: '',
    });

    const [notification, setNotification] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'file' ? (files.length > 0 ? files[0] : null) : value,
        }));
    };
    

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:3001/api/produto/${id}`);
            if (response.ok) {
                const produtoData = await response.json();
                produtoData.dataDeFabricacao = produtoData.dataDeFabricacao.substring(0, 10);
                produtoData.dataDeValidade = produtoData.dataDeValidade.substring(0, 10);
                const produto = {
                    nome_produto: produtoData.nome,
                    dataFabricacao: produtoData.dataDeFabricacao,
                    dataValidade: produtoData.dataDeValidade,
                    ...produtoData
                };
              setFormData(produto);
            } else {
                setNotification({ message: 'Erro ao requisitar produto!', success: false });
            }
          } catch (error) {
                setNotification({ message: 'Erro de conexão!!', success: false });
          }
        };
    
        fetchData();
      }, [id]);


    const navigate = useNavigate();

    // enviar solicitaçãpo de edição ao backend
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        const response = await fetch(`http://localhost:3001/api/users/edit/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: JSON.stringify(formDataToSend),
        });

        if (response.ok) {
            setNotification({ message: 'Produto editado com sucesso!', success: true });
        navigate("../listar-produtos"); 
        } else {
        setNotification({ message: 'Falha ao editar produto!', success: false });
        }
    } catch (error) {
        setNotification({ message: 'Falha ao enviar solicitação!', success: false });
    }
    };

    return (
        <>
            <Header />

            {notification && (
                < NotificationModal
                    message={notification.message}
                    success={notification.success}
                />
            )}

            <div className="center__container">
                <div className="form__div">
                    <form onSubmit={handleSubmit}>
                        <h1>Edição de Produto Químico</h1>

                        <label htmlFor="nome_produto">Nome do produto</label>
                        <input
                            type="text"
                            name="nome_produto"
                            maxLength={120}
                            required
                            value={formData.nome_produto}
                            onChange={handleChange}
                        />

                        <div className="div__input">
                            <label htmlFor="dataFabricacao">Data de Fabricação</label>
                            <input
                                type="date"
                                name="dataFabricacao"
                                required
                                value={formData.dataFabricacao}
                                onChange={handleChange}
                            />

                            <label htmlFor="dataValidade">Data de Validade</label>
                            <input
                                type="date"
                                name="dataValidade"
                                required
                                value={formData.dataValidade}
                                onChange={handleChange}
                            />
                        </div>

                        <label htmlFor="quantidade">Quantidade</label>
                        <input
                            type="number"
                            min={0}
                            name="quantidade"
                            required
                            value={formData.quantidade}
                            onChange={handleChange}
                        />

                        <label htmlFor="estadoFisico">Estado Físico</label>
                        <select
                            name="estadoFisico"
                            required
                            value={formData.estadoFisico}
                            onChange={handleChange}
                        >
                            <option value=""></option>
                            <option value="liquido">Líquido (ml)</option>
                            <option value="solido">Sólido (g)</option>
                            <option value="gasoso">Gasoso (m3)</option>
                        </select>

                        <label htmlFor="classe">Classe</label>
                        <input
                            type="number"
                            min={1}
                            max={9}
                            name="classe"
                            required
                            value={formData.classe}
                            onChange={handleChange}
                        />

                        <label htmlFor="controlado">Controlado</label>
                        <input
                            type="text"
                            name="controlado"
                            value={formData.controlado}
                            onChange={handleChange}
                        />

                        <label htmlFor="fornecedor">Fornecedor</label>
                        <input
                            type="text"
                            name="fornecedor"
                            value={formData.fornecedor}
                            onChange={handleChange}
                        />

                        <label htmlFor="fisqp">FISQP</label>
                        <input
                            type="file"
                            name="fisqp"
                            accept=".doc, .docx, .pdf"
                            onChange={handleChange}
                        />

                        <label htmlFor="sala">Sala</label>
                        <input
                            type="text"
                            name="sala"
                            onChange={handleChange}
                        />

                        <button className="button__cadastrar__produto" type="submit">
                            Cadastrar
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
}
