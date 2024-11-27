import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Tarefa {
    id: number;
    titulo: string;
    status: string;
}

const AlterarTarefa: React.FC = () => {
    const { id } = useParams<{ id: string }>();  
    const [tarefa, setTarefa] = useState<Tarefa | null>(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/pages/tarefa/alterar`)  
            .then((response) => {
                setTarefa;  
            })
            .catch((error) => {
                console.error("Erro", error);  
            });
    }, [id]);

    const alterarStatus = () => {
        axios.patch(`http://localhost:5000/pages/tarefa/alterar`)  
            .then(() => {
                alert("Status alterado com sucesso!");
                axios.get(`http://localhost:5000/pages/tarefa/alterar`).then((response) => {
                    setTarefa;  
                });
            })
            .catch((error) => {
                console.error("Erro", error);  
            });
    };

    if (!tarefa) return <p>Carregando tarefa...</p>;  

    return (
        <div>
            <h1>Alterar Tarefa</h1>
            <p>
                <strong>ID:</strong> {tarefa.id}
            </p>
            <p>
                <strong>Nome:</strong> {tarefa.titulo}
            </p>
            <p>
                <strong>Status Atual:</strong> {tarefa.status}
            </p>
            <button onClick={alterarStatus}>Alterar Status</button>
        </div>
    );
};

export default AlterarTarefa;
