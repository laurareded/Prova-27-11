import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ListarTarefas from './pages/ListarTarefas';
import CadastrarTarefa from './pages/CadastrarTarefas';
import ListarTarefasConcluidas from './pages/ListarConcluidas';
import ListarTarefasNaoConcluidas from './pages/ListarNaoConcluidas';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Lista de Tarefas</Link>
                        </li>
                        <li>
                            <Link to="/cadastrar">Cadastro de Tarefa</Link>
                        </li>
                        <li>
                            <Link to="/concluidas">Tarefas Concluídas</Link>
                        </li>
                        <li>
                            <Link to="/naoconcluidas">Tarefas Não Concluídas</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<ListarTarefas />} />
                    <Route path="/cadastrar" element={<CadastrarTarefa />} />
                    <Route path="/concluidas" element={<ListarTarefasConcluidas />} />
                    <Route path="/naoconcluidas" element={<ListarTarefasNaoConcluidas />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;

