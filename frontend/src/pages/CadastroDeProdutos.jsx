import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import NotificationModal from '../components/notification/NotificationModal'
import { json, useNavigate } from 'react-router-dom';
import '../styles/cadastroDeProdutos.css';

export default function CadastroDeProdutos(props) {
    const [formData, setFormData] = useState({
        nome: '',
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
    const navigate = useNavigate();

    const [notification, setNotification] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'file' ? (files.length > 0 ? files[0] : null) : value,
        }));
    };
    
    useEffect(() => {
        const verificarUsuarioLogado = () => {
            var dadosJson = sessionStorage.getItem("infoUsuario")
            var dados = JSON.parse(dadosJson);

            if(dados == null) {
                navigate('../');
            }
        }

        verificarUsuarioLogado();
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:3000/api/produtos';
        const token = JSON.parse(sessionStorage.getItem("infoUsuario")).token;
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                // Se a requisição for bem-sucedida, exibe o modal verde
                setNotification({ message: 'Produto cadastrado com sucesso!', success: true });
            } else {
                // Se houver um erro, exibe o modal vermelho
                setNotification({ message: 'Erro ao cadastrar produto. Tente novamente.', success: false });
            }

            // Define um timeout para remover o modal após 3 segundos
            setTimeout(() => {
                setNotification(null);
            }, 3000);
        } catch (error) {
            setNotification({ message: 'Erro de conexão., Por favor, contate o suporte!', success: false });
            setTimeout(() => {
                setNotification(null);
            }, 3000);
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
                        <h1>Cadastro de Produto Químico</h1>

                        <label htmlFor="nome">Nome do produto</label>
                        <input
                            type="text"
                            name="nome"
                            maxLength={120}
                            required
                            value={formData.nome}
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
                            type="text"
                            name="fisqp"
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
