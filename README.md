# Sofistec — Prototipo Web Oficial

Prototipo web responsivo desarrollado para **Sofistec**, firma especializada en **Asesoría Fiscal**, **Soluciones Tecnológicas** y **Administración Inmobiliaria** con sede en la Ciudad de México.

---

## 🚀 Instrucciones de Instalación y Ejecución Local

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o pnpm

### Pasos para iniciar el entorno de desarrollo:
```bash
# 1. Instalar dependencias del proyecto
npm install

# 2. Iniciar el servidor de desarrollo local
npm run dev
```

El aplicativo estará disponible en `http://localhost:5050` (o el puerto configurado por Vite).

### Comando de verificación y compilación de producción:
```bash
# Validar tipado y sintaxis TypeScript
npm run lint

# Generar compilación optimizada para despliegue
npm run build
```

---

## 📋 Lista de Elementos a Sustituir Previo al Lanzamiento (Checklist)

Conforme a las especificaciones del prototipo, se han marcado claramente con comentarios de desarrollador (`TODO`) los siguientes elementos:

1. **`JOB_BOARD_URL` (Bolsa de Trabajo Externa)**
   - **Archivo:** `src/config.ts` (Línea ~18)
   - **Acción:** Asignar la URL del portal externo de reclutamiento (e.g. `https://reclutamiento.sofistec.com`).
   - **Estado actual:** Variable vacía `""`; el botón en la vista *Bolsa de trabajo* indica visiblemente que la URL está pendiente de configurar y previene redirecciones a enlaces fabricados.

2. **Historia Corporativa (Company History)**
   - **Archivo:** `src/views/NosotrosView.tsx`
   - **Acción:** Reemplazar los párrafos señalizados de *Lorem ipsum* con la reseña histórica oficial y antecedentes validados por Sofistec. No se han inventado fechas fundacionales, directores ni reconocimientos.

3. **Video Corporativo Institucional**
   - **Archivo:** `src/views/NosotrosView.tsx`
   - **Acción:** Insertar el archivo multimedia final (MP4/WebM o reproductor embebido).
   - **Lineamiento técnico:** Incorporar esquema estructurado Schema.org (`VideoObject`), pista de subtítulos accesible (`<track kind="subtitles">`). En caso de reproducción automática, debe incluir `muted`, `playsinline` e imagen de póster.

4. **Aviso de Privacidad Legal**
   - **Archivo:** `src/views/AvisoPrivacidadView.tsx`
   - **Acción:** Sustituir la plantilla con texto de relleno por el documento legal definitivo aprobado conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
   - **Nota sobre datos personales:** El prototipo no recopila información personal. Si en el futuro se implementa un formulario web, se debe agregar una casilla de aceptación obligatoria antes del envío.

5. **Imágenes de Stock (Stock Images)**
   - **Archivo:** `src/config.ts` (Objeto `ASSETS`)
   - **Acción:** Reemplazar las URLs de Unsplash por fotografías de alta resolución de las instalaciones, equipo y oficinas reales de Sofistec.

---

## 🏛 Estructura de Páginas y Navegación

1. **Inicio:**
   - Sección principal (Hero) con propuesta de valor y botón prioritario **Contáctanos**.
   - Resumen de las tres áreas en orden estricto: *1. Asesoría Fiscal*, *2. Soluciones Tecnológicas*, *3. Administración Inmobiliaria*.
   - Misión, Visión y Valores.
   - Preguntas Frecuentes (FAQ) interactivas en español.
2. **Nosotros:**
   - Historia de la firma con texto de marcador de posición debidamente etiquetado.
   - Espacio reservado para video institucional con especificaciones técnicas.
   - Misión, Visión y Valores detallados.
3. **Servicios:**
   - Catálogo clasificado en las 3 áreas con sus respectivos sub-servicios exactos (cálculo de nómina, contabilidad electrónica, diagnóstico fiscal, cuotas obrero-patronales, soporte de servidores, cobranza, corretaje, etc.).
4. **Bolsa de trabajo:**
   - Introducción profesional al ambiente laboral de Sofistec.
   - Botón *Trabaja con Nosotros* vinculado a la variable configurable `JOB_BOARD_URL`.
5. **Contacto:**
   - Vías directas sin captura de datos personales: Teléfono (+52 55 75877057), Correo (contacto@sofistec.com), Horario (8:00 a 18:00 hrs), Dirección (Col. del Valle Centro, Benito Juárez, CDMX) y enlace seguro a Facebook.
6. **Aviso de Privacidad:**
   - Sección accesible con advertencia de borrador y plantilla referencial.

---

## 🎨 Identidad Visual y Diseño
- **Logotipo:** Incorporado directamente desde `/assets/aistudio/sofistec_logo_home_2be57231.png`.
- **Paleta de Color:** Azul marino profundo (`#1e3a8a`, `#0f172a`), toques sutiles índigo/púrpura (`#4338ca`) y fondos neutros cálidos (`#f8fafc`, `#ffffff`).
- **Tipografía:** *Plus Jakarta Sans* y *Space Grotesk*.
- **Anti-slop:** Sin píldoras genéricas para metadatos, espaciado generoso, alto contraste WCAG AA y controles accesibles.
