import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import '@fontsource/inter/400.css';
import '@fontsource/poppins/400.css';

import { Header } from "./sections/Header";
import { Footer } from "./sections/Footer";

import { Home } from "./pages/Home";
import { QuienesSomos } from "./pages/QuienesSomos";
import { Consejo } from "./pages/Consejo";
import { MisionVision } from "./pages/MisionVision";

import { ScrollToTop } from "./components/ScrollToTop"; // ajusta la ruta según tu proyecto

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <ScrollToTop /> {/* <--- se asegura que cada ruta comience desde arriba */}

      <main className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/consejo" element={<Consejo />} />
          <Route path="/mision-vision" element={<MisionVision />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
