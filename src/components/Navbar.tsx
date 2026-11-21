/**
 * @file Navbar.tsx
 * Responsive navigation bar with Sofistec brand identity, clean typography,
 * mobile drawer, and primary 'Contáctanos' call-to-action.
 */

import React, { useState } from "react";
import { ASSETS, SOFISTEC_CONTACT } from "../config";
import { PageId } from "../types";
import { Menu, X, Phone, Mail, Clock, MapPin } from "lucide-react";

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: "inicio", label: "Inicio" },
    { id: "nosotros", label: "Nosotros" },
    { id: "servicios", label: "Servicios" },
    { id: "bolsa-de-trabajo", label: "Bolsa de trabajo" },
    { id: "contacto", label: "Contacto" },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-shadow duration-200">
      {/* Top micro-bar with office schedule and contact quick links */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Col. del Valle Centro, Benito Juárez, CDMX</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>Horario: {SOFISTEC_CONTACT.hours} hrs</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${SOFISTEC_CONTACT.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              title="Llamar a oficinas de Sofistec"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{SOFISTEC_CONTACT.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${SOFISTEC_CONTACT.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              title="Enviar correo a Sofistec"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>{SOFISTEC_CONTACT.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo brand */}
          <button
            onClick={() => handleNavClick("inicio")}
            className="flex items-center gap-3 text-left focus-visible:outline-2 focus-visible:outline-blue-600 rounded-lg p-1"
            aria-label="Sofistec - Ir al inicio"
          >
            <img
              src={ASSETS.logo}
              alt="Sofistec Logo"
              className="h-10 sm:h-12 w-auto object-contain"
              loading="eager"
            />
            <div className="hidden xl:block pl-3 border-l border-slate-200">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Firma Profesional
              </span>
              <span className="block text-xs text-slate-600">
                Fiscal · Tecnología · Inmobiliaria
              </span>
            </div>
          </button>

          {/* Desktop navigation links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 text-sm font-medium transition-colors relative cursor-pointer ${
                    isActive
                      ? "text-blue-900 font-semibold"
                      : "text-slate-600 hover:text-blue-900"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-blue-700" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Primary CTA button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick("contacto")}
              className="bg-blue-900 hover:bg-blue-800 active:bg-blue-950 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all focus-visible:outline-2 focus-visible:outline-blue-600 cursor-pointer"
            >
              Contáctanos
            </button>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-blue-600"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Cerrar menú principal" : "Abrir menú principal"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-900 font-semibold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={() => handleNavClick("contacto")}
                className="w-full text-center bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-4 rounded-lg shadow-sm"
              >
                Contáctanos
              </button>
              <div className="text-xs text-slate-600 px-2 space-y-1 pt-2">
                <p className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <a href={`tel:${SOFISTEC_CONTACT.phoneRaw}`} className="underline">
                    {SOFISTEC_CONTACT.phoneDisplay}
                  </a>
                </p>
                <p className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <a href={`mailto:${SOFISTEC_CONTACT.email}`} className="underline">
                    {SOFISTEC_CONTACT.email}
                  </a>
                </p>
                <p className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>{SOFISTEC_CONTACT.hours} hrs</span>
                </p>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
