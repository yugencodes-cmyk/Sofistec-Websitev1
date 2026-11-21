/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * @file App.tsx
 * Sofistec - Responsive Website Prototype
 * Firm in Mexico City providing Asesoría Fiscal, Soluciones Tecnológicas,
 * and Administración Inmobiliaria.
 * 
 * DEVELOPER REPLACEMENT CHECKLIST:
 * 1. Company history: src/views/NosotrosView.tsx (replace Lorem ipsum)
 * 2. Privacy notice: src/views/AvisoPrivacidadView.tsx (replace draft placeholder)
 * 3. Corporate video: src/views/NosotrosView.tsx (embed production MP4/embed and VideoObject SEO)
 * 4. Stock images: src/config.ts ASSETS (swap Unsplash URLs for proprietary photos)
 * 5. JOB_BOARD_URL: src/config.ts (assign official recruitment URL)
 */

import React, { useState, useEffect } from "react";
import { PageId } from "./types";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { InicioView } from "./views/InicioView";
import { NosotrosView } from "./views/NosotrosView";
import { ServiciosView } from "./views/ServiciosView";
import { BolsaTrabajoView } from "./views/BolsaTrabajoView";
import { ContactoView } from "./views/ContactoView";
import { AvisoPrivacidadView } from "./views/AvisoPrivacidadView";

export default function App() {
  // Sync state with URL hash for natural navigation and bookmarking
  const getInitialPage = (): PageId => {
    const hash = window.location.hash.replace("#", "") as PageId;
    const validPages: PageId[] = [
      "inicio",
      "nosotros",
      "servicios",
      "bolsa-de-trabajo",
      "contacto",
      "aviso-de-privacidad",
    ];
    return validPages.includes(hash) ? hash : "inicio";
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);

  // Handle hash changes (e.g. browser back/forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const page = getInitialPage();
      setCurrentPage(page);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Update hash when navigating
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Dynamic document title based on current page
  useEffect(() => {
    const pageTitles: Record<PageId, string> = {
      inicio: "Sofistec | Asesoría Fiscal, Tecnología y Administración Inmobiliaria en CDMX",
      nosotros: "Nosotros | Sofistec - Firma Profesional en CDMX",
      servicios: "Servicios Especializados | Sofistec CDMX",
      "bolsa-de-trabajo": "Bolsa de Trabajo | Sofistec Oportunidades",
      contacto: "Contacto Directo | Sofistec Col. del Valle, CDMX",
      "aviso-de-privacidad": "Aviso de Privacidad (Borrador) | Sofistec",
    };
    document.title = pageTitles[currentPage] || "Sofistec";
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-blue-900 selection:text-white">
      {/* Main responsive navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main content body */}
      <main className="flex-1">
        {currentPage === "inicio" && <InicioView onNavigate={handleNavigate} />}
        {currentPage === "nosotros" && <NosotrosView onNavigate={handleNavigate} />}
        {currentPage === "servicios" && <ServiciosView onNavigate={handleNavigate} />}
        {currentPage === "bolsa-de-trabajo" && <BolsaTrabajoView onNavigate={handleNavigate} />}
        {currentPage === "contacto" && <ContactoView onNavigate={handleNavigate} />}
        {currentPage === "aviso-de-privacidad" && <AvisoPrivacidadView onNavigate={handleNavigate} />}
      </main>

      {/* Corporate footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
