import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import '@fontsource/inter/400.css';
import '@fontsource/poppins/400.css';

import { Header } from "./components/layout/header/Header";
import { Footer } from "./components/layout/footer/Footer";

import { HomePage } from "./pages/HomePage";
import { QuienesSomosPage } from "./pages/quienesSomos/QuienesSomosPage";
import { ConsejoPage } from "./pages/consejo/ConsejoPage";
import { MisionVisionPage } from "./pages/misionVision/MisionVisionPage";
import { ScrollToTop } from "./components/common/ScrollToTop";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <ScrollToTop />

      <main className="min-h-[70vh] ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quienes-somos" element={<QuienesSomosPage />} />
          <Route path="/consejo" element={<ConsejoPage />} />
          <Route path="/mision-vision" element={<MisionVisionPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
