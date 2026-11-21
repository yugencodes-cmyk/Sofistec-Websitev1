/**
 * @file Footer.tsx
 * Professional corporate footer for Sofistec with complete contact information,
 * direct external Facebook link, navigation links, and Privacy Notice access.
 */

import React from "react";
import { ASSETS, SOFISTEC_CONTACT } from "../config";
import { PageId } from "../types";
import { MapPin, Phone, Mail, Clock, ExternalLink, ShieldAlert } from "lucide-react";

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="bg-white p-2.5 rounded-lg inline-block">
              <img
                src={ASSETS.logo}
                alt="Sofistec"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Firma mexicana especializada en asesoría fiscal, soporte tecnológico y administración inmobiliaria en la Ciudad de México.
            </p>
            <div className="pt-2">
              <a
                href={SOFISTEC_CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
                title="Visitar página oficial de Sofistec en Facebook (se abre en nueva pestaña)"
              >
                <span>Síguenos en Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-slate-100 uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick("inicio")}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("nosotros")}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Nosotros (Historia y Valores)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("servicios")}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Servicios Especializados
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("bolsa-de-trabajo")}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Bolsa de trabajo
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("contacto")}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Contacto
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("aviso-de-privacidad")}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Aviso de Privacidad
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="text-xs font-semibold text-slate-100 uppercase tracking-wider mb-4">
              Áreas de Servicio
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="font-medium text-slate-300">1. Asesoría Fiscal</li>
              <li className="pl-3 text-xs text-slate-400">· Nómina y Contabilidad Electrónica</li>
              <li className="pl-3 text-xs text-slate-400">· Cuotas IMSS / INFONAVIT y Diagnóstico</li>
              
              <li className="font-medium text-slate-300 pt-2">2. Soluciones Tecnológicas</li>
              <li className="pl-3 text-xs text-slate-400">· Soporte técnico administrativo</li>
              <li className="pl-3 text-xs text-slate-400">· Mantenimiento de servidores</li>

              <li className="font-medium text-slate-300 pt-2">3. Administración Inmobiliaria</li>
              <li className="pl-3 text-xs text-slate-400">· Cobranza, reportes y mediación</li>
              <li className="pl-3 text-xs text-slate-400">· Regularización y corretaje</li>
            </ul>
          </div>

          {/* Column 4: Contact Details (Strict to user facts) */}
          <div>
            <h3 className="text-xs font-semibold text-slate-100 uppercase tracking-wider mb-4">
              Contacto Directo
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{SOFISTEC_CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`tel:${SOFISTEC_CONTACT.phoneRaw}`}
                  className="hover:text-white underline underline-offset-2 transition-colors"
                >
                  {SOFISTEC_CONTACT.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${SOFISTEC_CONTACT.email}`}
                  className="hover:text-white underline underline-offset-2 transition-colors"
                >
                  {SOFISTEC_CONTACT.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Horario: {SOFISTEC_CONTACT.hours} hrs</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <button
                onClick={() => handleNavClick("contacto")}
                className="w-full text-center bg-blue-800 hover:bg-blue-700 text-white font-medium text-xs py-2.5 px-4 rounded-lg transition-colors cursor-pointer"
              >
                Solicitar Contacto
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar with legal & developer disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>© {currentYear} Sofistec S.C. Todos los derechos reservados. Ciudad de México.</p>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNavClick("aviso-de-privacidad")}
              className="hover:text-slate-300 underline cursor-pointer"
            >
              Aviso de Privacidad (Borrador)
            </button>
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
              <span>Prototipo Web Oficial</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
