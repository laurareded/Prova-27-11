import React, { useEffect, useState } from "react";
import axios from "axios";

interface Tarefa {
    id: number;
    titulo: string;
    status: string;
}

const ListarNaoConcluidas: React.FC = () => {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect(() => {
        axios.get("http://localhost:5000/pages/tarefa/naoconcluidas").then((response) => {
            setTarefas;
        });
    }, []);

    return (
        <div>
            <h1>Tarefas Não Concluídas</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titulo</th>
                    </tr>
                </thead>
                <tbody>
                    {tarefas.map((tarefa) => (
                        <tr key={tarefa.id}>
                            <td>{tarefa.id}</td>
                            <td>{tarefa.titulo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListarNaoConcluidas;