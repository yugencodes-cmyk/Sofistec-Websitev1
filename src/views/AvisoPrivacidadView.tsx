/**
 * @file AvisoPrivacidadView.tsx
 * Aviso de Privacidad for Sofistec.
 * 
 * SPECIFICATION COMPLIANCE:
 * - Uses clearly labeled Lorem ipsum placeholder text.
 * - Prominently declares that this text MUST be replaced with approved legal notice before launch.
 * - Explicitly does not present placeholder text as final legal text.
 * - Clarifies data-collection policy (no PII captured in this prototype; future forms require mandatory checkbox).
 */

import React from "react";
import { PageId } from "../types";
import { ShieldAlert, AlertTriangle, ArrowLeft, Lock, FileText } from "lucide-react";

interface AvisoPrivacidadViewProps {
  onNavigate: (page: PageId) => void;
}

export const AvisoPrivacidadView: React.FC<AvisoPrivacidadViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Back button */}
      <div>
        <button
          onClick={() => onNavigate("inicio")}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-900 hover:text-blue-700 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Inicio</span>
        </button>
      </div>

      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
          <ShieldAlert className="w-4 h-4" />
          <span>Borrador en Proceso de Aprobación Legal</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Aviso de Privacidad (Marcador de Posición)
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Documento preliminar sujeto a revisión jurídica conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
        </p>
      </div>

      {/* Mandatory Warning Banner */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl space-y-2">
        <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <span>ADVERTENCIA LEGAL: TEXTO PROVISIONAL (LOREM IPSUM)</span>
        </div>
        <p className="text-xs text-amber-800 leading-relaxed">
          El contenido que se presenta a continuación corresponde a texto de relleno (Lorem ipsum) y 
          <strong> NO constituye el texto legal definitivo</strong>. Este apartado debe ser sustituido
          íntegramente por el Aviso de Privacidad redactado y aprobado por el área jurídica de Sofistec
          antes del despliegue público y comercial del sitio web.
        </p>
        <p className="text-xs text-amber-800 leading-relaxed font-semibold">
          * Nota técnica sobre formularios: Este prototipo no implementa formularios de captura de datos personales. En caso de añadir formularios de contacto o registro en versiones posteriores, se deberá incorporar de manera mandatoria una casilla de verificación (&quot;checkbox&quot;) no preseleccionada para la aceptación expresa del presente aviso antes de permitir el envío.
        </p>
      </div>

      {/* Labeled Placeholder Legal Document */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 text-sm text-slate-600 leading-relaxed">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 text-xs text-slate-400">
          <span>REFERENCIA DE PLANTILLA: LFPDPPP-V0.1</span>
          <span>ESTADO: BORRADOR NO VINCULANTE</span>
        </div>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Lock className="w-4 h-4 text-blue-900" />
            <span>1. Identidad y Domicilio del Responsable</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Domicilio convencional: Av. Col. del Valle 403, Int. 101, Col. del Valle Centro, Benito Juárez, CDMX.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-900" />
            <span>2. Finalidades del Tratamiento de Datos (Placeholder)</span>
          </h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-slate-500">
            <li>Finalidad A: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Finalidad B: Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.</li>
            <li>Finalidad C: In condimentum facilisis porta sed vestibulum ultrices.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-blue-900" />
            <span>3. Mecanismos para Ejercicio de Derechos ARCO</span>
          </h2>
          <p>
            Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">
            4. Modificaciones al Aviso de Privacidad
          </h2>
          <p>
            Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat.
          </p>
        </section>

        <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span>Sofistec S.C. · Ciudad de México</span>
          <button
            onClick={() => onNavigate("contacto")}
            className="text-blue-900 hover:underline font-semibold cursor-pointer"
          >
            Ir a Contacto Directo
          </button>
        </div>
      </div>
    </div>
  );
};
