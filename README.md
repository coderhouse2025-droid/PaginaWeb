# 🌐 Juan Manuel Orellana — Portafolio Personal · Data Science & Analytics

[![Live Site](https://img.shields.io/badge/Live-Site-brightgreen?style=for-the-badge)](https://coderhouse2025-droid.github.io/PaginaWeb/)
[![GitHub Pages](https://img.shields.io/badge/Hosting-GitHub_Pages-181717?style=for-the-badge&logo=github)](https://pages.github.com/)
[![Vanilla JS](https://img.shields.io/badge/Stack-Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/UI-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> Sitio web de portafolio personal y hub de proyectos desarrollado con HTML5, Tailwind CSS y JavaScript Vanilla, configurado con capacidades PWA y alojado en GitHub Pages. Presenta mi perfil profesional híbrido, habilidades críticas y automatizaciones avanzadas.

🔗 **Live site:** https://coderhouse2025-droid.github.io/PaginaWeb/

---

## 📋 Índice

- [Descripción](#-descripción)
- [Objetivo del portafolio](#-objetivo-del-portafolio)
- [Decisiones técnicas y su justificación](#-decisiones-técnicas-y-su-justificación)
- [Arquitectura del sitio](#-arquitectura-del-sitio)
- [Pipeline de datos: de repositorios de GitHub a grilla de proyectos](#-pipeline-de-datos-de-repositorios-de-github-a-grilla-de-proyectos)
- [¿Por qué este camino y no otro?](#-por-qué-este-camino-y-no-otro)
- [Funcionalidades](#-funcionalidades)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Instalación local](#️-instalación-local)
- [Contacto y Redes](#-contacto-y-redes)
- [Licencia](#-licencia)

---

## 📊 Descripción

Sitio web profesional que centraliza mi trayectoria de más de 19 años en el sector analítico, la auditoría contable y el control estatal, convergiendo formalmente con las metodologías modernas de Data Science, Machine Learning e Inteligencia Artificial Generativa.

Los proyectos y desarrollos se integran y segmentan de forma dinámica utilizando la **API pública de GitHub**, lo que asegura un ecosistema automatizado donde el portafolio actúa como la fuente única y actualizada de mi actividad técnica.

---

## 🎯 Objetivo del portafolio

Contar con una sólida trayectoria en auditoría de datos, consistencia financiera y cumplimiento normativo en el sector público plantea un desafío de comunicación en los formatos estandarizados de reclutamiento. Este perfil híbrido no se limita a escribir código ni a la gestión tradicional: se enfoca en el aseguramiento, la mitigación de riesgos de información y la toma de decisiones basada en datos íntegros.

Este portafolio propio tiene como propósito **materializar el conocimiento analítico en soluciones verificables**. Cada solución expuesta está enlazada directamente a su infraestructura de código fuente, permitiendo a los evaluadores auditar la calidad metodológica del trabajo de manera transparente y sin intermediarios.

Frente a plataformas genéricas y rígidas como LinkedIn, este espacio me permite estructurar una narrativa técnica propia, demostrar destreza en el despliegue frontend moderno y exponer flujos de automatización complejos (tales como arquitecturas RAG o pipelines en n8n) bajo mi propio diseño de experiencia de usuario.

---

## 🧠 Decisiones técnicas y su justificación

### 1. HTML5 + JavaScript Vanilla — no React, no Next.js

**¿Por qué Vanilla?**
Un hub de portafolio profesional requiere velocidad de respuesta inmediata y la menor fricción operativa posible. Introducir frameworks SPA como React o Next.js añadiría capas de compilación innecesarias, gestión de dependencias y una penalización en el tiempo de interactividad inicial para el usuario. 

La ejecución sobre JavaScript Vanilla permite renderizados limpios en el DOM en milisegundos, garantizando que un reclutador técnico experimente una navegación fluida, veloz y robusta que expone fundamentos sólidos de programación sin abstracciones accesorias.

### 2. Tailwind CSS — Diseño Agil y Optimización Vertical

**¿Por qué Tailwind CSS?**
A diferencia de los estilos CSS escritos desde cero, Tailwind CSS provee un entorno utilitario altamente optimizado que garantiza la consistencia del diseño responsivo. Su sistema permite modelar interfaces complejas asegurando que el sitio sea prioritariamente ágil en dispositivos móviles (*Mobile-First*). Dado que gran parte del tráfico de revisión profesional ocurre en smartphones, Tailwind facilita que las grillas de proyectos y modales se adapten perfectamente a formatos verticales aprovechando el ancho de pantalla completo de forma armónica.

### 3. GitHub REST API v3 — Proyectos Dinámicos sin Hardcoding

**¿Por qué consumir la API de GitHub?**
Hardcodear tarjetas de proyectos en el HTML genera duplicidad de mantenimiento y desincronización de datos. Consumiendo el endpoint público de GitHub en runtime, los repositorios actúan como la **fuente única de verdad**. El sitio lee dinámicamente los metadatos de los proyectos (nombres, descripciones, stars y fechas de actualización) mapeando los desarrollos en tiempo real.

La segmentación fina se realiza en el cliente mediante un filtrado estratégico basado en los *topics* del repositorio, abstrayendo la lógica técnica mediante un mapa de equivalencias (*aliases*) para mantener limpia la interfaz del portafolio.

### 4. Progressive Web App (PWA) habilitada

**¿Por qué una PWA?**
A través de la integración de un archivo `manifest.json`, el sitio adquiere capacidades nativas de aplicación progresiva. Esto optimiza la persistencia del sitio en dispositivos, acelera los tiempos de recarga de recursos visuales estáticos y demuestra competencia técnica en criterios avanzados de distribución de software web moderno.

### 5. GitHub Pages — Despliegue de Infraestructura Estática

**¿Por qué GitHub Pages?**
Al tratarse de una arquitectura de archivos estáticos que consume APIs externas en el lado del cliente, GitHub Pages ofrece la infraestructura idónea sin costos de servidor ni configuraciones complejas de variables de entorno. La integración continua con la rama principal asegura que cada cambio se despliegue automáticamente ante un `git push`.

---

## 🏗️ Arquitectura del sitio
Visitante (Navegador Móvil / Desktop)
↓
GitHub Pages (CDN e Infraestructura Estática)
↓
index.html  ←── Tailwind CSS (Estilos utilitarios responsivos y dinámicos)
↓
JavaScript (ES6+ Vanilla)
├── Fetch → GitHub REST API v3
│   └── Repositorios públicos → Filtrado por Topics → Renderizado en Grilla
├── PWA Manifest (manifest.json)
└── Manipulación del DOM
└── Modales de Proyectos, Filtros Interactivos y Descarga de CV
**Principio de diseño:** Despliegue desacoplado de servidores. Todo el procesamiento dinámico de datos se resuelve en el cliente mediante consultas asíncronas seguras con fallbacks controlados para garantizar la estabilidad visual.

---

## 🔄 Pipeline de datos: de repositorios de GitHub a grilla de proyectos

El flujo de integración extrae los repositorios públicos del perfil y los somete a transformaciones de datos inmediatas para asegurar la consistencia y la estética de la interfaz de usuario:

*   **Normalización de Títulos:** Transforma identificadores técnicos tipo slug (`modelo-predictivo-heat`) a cadenas legibles en formato Title Case (`Modelo Predictivo Heat`) mediante expresiones regulares.
*   **Consistencia de Contenido:** Se aplican reglas de truncado estricto a las descripciones extensas para asegurar la simetría de las tarjetas en la grilla visual, inyectando textos de fallback descriptivos para repositorios que carezcan de documentación inicial.
*   **Clasificación por Matriz de Equivalencias:** Los *topics* del repositorio se normalizan a minúsculas y se evalúan contra un diccionario de mapeo interno para unificar términos técnicos (`tableau` o `power-bi` se categorizan bajo el filtro unificado de Business Intelligence).
*   **Algoritmo de Ordenamiento por Calidad:** La lógica de ordenamiento prioriza los proyectos que cuentan con documentación completa y descripción técnica explícita, seguidos por relevancia de interacción (stars) y finalmente por actualización cronológica.
*   **Mitigación de Rate Limiting:** Se implementa un mecanismo de almacenamiento en caché utilizando `sessionStorage` para evitar llamadas redundantes a la API de GitHub durante la misma sesión del usuario, optimizando el consumo de cuota de red.

---

## 🤔 ¿Por qué este camino y no otro?

*   **Generadores de Sitios Estáticos (Hugo / Gatsby) descartados:** Añaden fricción y flujos operativos extras para actualizar datos dinámicos. El enfoque Vanilla lee los cambios de los repositorios sin necesidad de recompilar ni redesplegar el sitio.
*   **Entornos No-Code (Webflow / Squarespace) descartados:** No permiten validar competencias reales de ingeniería de software. Construir la arquitectura de forma directa demuestra control absoluto sobre el stack técnico utilizado.
*   **Portafolios basados en Notion descartados:** Carecen de identidad visual propia, exponen URLs con hashes de terceros poco profesionales y limitan el control analítico del rendimiento web.

---

## ✨ Funcionalidades

*   ⚡ **Rendimiento de Carga Crítico:** Optimizado para ofrecer puntuaciones altas en Core Web Vitals y tiempos mínimos de interactividad.
*   🎛️ **Filtro Avanzado de Proyectos:** Segmentación en tiempo real para separar trabajos de *Data Science, AI & Automation, y Web Apps*.
*   📱 **Diseño Adaptativo Vertical:** Estructura modular completamente optimizada para smartphones y formatos verticales.
*   💼 **Descarga Segura de CV:** Acceso directo e integrado a la documentación profesional sin redirecciones que rompan la experiencia de navegación.

---

## 📁 Estructura del proyecto

/
├── index.html              # Estructura semántica HTML5 e interfaz principal
├── css/
│   └── styles.css          # Configuraciones base de Tailwind CSS y personalizaciones
├── js/
│   ├── github-api.js       # Consumo, lógica de filtrado y render de repositorios
│   └── ui.js               # Control de modales, comportamiento de filtros y UI
├── manifest.json           # Descriptor de configuración Progressive Web App (PWA)
└── README.md               # Documentación técnica del repositorio

---

## ⚙️ Instalación local

Para examinar el código o ejecutar el portafolio en un entorno de desarrollo local, clone el repositorio:

```bash
git clone [https://github.com/coderhouse2025-droid/PaginaWeb.git](https://github.com/coderhouse2025-droid/PaginaWeb.git)

cd PaginaWeb


