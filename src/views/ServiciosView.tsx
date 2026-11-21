/**
 * @file ServiciosView.tsx
 * Services catalog for Sofistec.
 * Mandated order and items:
 * 1. Asesoría Fiscal
 *    - Cálculo de nómina
 *    - Contabilidad electrónica
 *    - Diagnóstico y asesoría fiscal
 *    - Determinación de cuotas obrero-patronales
 *    - Consultoría profesional para resolución de problemas fiscales
 * 2. Soluciones Tecnológicas
 *    - Soporte técnico administrativo
 *    - Mantenimiento de servidores
 * 3. Administración Inmobiliaria
 *    - Cobranza y seguimiento
 *    - Reportes de administración
 *    - Asesoría jurídico-inmobiliaria
 *    - Regularización y corretaje
 * 
 * Complies strictly with anti-slop rules, no pricing, no invented guarantees.
 */

import React, { useState } from "react";
import { PageId } from "../types";
import { SERVICES_DATA } from "../data/servicesData";
import {
  ShieldCheck,
  Cpu,
  Building,
  CheckCircle2,
  ArrowRight,
  FileSpreadsheet,
  Server,
  KeyRound,
  Calculator,
  Laptop,
  Users,
  Building2,
  Scale,
  FileCheck,
  AlertCircle,
} from "lucide-react";

interface ServiciosViewProps {
  onNavigate: (page: PageId) => void;
}

export const ServiciosView: React.FC<ServiciosViewProps> = ({ onNavigate }) => {
  const [selectedAreaId, setSelectedAreaId] = useState<string>("all");

  const filteredAreas =
    selectedAreaId === "all"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((a) => a.id === selectedAreaId);

  // Icon mapping helper for visual clarity
  const getSubServiceIcon = (title: string) => {
    switch (title) {
      case "Cálculo de nómina":
        return <Calculator className="w-5 h-5 text-blue-700 shrink-0" />;
      case "Contabilidad electrónica":
        return <FileSpreadsheet className="w-5 h-5 text-blue-700 shrink-0" />;
      case "Diagnóstico y asesoría fiscal":
        return <FileCheck className="w-5 h-5 text-blue-700 shrink-0" />;
      case "Determinación de cuotas obrero-patronales":
        return <Users className="w-5 h-5 text-blue-700 shrink-0" />;
      case "Consultoría profesional para resolución de problemas fiscales":
        return <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0" />;
      case "Soporte técnico administrativo":
        return <Laptop className="w-5 h-5 text-blue-700 shrink-0" />;
      case "Mantenimiento de servidores":
        return <Server className="w-5 h-5 text-blue-700 shrink-0" />;
      case "Cobranza y seguimiento":
        return <Calculator className="w-5 h-5 text-blue-700 shrink-0" />;
      case "Reportes de administración":
        return <FileSpreadsheet className="w-5 h-5 text-blue-700 shrink-0" />;
      case "Asesoría jurídico-inmobiliaria":
        return <Scale className="w-5 h-5 text-blue-700 shrink-0" />;
      case "Regularización y corretaje":
        return <KeyRound className="w-5 h-5 text-blue-700 shrink-0" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0" />;
    }
  };

  return (
    <div className="space-y-14 lg:space-y-16 py-10">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-8">
          <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
            Catálogo de Servicios
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Servicios Profesionales Especializados
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl">
            Presentación estructurada de nuestras tres áreas de ejercicio profesional en la Ciudad de México:
            Asesoría Fiscal, Soluciones Tecnológicas y Administración Inmobiliaria.
          </p>

          {/* Interactive filter tabs (clean segmented control) */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedAreaId("all")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedAreaId === "all"
                  ? "bg-blue-900 text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              Todas las Áreas (3)
            </button>
            <button
              onClick={() => setSelectedAreaId("asesoria-fiscal")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedAreaId === "asesoria-fiscal"
                  ? "bg-blue-900 text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              1. Asesoría Fiscal
            </button>
            <button
              onClick={() => setSelectedAreaId("soluciones-tecnologicas")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedAreaId === "soluciones-tecnologicas"
                  ? "bg-blue-900 text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              2. Soluciones Tecnológicas
            </button>
            <button
              onClick={() => setSelectedAreaId("administracion-inmobiliaria")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedAreaId === "administracion-inmobiliaria"
                  ? "bg-blue-900 text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              3. Administración Inmobiliaria
            </button>
          </div>
        </div>
      </div>

      {/* Services List in Mandated Order */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredAreas.map((area) => (
          <section
            key={area.id}
            id={area.id}
            className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
          >
            {/* Area Header Banner */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                    {area.order === 1 && <ShieldCheck className="w-4 h-4" />}
                    {area.order === 2 && <Cpu className="w-4 h-4" />}
                    {area.order === 3 && <Building2 className="w-4 h-4" />}
                    <span>Área {area.order} del Portafolio</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {area.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {area.description}
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-3">
                  <button
                    onClick={() => onNavigate("contacto")}
                    className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Consultar esta área
                  </button>
                </div>
              </div>
            </div>

            {/* Sub-services Grid */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {area.services.map((subService, idx) => (
                  <div
                    key={subService.title}
                    className="bg-slate-50 rounded-xl p-6 border border-slate-200/80 hover:border-blue-200 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start gap-3.5 mb-3">
                        <div className="p-2 bg-blue-50 rounded-lg shrink-0">
                          {getSubServiceIcon(subService.title)}
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 font-mono">
                            {area.order}.{idx + 1}
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                            {subService.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {subService.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-slate-200/60">
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Alcances clave:
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          {subService.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <span className="text-blue-700 font-bold shrink-0">✓</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                      <span className="text-slate-500">Atención en CDMX</span>
                      <button
                        onClick={() => onNavigate("contacto")}
                        className="text-blue-900 hover:text-blue-700 font-semibold inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Solicitar asesoría</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Disclaimer / Normative note */}
            <div className="px-6 py-4 bg-slate-100 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-slate-400 shrink-0" />
              <span>
                Todos los servicios se prestan con estricto apego a las disposiciones vigentes en los códigos y reglamentos de la Ciudad de México y la Federación.
              </span>
            </div>
          </section>
        ))}
      </div>

      {/* Direct Contact Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-blue-900 text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">
              ¿Requiere una propuesta de servicios a la medida?
            </h3>
            <p className="text-sm text-blue-200 max-w-2xl leading-relaxed">
              Comuníquese con nosotros para revisar las necesidades particulares de su negocio o condominio. Sin compromisos ni formularios complejos.
            </p>
          </div>
          <button
            onClick={() => onNavigate("contacto")}
            className="bg-white hover:bg-slate-100 text-blue-950 font-bold text-sm px-6 py-3 rounded-lg shadow whitespace-nowrap cursor-pointer transition-colors"
          >
            Contáctanos Ahora
          </button>
        </div>
      </div>
    </div>
  );
};
