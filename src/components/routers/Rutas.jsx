import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Inicio } from "../pages/Inicio";
import { Articulos } from "../pages/Articulos";
import { Header } from "../layout/Header";
import { Nav } from "../layout/Nav";
import { Sidebar } from "../layout/Sidebar";
import { Footer } from "../layout/Footer";
import { Crear } from "../pages/Crear";
export const Rutas = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <section id="content" className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/crear-articulos" element={<Crear />} />
        </Routes>
      </section>
      <Sidebar />
      <Footer />
    </BrowserRouter>
  );
};
