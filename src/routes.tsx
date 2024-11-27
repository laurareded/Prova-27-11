import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListarTarefas from "./pages/ListarTarefas";
import CadastrarTarefas from "./pages/CadastrarTarefas";
import AlterarTarefas from "./pages/AlterarTarefas";
import ListarConcluidas from "./pages/ListarConcluidas";
import ListarNaoConcluidas from "./pages/ListarNaoConcluidas";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/pages/ListarTarefas" element={<ListarTarefas />} />
                <Route path="/pages/CadastrarTarefas" element={<CadastrarTarefas />} />
                <Route path="/pages/AlterarTarefas" element={<AlterarTarefas />} />
                <Route path="/pages/ListarConcluidas" element={<ListarConcluidas />} />
                <Route path="/pages/ListarNaoConcluidas" element={<ListarNaoConcluidas />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;