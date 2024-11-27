import React, { useEffect, useState } from "react";
import axios from "axios";

interface Tarefa {
    id: number;
    titulo: string;
    status: string;
    descricao: string;
    categoria: string;
}

const ListarTarefas: React.FC = () => {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect(() => {
        axios.get("http://localhost:5000/pages/tarefa/listar").then((response) => {
            setTarefas;
        });
    }, []);

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tarefas.map((tarefa) => (
                        <tr key={tarefa.id}>
                            <td>{tarefa.id}</td>
                            <td>{tarefa.titulo}</td>
                            <td>{tarefa.descricao}</td>
                            <td>{tarefa.categoria}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListarTarefas;