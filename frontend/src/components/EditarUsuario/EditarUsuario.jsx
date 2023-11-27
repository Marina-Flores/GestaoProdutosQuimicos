import './editarUsuario.css';

export default function EditarUsuario() {
    return (
        <div>
            {/* <Header /> */}
            <div className='container-cadastro'>
                <h1 className='titulo'>Editar Usuário</h1>

                <div className='container-input'>
                    <label className='label'>Nome</label>
                    <input type="text" className='input'></input>
                </div>
                <div className='container-input'>
                    <label className='label'>Matrícula</label>
                    <input type="text" className='input'></input>
                </div>
                <div className='container-input'>
                    <label className='label'>Cargo</label>
                    <select className='input'>
                        <option></option>
                        <option>Analista</option>
                        <option>Professor</option>
                    </select>
                </div>

                <button className='btn-salvar pointer'>Salvar</button>
            </div>
        </div>
    );
}