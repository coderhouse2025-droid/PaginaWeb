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
