import React, { useState } from 'react';

// importando estilo da página
import './modal.css';

export default function Modal(props) {

    const [isVisible, setIsVisible] = useState(true);
    const [httpMessage, setHttpMessage] = useState('');

    const closeModal = () => {
        setIsVisible(false);
    };

    const onDelete = async () => {
        try {
            const { userID } = props;
            const response = await fetch(`api/backend/${userID}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // caso o usuário tenha sido deletado, deve exibir uma mensagem de sucesso!
                setHttpMessage('Usuário deletado com sucesso!');
                setTimeout(() => {
                    closeModal();
                }, 3000);
            } else {
                setHttpMessage('Erro ao deletar usuário');
            }
        } catch (error) {
            setHttpMessage('Não foi possível deletar o usuário');
        }
    };

    return isVisible ? (
        <div className="modal">
            <div className="modal__header">
                <i id='fechar' class="fa-solid fa-square-xmark" onClick={closeModal}></i>
            </div>
            <div className="modal__body">
                {httpMessage ? (
                        <p>{httpMessage}</p>
                    ) : (
                        <>
                            {props.message}
                            <br />
                            <p>{props.user}</p>
                        </>
                    )}
            </div>
            <div className="modal__footer">
                <button className="button__modal" id="nao" onClick={closeModal}>Não</button>
                <button className="button__modal" id="sim"  onClick={onDelete}>Sim</button>
            </div>
        </div>
    ): null;
}