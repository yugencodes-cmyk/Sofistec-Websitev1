/**
 * @file config.ts
 * @description Central configuration for Sofistec prototype.
 * 
 * DEVELOPER REPLACEMENT INSTRUCTIONS:
 * - JOB_BOARD_URL: Replace with the official external recruitment portal URL when available.
 * - CONTACT INFO: Contact details provided for Mexico City office.
 */

// ============================================================================
// CONFIGURABLE EXTERNAL URLS
// ============================================================================

/**
 * URL for the external job application / CV upload portal.
 * Currently unassigned. Leave as empty string or placeholder until the official URL is ready.
 * 
 * TODO: Replace with the production job board URL (e.g. 'https://reclutamiento.sofistec.com')
 */
export const JOB_BOARD_URL: string = "";

// Helper to check if the job board destination is properly configured
export const isJobBoardConfigured = (): boolean => {
  return typeof JOB_BOARD_URL === "string" && JOB_BOARD_URL.trim().length > 0 && JOB_BOARD_URL.startsWith("http");
};

// ============================================================================
// OFFICIAL CONTACT INFORMATION (Do not invent facts)
// ============================================================================

export const SOFISTEC_CONTACT = {
  name: "Sofistec",
  legalTagline: "Asesoría Fiscal, Soluciones Tecnológicas y Administración Inmobiliaria",
  email: "contacto@sofistec.com",
  phoneDisplay: "+52 55 75877057",
  phoneRaw: "+525575877057",
  address: "Av. Col. del Valle 403, Int. 101, Col. del Valle Centro, Benito Juárez, CDMX",
  hours: "8:00 a 18:00",
  scheduleDays: "Lunes a Viernes de 8:00 a 18:00 hrs",
  facebookUrl: "https://www.facebook.com/sofistecsc",
  city: "Ciudad de México",
  postalZone: "Benito Juárez, CDMX",
} as const;

// ============================================================================
// ASSET PATHS (Easy-to-replace configuration)
// ============================================================================

export const ASSETS = {
  logo: "/assets/aistudio/sofistec_logo_home_2be57231.png",
  // Stock imagery placeholders (high quality, reliable CDN photos relevant to professional services)
  // TODO: Replace with proprietary photography of Sofistec facilities and team in future phase.
  heroBanner: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80", // Modern corporate building CDMX
  heroSlides: [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      alt: "Distrito financiero y corporativo en Ciudad de México",
      caption: "Soluciones estratégicas en la Ciudad de México",
      subcaption: "Asesoría contable, fiscal y de sistemas",
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
      alt: "Oficinas y consultoría corporativa",
      caption: "Crecimiento e innovación con Sofistec",
      subcaption: "Acompañamiento a empresas y condominios",
    },
    {
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
      alt: "Administración y preservación de inmuebles",
      caption: "Gestión integral y certeza operativa",
      subcaption: "Cumplimiento normativo y transparencia",
    },
  ],
  fiscalService: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80", // Tax, accounting & financial documents
  techService: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80", // Server rack & IT infrastructure
  propertyService: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80", // Modern residential/commercial property
  officeTeam: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80", // Professional workplace meeting room
  careersBanner: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80", // Team collaboration
  videoPoster: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80", // Corporate office placeholder for video
};
