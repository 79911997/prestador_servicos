import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loja from "./pages/home/Loja";
import Admin from "./pages/admin/Admin";
import ClienteLista from "./pages/admin/clientes/ClienteLista";
import ClienteForm from "./pages/admin/clientes/ClienteForm";
import UsuarioForm from './pages/profile/usuarios/UsuarioForm';
import ServicoLista from './pages/profile/servicos/ServicoLista';
import ServicoForm from './pages/profile/servicos/ServicoForm';
import Home from "./pages/home/Home";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loja />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/profile" element={<Admin />}>
          <Route path="novo" element={<UsuarioForm />} />
          <Route path="servicos" element={<ServicoLista />} />
          <Route path="servicos/novo" element={<ServicoForm />} />
          <Route path="servicos/:id" element={<ServicoForm />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="clientes" element={<ClienteLista />} />
          <Route path="clientes/novo" element={<ClienteForm />} />
          <Route path="clientes/:id" element={<ClienteForm />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Esta página não existe.</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}