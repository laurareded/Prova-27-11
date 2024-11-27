import React, { useState } from "react";
import axios from "axios";


const CadastrarTarefa: React.FC = () => {
    const [titulo, setTitulo] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post("http://localhost:5000/pages/tarefa/cadastrar", {
            titulo,
            status: "Não iniciada"
        }).then(() => {
            alert("Tarefa cadastrada com sucesso!");
        });
    };

    fetch('http://localhost:5000/pages/tarefa/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(CadastrarTarefa)
    })

    return (
        <div>
            <h1>Cadastrar Tarefa</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Titulo</label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Status</label>
                    <input
                        type="text"
                        value={status}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastrarTarefa;
