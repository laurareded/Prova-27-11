import React, { useEffect, useState } from "react";
import axios from "axios";

interface Tarefa {
    id: number;
    nome: string;
    status: string;
}

const ListarConcluidas: React.FC = () => {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect(() => {
        axios.get("http://localhost:5000/pages/tarefa/concluidas").then((response) => {
            setTarefas;
        });
    }, []);

    return (
        <div>
            <h1>Tarefas Concluídas</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {tarefas.map((tarefa) => (
                        <tr key={tarefa.id}>
                            <td>{tarefa.id}</td>
                            <td>{tarefa.nome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListarConcluidas;