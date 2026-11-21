/**
 * @file types.ts
 * Type definitions for Sofistec website prototype.
 */

export type PageId = "inicio" | "nosotros" | "servicios" | "bolsa-de-trabajo" | "contacto" | "aviso-de-privacidad";

export interface NavItem {
  id: PageId;
  label: string;
}

export interface ServiceArea {
  id: "asesoria-fiscal" | "soluciones-tecnologicas" | "administracion-inmobiliaria";
  order: number;
  title: string;
  tagline: string;
  description: string;
  image: string;
  iconName: string;
  services: {
    title: string;
    description: string;
    highlights: string[];
  }[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "Fiscal" | "Tecnología" | "Inmobiliaria" | "General";
}
