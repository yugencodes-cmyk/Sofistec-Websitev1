/**
 * @file InicioView.tsx
 * Homepage for Sofistec prototype:
 * - Split-screen hero section matching reference design (white panel left, large image carousel right)
 * - Functional carousel arrows and slides
 * - Compact, subtle "Ubicación Estratégica" section
 * - 3 service areas in exact mandated order
 * - Misión, Visión y Valores with 3 separate headings and Valores in a single paragraph
 * - Interactive FAQ section in Spanish
 * - Preserves existing functionality and structure
 */

import React, { useState } from "react";
import { PageId } from "../types";
import { SERVICES_DATA } from "../data/servicesData";
import { FAQ_DATA } from "../data/faqData";
import { ASSETS, SOFISTEC_CONTACT } from "../config";
import {
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Cpu,
  Building,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  PhoneCall,
  Clock,
  MapPin,
  ExternalLink,
  Building2,
} from "lucide-react";

interface InicioViewProps {
  onNavigate: (page: PageId) => void;
}

export const InicioView: React.FC<InicioViewProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<string | null>("faq-1");
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const slides = ASSETS.heroSlides || [
    {
      image: ASSETS.heroBanner,
      alt: "Distrito financiero y corporativo en Ciudad de México",
      caption: "Soluciones estratégicas en la Ciudad de México",
      subcaption: "Asesoría contable, fiscal y de sistemas",
    },
  ];

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[currentSlideIndex];

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="space-y-16 lg:space-y-20">
      {/* =====================================================================
          1. HERO SECTION (Split-screen composition matching reference image)
          - White text panel on the left
          - Large, professional image panel on the right with functional carousel
          - Primary CTA "Contáctanos" + Secondary "Servicios"
         ===================================================================== */}
      <section className="bg-white border-b border-slate-200 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[640px]">
          {/* Left Panel: White text panel (5 cols on large desktop, clean generous whitespace) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 lg:py-20 bg-white">
            <div className="max-w-xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Asesoría Fiscal, Soluciones Tecnológicas y Administración Inmobiliaria
              </h1>

              {/* Elegant subtle brand accent bar */}
              <div className="w-16 h-1 bg-blue-900 mt-4 mb-6 rounded-full" />

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                En Sofistec acompañamos a personas físicas, empresas y comunidades inmobiliarias
                con servicios integrales diseñados para garantizar orden normativo, estabilidad operativa
                y transparencia administrativa en la Ciudad de México.
              </p>

              {/* CTAs: Solid button "Contáctanos" + Clean inline "Servicios" link with icon */}
              <div className="flex flex-wrap items-center gap-6">
                <button
                  onClick={() => onNavigate("contacto")}
                  className="bg-[#0e2a47] hover:bg-[#163a5f] active:bg-[#091d33] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-md shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-600"
                >
                  <span>Contáctanos</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate("servicios")}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 hover:text-blue-900 transition-colors underline underline-offset-8 decoration-2 decoration-slate-900 hover:decoration-blue-900 cursor-pointer"
                >
                  <Building2 className="w-4 h-4 text-blue-900" />
                  <span>Servicios</span>
                </button>
              </div>

              {/* Quiet division indicator summary */}
              <div className="pt-8 mt-10 border-t border-slate-100 grid grid-cols-3 gap-4 text-xs text-slate-500">
                <div>
                  <div className="text-blue-900 font-semibold mb-0.5">1. Fiscal</div>
                  <div className="text-[11px] text-slate-500">Nómina y SAT</div>
                </div>
                <div>
                  <div className="text-blue-900 font-semibold mb-0.5">2. Tecnología</div>
                  <div className="text-[11px] text-slate-500">Servidores e IT</div>
                </div>
                <div>
                  <div className="text-blue-900 font-semibold mb-0.5">3. Inmobiliaria</div>
                  <div className="text-[11px] text-slate-500">Cobranza y gestión</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Large professional image panel with functional carousel arrows */}
          <div className="lg:col-span-6 xl:col-span-7 relative h-96 sm:h-[480px] lg:h-full min-h-[440px] bg-slate-900 overflow-hidden">
            {/* Background current slide image */}
            <img
              src={currentSlide.image}
              alt={currentSlide.alt}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
            />
            {/* Contrast gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-slate-950/20" />

            {/* Slide interactive overlay with text and functional carousel controls */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 text-white">
              {/* Top counter */}
              <div className="flex justify-end">
                <span className="text-xs font-mono bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-slate-200 border border-white/10">
                  {currentSlideIndex + 1} / {slides.length}
                </span>
              </div>

              {/* Functional carousel arrows & center caption */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  {/* Functional Previous Arrow Button */}
                  <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full bg-white hover:bg-slate-100 text-slate-900 flex items-center justify-center shadow-xl transition-transform active:scale-90 cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-white"
                    aria-label="Diapositiva anterior"
                    title="Anterior"
                  >
                    <ArrowLeft className="w-5 h-5 text-slate-900" />
                  </button>

                  {/* Centered slide headline and link */}
                  <div className="text-center px-4 flex-1">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-md">
                      {currentSlide.caption}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 mt-1.5 max-w-md mx-auto">
                      {currentSlide.subcaption}
                    </p>
                    <div className="mt-3">
                      <button
                        onClick={() => onNavigate("contacto")}
                        className="inline-block text-xs font-bold uppercase tracking-wider text-white underline underline-offset-4 decoration-white/80 hover:decoration-white transition-opacity cursor-pointer"
                      >
                        Solicitar asesoría
                      </button>
                    </div>
                  </div>

                  {/* Functional Next Arrow Button */}
                  <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full bg-white hover:bg-slate-100 text-slate-900 flex items-center justify-center shadow-xl transition-transform active:scale-90 cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-white"
                    aria-label="Siguiente diapositiva"
                    title="Siguiente"
                  >
                    <ArrowRight className="w-5 h-5 text-slate-900" />
                  </button>
                </div>
              </div>

              {/* Bottom slide dots */}
              <div className="flex justify-center gap-2 pt-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      idx === currentSlideIndex
                        ? "w-8 bg-white"
                        : "w-2.5 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Ir a diapositiva ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. UBICACIÓN ESTRATÉGICA (Smaller and visually less prominent)
          Consistent styling, preserves existing facts without new claims.
         ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-4 sm:p-5 text-slate-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 text-blue-900 rounded-lg shrink-0">
                <MapPin className="w-4 h-4 text-blue-800" />
              </div>
              <div>
                <span className="font-semibold text-slate-900 uppercase tracking-wider text-[11px] block">
                  Ubicación Estratégica en Benito Juárez
                </span>
                <span className="text-slate-600">
                  Atención personalizada en Col. del Valle Centro: {SOFISTEC_CONTACT.address}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-slate-500 pl-11 md:pl-0 border-t md:border-t-0 pt-2 md:pt-0 border-slate-200">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-700" />
                <span>Lunes a Viernes de 8:00 a 18:00 hrs</span>
              </span>
              <span className="hidden lg:inline text-slate-300">·</span>
              <span className="text-slate-600">
                Asesoría técnica presencial y remota
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. THREE SERVICE AREAS OVERVIEW (Mandated exact order)
          1. Asesoría Fiscal
          2. Soluciones Tecnológicas
          3. Administración Inmobiliaria
         ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
            Portafolio Profesional
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Nuestras Tres Áreas de Especialización
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Estructuramos nuestras soluciones en tres divisiones operativas con personal calificado
            y metodologías probadas para su tranquilidad.
          </p>
        </div>

        <div className="space-y-12">
          {SERVICES_DATA.map((area, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={area.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Visual column */}
                  <div className={`lg:col-span-5 relative ${isReversed ? "lg:order-2" : ""}`}>
                    {/* 
                      TODO: Stock image placeholder for service area.
                      Replace with official Sofistec service photography.
                    */}
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-64 lg:h-full object-cover min-h-[260px]"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-md">
                      Área {area.order}
                    </div>
                  </div>

                  {/* Content column */}
                  <div
                    className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
                      isReversed ? "lg:order-1" : ""
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-blue-900 uppercase tracking-wider mb-1">
                        {area.order === 1 && <ShieldCheck className="w-4 h-4 text-blue-700" />}
                        {area.order === 2 && <Cpu className="w-4 h-4 text-blue-700" />}
                        {area.order === 3 && <Building className="w-4 h-4 text-blue-700" />}
                        <span>División {area.order}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {area.title}
                      </h3>
                      <p className="text-sm font-medium text-blue-800 mb-3">
                        {area.tagline}
                      </p>
                      <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                        {area.description}
                      </p>

                      {/* Service sub-items breakdown */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {area.services.map((subItem) => (
                          <div
                            key={subItem.title}
                            className="bg-slate-50 p-3.5 rounded-lg border border-slate-100 flex items-start gap-2.5"
                          >
                            <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                            <div>
                              <h4 className="text-xs font-bold text-slate-900">
                                {subItem.title}
                              </h4>
                              <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                                {subItem.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-500">
                        {area.services.length} servicios especializados
                      </span>
                      <button
                        onClick={() => onNavigate("servicios")}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-900 hover:text-blue-700 transition-colors cursor-pointer"
                      >
                        <span>Ver detalle completo</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================================
          4. MISIÓN, VISIÓN Y VALORES
          - Three separate headings: “Misión”, “Visión”, and “Valores”
          - Do not use “Misión, Visión y Valores de Sofistec” as a single heading
          - Display all three values together as one paragraph (no separate cards/bullets)
         ===================================================================== */}
      <section className="bg-slate-100 border-y border-slate-200 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Misión Card */}
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

            {/* Visión Card */}
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

            {/* Valores Card (All three values together as one paragraph) */}
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
        </div>
      </section>

      {/* =====================================================================
          5. PREGUNTAS FRECUENTES (FAQ SECTION)
         ===================================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Resolución de Dudas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Respuestas a las consultas más habituales sobre nuestros servicios en la Ciudad de México.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((item) => {
            const isOpen = openFaq === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors focus-visible:outline-2 focus-visible:outline-blue-600"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 text-sm sm:text-base">
                    {item.question}
                  </span>
                  <div
                    className={`p-1 rounded-md text-slate-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-900 bg-blue-50" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{item.answer}</p>
                    <div className="mt-3 text-xs text-blue-900 font-medium">
                      Categoría: {item.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-blue-950">
              ¿Tiene una consulta específica para su empresa o condominio?
            </h4>
            <p className="text-xs text-blue-800 mt-0.5">
              Nuestro equipo le atenderá directamente vía telefónica o correo electrónico.
            </p>
          </div>
          <button
            onClick={() => onNavigate("contacto")}
            className="bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs px-5 py-2.5 rounded-lg whitespace-nowrap shadow-sm cursor-pointer"
          >
            Contactar a Sofistec
          </button>
        </div>
      </section>

      {/* =====================================================================
          6. QUICK CONTACT CARD / BANNER
         ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Atención en Ciudad de México
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                ¿Listo para coordinar una asesoría profesional?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
                Contáctenos hoy mismo para conocer cómo podemos apoyar a su organización en materia
                fiscal, tecnología o administración de inmuebles.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <PhoneCall className="w-4 h-4 text-blue-400" />
                  <span>{SOFISTEC_CONTACT.phoneDisplay}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>{SOFISTEC_CONTACT.hours} hrs</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Col. del Valle Centro, CDMX</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                onClick={() => onNavigate("contacto")}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg text-center shadow cursor-pointer transition-all"
              >
                Ir a Contacto
              </button>
              <a
                href={SOFISTEC_CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium py-3 px-6 rounded-lg text-center text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                <span>Página de Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
