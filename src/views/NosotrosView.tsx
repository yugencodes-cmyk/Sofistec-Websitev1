/**
 * @file NosotrosView.tsx
 * "Nosotros" page for Sofistec:
 * - Clearly labeled Lorem ipsum company history placeholder (do not invent dates/staff/awards)
 * - Corporate video placeholder area with developer instructions (TODO, video SEO/indexing notice, muted/playsinline/poster guidelines)
 * - Misión, Visión y Valores institucional presentation
 */

import React, { useState } from "react";
import { PageId } from "../types";
import { ASSETS } from "../config";
import {
  FileText,
  Play,
  Video,
  Info,
  Target,
  Eye,
  Award,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

interface NosotrosViewProps {
  onNavigate: (page: PageId) => void;
}

export const NosotrosView: React.FC<NosotrosViewProps> = ({ onNavigate }) => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="space-y-16 lg:space-y-20 py-10">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-8">
          <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
            Quiénes Somos
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nuestra Firma
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl">
            Solidez profesional, rigor técnico y vocación de servicio para respaldar a organizaciones,
            inmuebles y profesionales en la Ciudad de México.
          </p>
        </div>
      </div>

      {/* =====================================================================
          1. CORPORATE VIDEO PLACEHOLDER AREA
          =====================================================================
          DEVELOPER NOTE / TODO:
          Reemplazar este contenedor con el video corporativo oficial en cuanto
          sea provisto por el cliente.
          Nota técnica de indexación: Completar VideoObject Schema.org (JSON-LD)
          y metadatos de accesibilidad cuando se cargue el archivo multimedia.
          En caso de requerir autoplay en producción:
          - Debe mantenerse silenciado (muted)
          - Atributo playsinline obligatorio para navegadores móviles
          - Poster image definida y texto alternativo para lectores de pantalla.
         ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
          <div className="p-6 sm:p-8 bg-slate-950/80 border-b border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                <Video className="w-4 h-4" />
                <span>Video Corporativo Institucional</span>
              </div>
              <h2 className="text-xl font-bold text-white mt-1">
                Sofistec en Acción
              </h2>
            </div>
            {/* Visual developer indicator */}
            <div className="bg-blue-950 border border-blue-800 text-blue-200 text-xs px-3 py-1.5 rounded-md flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-blue-400" />
              <span>Espacio reservado para video oficial</span>
            </div>
          </div>

          {/* Video player frame placeholder */}
          <div className="relative aspect-video w-full max-h-[520px] bg-slate-950 flex items-center justify-center overflow-hidden">
            {/* 
              TODO: Video poster image and player container.
              When official MP4/WebM or Vimeo/YouTube video is ready:
              <video
                controls
                poster={ASSETS.videoPoster}
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source src="/assets/video/sofistec-institucional.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            */}
            <img
              src={ASSETS.videoPoster}
              alt="Instalaciones de Sofistec - Marcador de posición de video corporativo"
              className="w-full h-full object-cover opacity-40 filter blur-[1px]"
            />

            {/* Overlay Play Button Triggering informational dialog */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-slate-950/40">
              <button
                onClick={() => setVideoModalOpen(true)}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-105 cursor-pointer focus-visible:outline-4 focus-visible:outline-white"
                aria-label="Reproducir video corporativo institucional (en producción)"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </button>
              <p className="mt-4 text-sm font-semibold text-white">
                Video Institucional Sofistec
              </p>
              <p className="text-xs text-slate-300 max-w-md mt-1">
                Haga clic para conocer las especificaciones técnicas del video en producción.
              </p>
            </div>
          </div>

          {/* Developer guidance note below the video area */}
          <div className="p-4 sm:p-6 bg-slate-900 border-t border-slate-800 text-xs text-slate-400">
            <p className="leading-relaxed">
              <strong className="text-slate-300">Nota técnica para desarrollo y SEO:</strong> El archivo multimedia definitivo será suministrado por Sofistec. Al integrarse, se recomienda implementar marcado estructurado Schema.org <code className="bg-slate-800 px-1 py-0.5 rounded text-blue-300">VideoObject</code> (con nombre, descripción, fecha de subida y thumbnail), además de subtítulos VTT accesibles para cumplimiento de accesibilidad digital.
            </p>
          </div>
        </div>
      </section>

      {/* Video Info Modal (Triggered by play button) */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
              <Video className="w-4 h-4" />
              <span>Estado del Contenido Multimedia</span>
            </div>
            <h3 id="video-modal-title" className="text-xl font-bold text-slate-900 mb-3">
              Video Corporativo en Producción
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              El video institucional oficial de Sofistec está en fase de edición y producción audiovisual. Conforme a las especificaciones del prototipo, no se incluye reproducción simulada ni archivos no aprobados.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs text-slate-600 space-y-2 mb-6">
              <p className="font-semibold text-slate-800">Parámetros técnicos de integración futura:</p>
              <p>• Formato: MP4 / WebM optimizado a 1080p a 24fps.</p>
              <p>• Compatibilidad: Atributos <code className="text-blue-900 font-mono">muted</code> y <code className="text-blue-900 font-mono">playsinline</code> si se despliega como fondo.</p>
              <p>• Accesibilidad: Pista de subtítulos <code className="text-blue-900 font-mono">&lt;track kind=&quot;subtitles&quot;&gt;</code> y transcripción en texto.</p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setVideoModalOpen(false)}
                className="bg-blue-900 hover:bg-blue-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg cursor-pointer transition-colors"
              >
                Entendido y Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          2. COMPANY HISTORY SECTION (Clearly Labeled Lorem Ipsum Placeholder)
          Mandate: Do not invent founding dates, staff details, awards, or claims.
         ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          {/* Prominent label that this is placeholder copy to be supplied later */}
          <div className="mb-6 p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">
                Texto provisional de historia corporativa (Marcador de posición / Lorem Ipsum)
              </p>
              <p className="mt-0.5 text-amber-800">
                Conforme a los lineamientos del proyecto, los datos históricos oficiales, antecedentes
                fundacionales y equipo directivo serán provistos directamente por Sofistec antes
                del lanzamiento. No se han inventado fechas, acreditaciones ni premios.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
                Trayectoria y Antecedentes
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Historia de la Organización
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                /* TEXTO DE REEMPLAZO PENDIENTE DE VALIDACIÓN POR SOFISTEC */
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4 text-sm text-slate-600 leading-relaxed font-serif lg:font-sans">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
                Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis
                sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
              </p>
              <p>
                Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.
                Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus
                a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. MISIÓN, VISIÓN Y VALORES
          Three separate headings: "Misión", "Visión", "Valores"
          Valores displayed all together in one paragraph
         ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Misión */}
          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                Misión
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sumar a los proyectos emprendedores nuestra pasión, así como integrar nuestro compromiso a empresas consolidadas, ayudándoles a alcanzar sus objetivos con la asesoría integral en negocios, contando con colaboradores en continua capacitación y haciendo uso de las tecnologías de la información más actualizadas en nuestra profesión.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                Visión
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Convertirnos en socios estratégicos de cada cliente por ser una firma que ofrece asesoría integral en negocios con base en nuestros valores, llegando a ser un referente entre otros empresarios y futuros colaboradores interesados en crear relaciones de valor.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                Valores
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Integridad: Estamos apegados al marco legal y nuestro código de ética. Compromiso: Construimos relaciones cercanas basadas en la confianza mutua. Pasión: Trabajamos con entrega y entusiasmo para brindar servicios de calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-blue-950">
              ¿Desea conocer cómo trabajamos con nuestros clientes?
            </h3>
            <p className="text-sm text-blue-800 mt-1 max-w-xl">
              Consulte nuestro catálogo de servicios especializados o agende una sesión de diagnóstico en nuestras oficinas de la Col. del Valle.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate("servicios")}
              className="bg-white hover:bg-slate-50 text-blue-900 border border-blue-200 font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm cursor-pointer"
            >
              Ver Servicios
            </button>
            <button
              onClick={() => onNavigate("contacto")}
              className="bg-blue-900 hover:bg-blue-800 text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm cursor-pointer"
            >
              Contáctanos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
