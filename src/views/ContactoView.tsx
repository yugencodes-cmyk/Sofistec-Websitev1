/**
 * @file ContactoView.tsx
 * Official contact page for Sofistec.
 * 
 * MANDATED DETAILS (No invented contact information):
 * - Email: contacto@sofistec.com (working mailto link + "Enviar correo" action)
 * - Phone: +52 55 75877057 (working tel link + "Llamar" action)
 * - Address: Av. Col. del Valle 403, Int. 101, Col. del Valle Centro, Benito Juárez, CDMX
 * - Hours: 8:00 a 18:00
 * - Facebook: https://www.facebook.com/sofistecsc (safe new tab)
 * 
 * PRIVACY SPECIFICATION:
 * - Does not create a contact form that collects personal information.
 * - Developer note explaining that if a form is added in the future, it must require
 *   explicit privacy notice acceptance.
 */

import React, { useState } from "react";
import { PageId } from "../types";
import { SOFISTEC_CONTACT } from "../config";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  Copy,
  Check,
  ShieldCheck,
  Info,
  Navigation,
} from "lucide-react";

interface ContactoViewProps {
  onNavigate: (page: PageId) => void;
}

export const ContactoView: React.FC<ContactoViewProps> = ({ onNavigate }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <div className="space-y-14 py-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-8">
          <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
            Canales Oficiales
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contacto Directo
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl">
            Comuníquese directamente con nuestros especialistas a través de nuestros canales
            oficiales de atención en la Ciudad de México.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Action Contact Cards */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-xl font-bold text-slate-900">
              Vías de Comunicación Inmediata
            </h2>

            {/* Phone Card with "Llamar" action */}
            <div className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-blue-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-900 rounded-xl shrink-0">
                  <Phone className="w-6 h-6 text-blue-800" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Línea Telefónica Directa
                  </div>
                  <div className="text-xl font-bold text-slate-900 mt-1">
                    {SOFISTEC_CONTACT.phoneDisplay}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Horario de atención: {SOFISTEC_CONTACT.hours} hrs (Lunes a Viernes)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`tel:${SOFISTEC_CONTACT.phoneRaw}`}
                  className="flex-1 sm:flex-none text-center bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs px-5 py-3 rounded-lg shadow-sm transition-colors cursor-pointer"
                  title="Llamar a Sofistec"
                >
                  Llamar
                </a>
                <button
                  onClick={() => handleCopy(SOFISTEC_CONTACT.phoneRaw, "phone")}
                  className="p-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
                  title="Copiar número de teléfono"
                  aria-label="Copiar número de teléfono"
                >
                  {copiedType === "phone" ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Email Card with "Enviar correo" action */}
            <div className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-blue-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-900 rounded-xl shrink-0">
                  <Mail className="w-6 h-6 text-blue-800" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Correo Electrónico
                  </div>
                  <div className="text-xl font-bold text-slate-900 mt-1 break-all">
                    {SOFISTEC_CONTACT.email}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Recepción de solicitudes y consultas formales
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`mailto:${SOFISTEC_CONTACT.email}`}
                  className="flex-1 sm:flex-none text-center bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs px-5 py-3 rounded-lg shadow-sm transition-colors cursor-pointer"
                  title="Enviar correo electrónico a Sofistec"
                >
                  Enviar correo
                </a>
                <button
                  onClick={() => handleCopy(SOFISTEC_CONTACT.email, "email")}
                  className="p-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
                  title="Copiar dirección de correo"
                  aria-label="Copiar dirección de correo"
                >
                  {copiedType === "email" ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Facebook Social Card */}
            <div className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-blue-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-50 text-indigo-900 rounded-xl shrink-0">
                  <ExternalLink className="w-6 h-6 text-indigo-700" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Red Social Oficial
                  </div>
                  <div className="text-lg font-bold text-slate-900 mt-1">
                    Facebook institucional
                  </div>
                  <p className="text-xs text-slate-500 mt-1 font-mono break-all">
                    {SOFISTEC_CONTACT.facebookUrl}
                  </p>
                </div>
              </div>

              <a
                href={SOFISTEC_CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs px-5 py-3 rounded-lg shadow-sm transition-colors inline-flex items-center justify-center gap-2"
                title="Abrir página oficial de Facebook en nueva pestaña"
              >
                <span>Visitar Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mandatory Architecture & Privacy Architecture Note */}
            <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-blue-700" />
                <span>Política de contacto sin recopilación indebida de datos</span>
              </div>
              <p>
                En estricto cumplimiento con las directrices de este prototipo, este sitio <strong>no contiene formularios de captura de datos personales</strong>. El contacto se realiza de forma directa por vía telefónica o correo electrónico. Si en fases futuras se añade un formulario web, éste deberá incorporar de forma obligatoria una casilla de aceptación expresa de aviso de privacidad previo al envío.
              </p>
            </div>
          </div>

          {/* Right Column: Physical Location & Hours Card */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-xl font-bold text-slate-900">
              Ubicación y Horarios
            </h2>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
              {/* Address detail */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-900 rounded-xl shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Dirección Oficial
                  </h3>
                  <p className="text-base font-bold text-slate-900 mt-1 leading-snug">
                    {SOFISTEC_CONTACT.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Alcaldía Benito Juárez, Ciudad de México
                  </p>
                </div>
              </div>

              {/* Hours detail */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="p-3 bg-blue-50 text-blue-900 rounded-xl shrink-0 mt-0.5">
                  <Clock className="w-6 h-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Horario de Atención
                  </h3>
                  <p className="text-base font-bold text-slate-900 mt-1">
                    {SOFISTEC_CONTACT.hours}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {SOFISTEC_CONTACT.scheduleDays}
                  </p>
                </div>
              </div>

              {/* Static visual map representation for Col. del Valle */}
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 p-4">
                <div className="flex items-center justify-between text-xs text-slate-700 font-semibold mb-2">
                  <span className="flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-blue-700" />
                    <span>Croquis de Referencia CDMX</span>
                  </span>
                  <span className="text-slate-500">Col. del Valle</span>
                </div>
                <div className="bg-slate-200 rounded-lg h-36 flex flex-col items-center justify-center p-4 text-center border border-slate-300">
                  <MapPin className="w-8 h-8 text-blue-900 mb-1" />
                  <span className="text-xs font-bold text-slate-800">
                    Av. Colonia del Valle 403, Int. 101
                  </span>
                  <span className="text-xs text-slate-600">
                    Benito Juárez, CDMX
                  </span>
                </div>
              </div>

              {/* Link to Privacy Notice */}
              <div className="pt-2 text-center border-t border-slate-100">
                <button
                  onClick={() => onNavigate("aviso-de-privacidad")}
                  className="text-xs text-slate-500 hover:text-blue-900 underline transition-colors cursor-pointer"
                >
                  Consultar Aviso de Privacidad de la firma
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
