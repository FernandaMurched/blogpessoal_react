import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/home/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Cadastro from "./assets/pages/cadastro/Cadastro";
import Login from "./assets/pages/login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import ListaTemas from "./components/temas/listatemas/ListaTemas";
import FormTema from "./components/temas/formtema/FormTema";
import DeletarTema from "./components/temas/deletartemas/DeletarTemas";
import FormPostagem from "./components/temas/postagens/formpostagens/FormPostagens";
import ListaPostagens from "./components/temas/postagens/listapostagens/ListaPostagens";



function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrartema" element={<FormTema />} />
              <Route path="/editartema/:id" element={<FormTema />} />
              <Route path="/deletartema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastrarpostagem" element={<FormPostagem />} />
              <Route path="/editarpostagem/:id" element={<FormPostagem />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
