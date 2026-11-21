/**
 * @file BolsaTrabajoView.tsx
 * "Bolsa de trabajo" landing page for Sofistec.
 * 
 * SPECIFICATION COMPLIANCE:
 * - Professional job-board landing page with short introduction.
 * - Button "Trabaja con Nosotros" referencing JOB_BOARD_URL.
 * - Application form and CV upload are hosted on external website and NOT recreated here.
 * - Uses easy-to-edit configuration value JOB_BOARD_URL from src/config.ts.
 * - Since destination URL is unknown, button visibly indicates that destination URL needs to be configured.
 * - Does not send users to a fabricated or fake URL.
 */

import React, { useState } from "react";
import { PageId } from "../types";
import { JOB_BOARD_URL, isJobBoardConfigured, ASSETS } from "../config";
import {
  Briefcase,
  AlertTriangle,
  ExternalLink,
  Code,
  ShieldAlert,
  Users,
  Compass,
  CheckCircle2,
  Info,
} from "lucide-react";

interface BolsaTrabajoViewProps {
  onNavigate: (page: PageId) => void;
}

export const BolsaTrabajoView: React.FC<BolsaTrabajoViewProps> = ({ onNavigate }) => {
  const [showConfigNotice, setShowConfigNotice] = useState(false);

  const configured = isJobBoardConfigured();

  const handleApplyClick = () => {
    if (configured) {
      // Safe external redirect when configured
      window.open(JOB_BOARD_URL, "_blank", "noopener,noreferrer");
    } else {
      // Show explicit configuration modal when URL is not yet configured
      setShowConfigNotice(true);
    }
  };

  return (
    <div className="space-y-16 py-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-8">
          <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
            Talento y Oportunidades
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bolsa de Trabajo
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl">
            Súmate a un equipo multidisciplinario comprometido con la excelencia técnica,
            la ética profesional y el servicio de alto nivel en la Ciudad de México.
          </p>
        </div>
      </div>

      {/* Main Landing Content Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                Desarrolla tu carrera profesional en Sofistec
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                En Sofistec valoramos el talento, el rigor analítico y el compromiso con nuestros clientes.
                Nuestras áreas operativas integran profesionales en contabilidad, fiscal, soporte en tecnologías
                de la información y administración inmobiliaria.
              </p>
            </div>

            {/* Why work with us highlights */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    Ambiente profesional y colaborativo
                  </h4>
                  <p className="text-xs text-slate-500">
                    Trabajamos con apego a las normas profesionales y un enfoque centrado en la persona.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    Proyectos multidisciplinarios
                  </h4>
                  <p className="text-xs text-slate-500">
                    Interacción continua entre áreas contables, infraestructura informática y gestión condominal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    Estabilidad en la Ciudad de México
                  </h4>
                  <p className="text-xs text-slate-500">
                    Oficinas centrales en la Colonia del Valle, Alcaldía Benito Juárez.
                  </p>
                </div>
              </div>
            </div>

            {/* Prominent CTA Button and Configuration Warning Banner */}
            <div className="pt-4 space-y-4">
              {/* Visible Developer Configuration Notice */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900 space-y-1">
                  <p className="font-bold">
                    Aviso de configuración: Proceso de postulación externo
                  </p>
                  <p className="text-amber-800">
                    La recepción de CVs y formulario de vacantes se aloja en una plataforma externa.
                    El enlace está parametrizado en la constante <code className="bg-amber-100/80 px-1.5 py-0.5 rounded font-mono text-amber-950 font-semibold">JOB_BOARD_URL</code> dentro de <code className="bg-amber-100/80 px-1.5 py-0.5 rounded font-mono text-amber-950 font-semibold">src/config.ts</code>.
                  </p>
                </div>
              </div>

              {/* Call to action button with clear visual indicator */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={handleApplyClick}
                  className={`px-6 py-3.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2.5 transition-all shadow-sm cursor-pointer ${
                    configured
                      ? "bg-blue-900 hover:bg-blue-800 text-white shadow-md"
                      : "bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-400/40"
                  }`}
                  aria-label="Trabaja con Nosotros en Sofistec"
                >
                  <Briefcase className="w-4 h-4 text-amber-400" />
                  <span>
                    {configured
                      ? "Trabaja con Nosotros"
                      : "Trabaja con Nosotros (URL pendiente de configurar)"}
                  </span>
                  {configured ? (
                    <ExternalLink className="w-4 h-4" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                  )}
                </button>

                <button
                  onClick={() => setShowConfigNotice(true)}
                  className="px-4 py-3.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Code className="w-4 h-4 text-slate-500" />
                  <span>Ver instrucción de configuración</span>
                </button>
              </div>

              <p className="text-xs text-slate-500">
                * No recopilamos currículums ni datos personales en este sitio web. La plataforma externa de postulación gestiona sus propios términos y avisos de privacidad.
              </p>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              {/* 
                TODO: Stock photo placeholder for team collaboration.
                Replace with Sofistec workspace photo in future release.
              */}
              <img
                src={ASSETS.careersBanner}
                alt="Equipo colaborando en Sofistec"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="p-6 bg-white border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-900 uppercase tracking-wider mb-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>Perfiles Habituales</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Contadores públicos, especialistas fiscales, ingenieros en sistemas, técnicos en soporte y administradores condominales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration modal / drawer when clicked */}
      {showConfigNotice && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
              <AlertTriangle className="w-4 h-4" />
              <span>Configuración de Enlace Externo</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Configuración de JOB_BOARD_URL
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Por especificación del proyecto, no se ha inventado una URL ficticia ni se capturan currículums en este sitio. Para habilitar el redireccionamiento real al sistema de postulaciones:
            </p>

            <div className="bg-slate-900 text-slate-200 p-4 rounded-xl text-xs font-mono space-y-2 mb-4 overflow-x-auto">
              <div className="text-slate-400">// Archivo: src/config.ts</div>
              <div>
                <span className="text-blue-400">export const</span>{" "}
                <span className="text-amber-300">JOB_BOARD_URL</span>:{" "}
                <span className="text-emerald-400">string</span> ={" "}
                <span className="text-emerald-300">&quot;https://su-portal-de-empleo.com&quot;</span>;
              </div>
            </div>

            <p className="text-xs text-slate-500 mb-6">
              Una vez que asigne la URL legítima en dicho archivo, el botón abrirá automáticamente la plataforma en una nueva pestaña segura (<code className="font-mono">target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;</code>).
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfigNotice(false)}
                className="bg-blue-900 hover:bg-blue-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg cursor-pointer transition-colors"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
