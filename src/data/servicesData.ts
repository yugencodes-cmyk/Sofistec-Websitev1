/**
 * @file servicesData.ts
 * Exact services catalog for Sofistec, adhering strictly to the user brief.
 * Order:
 * 1. Asesoría Fiscal
 * 2. Soluciones Tecnológicas
 * 3. Administración Inmobiliaria
 */

import { ASSETS } from "../config";
import { ServiceArea } from "../types";

export const SERVICES_DATA: ServiceArea[] = [
  {
    id: "asesoria-fiscal",
    order: 1,
    title: "Asesoría Fiscal",
    tagline: "Cumplimiento normativo, orden contable y certidumbre tributaria",
    description:
      "Acompañamiento especializado para empresas y personas físicas en el cumplimiento oportuno de sus obligaciones contables y fiscales, con apego a las disposiciones vigentes en México.",
    image: ASSETS.fiscalService,
    iconName: "ReceiptText",
    services: [
      {
        title: "Cálculo de nómina",
        description:
          "Procesamiento periódico de nóminas con cálculo riguroso de percepciones, deducciones, retenciones de ISR y timbrado de comprobantes fiscales.",
        highlights: [
          "Cálculo de sueldos, horas extra, finiquitos y aguinaldos",
          "Emisión y timbrado de CFDI de nómina conforme al SAT",
          "Conciliación periódica de movimientos para evitar inconsistencias",
        ],
      },
      {
        title: "Contabilidad electrónica",
        description:
          "Registro sistemático de las operaciones financieras de la entidad y preparación de los archivos XML requeridos por las autoridades hacendarias.",
        highlights: [
          "Catálogo de cuentas y balanza de comprobación mensual",
          "Captura y conciliación de pólizas de ingresos, egresos y diario",
          "Generación y envío seguro de archivos conforme al Anexo 24",
        ],
      },
      {
        title: "Diagnóstico y asesoría fiscal",
        description:
          "Evaluación integral del estatus tributario de la organización para identificar áreas de oportunidad, regularizar expedientes y prevenir contingencias.",
        highlights: [
          "Revisión de la situación fiscal frente al SAT y estados financieros",
          "Análisis de obligaciones pendientes y declaraciones informativas",
          "Estrategias de cumplimiento responsable y ordenado",
        ],
      },
      {
        title: "Determinación de cuotas obrero-patronales",
        description:
          "Cálculo y revisión de las aportaciones correspondientes ante los organismos de seguridad social para garantizar la debida cobertura del personal.",
        highlights: [
          "Cálculo de cuotas IMSS a través del sistema SUA e IDSE",
          "Determinación de amortizaciones y pagos ante el INFONAVIT",
          "Validación de primas de riesgo de trabajo y salarios base de cotización",
        ],
      },
      {
        title: "Consultoría profesional para resolución de problemas fiscales",
        description:
          "Atención técnica y especializada ante requerimientos, aclaraciones, discrepancias o procesos de regularización tributaria.",
        highlights: [
          "Atención y respuesta a cartas invitación o requerimientos oficiales",
          "Gestión de aclaraciones de buzón tributario y saldos a favor",
          "Acompañamiento en procesos de regularización administrativa",
        ],
      },
    ],
  },
  {
    id: "soluciones-tecnologicas",
    order: 2,
    title: "Soluciones Tecnológicas",
    tagline: "Continuidad operativa, respaldo técnico y estabilidad para su infraestructura",
    description:
      "Servicios orientados a mantener la disponibilidad, seguridad y óptimo rendimiento de los sistemas y equipos informáticos que sustentan las operaciones diarias de su organización.",
    image: ASSETS.techService,
    iconName: "Server",
    services: [
      {
        title: "Soporte técnico administrativo",
        description:
          "Asistencia técnica remota y presencial para equipos de cómputo, paquetería administrativa, periféricos y conectividad de usuarios en oficina.",
        highlights: [
          "Diagnóstico y corrección de incidencias en estaciones de trabajo",
          "Configuración de software de gestión, correo institucional y accesos",
          "Optimización de tiempos de respuesta para soporte a usuarios",
        ],
      },
      {
        title: "Mantenimiento de servidores",
        description:
          "Supervisión preventiva y correctiva de servidores físicos y virtuales para asegurar alta disponibilidad de datos y continuidad en los flujos de trabajo.",
        highlights: [
          "Monitoreo de estado operativo, almacenamiento y recursos de memoria",
          "Políticas de respaldo programado de bases de datos y archivos",
          "Aplicación de parches de seguridad, antivirus y control de accesos",
        ],
      },
    ],
  },
  {
    id: "administracion-inmobiliaria",
    order: 3,
    title: "Administración Inmobiliaria",
    tagline: "Transparencia de cuotas, preservación de inmuebles y certeza jurídica",
    description:
      "Gestión profesional de condominios, edificios corporativos y bienes raíces en la Ciudad de México, garantizando finanzas claras y mantenimiento integral del patrimonio.",
    image: ASSETS.propertyService,
    iconName: "Building2",
    services: [
      {
        title: "Cobranza y seguimiento",
        description:
          "Control puntual de cuotas de mantenimiento ordiarias y extraordinarias, con esquemas de seguimiento transparente para evitar morosidad.",
        highlights: [
          "Emisión de estados de cuenta individuales y recibos de pago",
          "Monitoreo de cobranza en tiempo y forma con conciliación bancaria",
          "Planes amigables de regularización para cuotas rezagadas",
        ],
      },
      {
        title: "Reportes de administración",
        description:
          "Presentación periódica y estructurada de informes financieros, ingresos, egresos y bitácoras de mantenimiento para comités y condóminos.",
        highlights: [
          "Desglose mensual de balance general y flujo de efectivo",
          "Bitácoras de mantenimiento preventivo y correctivo de áreas comunes",
          "Acceso a documentación contable clara y auditable",
        ],
      },
      {
        title: "Asesoría jurídico-inmobiliaria",
        description:
          "Orientación legal en la aplicación de reglamentos internos, mediación condominal y apego a la Ley de Propiedad en Condominio de la CDMX.",
        highlights: [
          "Revisión y actualización de reglamentos de régimen condominal",
          "Acompañamiento en asambleas ordinarias y extraordinarias",
          "Mediación protocolaria ante controversias entre copropietarios",
        ],
      },
      {
        title: "Regularización y corretaje",
        description:
          "Gestión de trámites de regularización documental para inmuebles y promoción inmobiliaria formal para arrendamiento o compraventa.",
        highlights: [
          "Revisión de expedientes de títulos de propiedad y gravámenes",
          "Promoción profesional de unidades en renta o venta",
          "Filtros de investigación de prospectos y contratos de arrendamiento",
        ],
      },
    ],
  },
];
