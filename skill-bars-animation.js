/**
 * Skill Bars Animation
 * Animación profesional de barras de habilidades con Intersection Observer
 * Compatible con navegadores modernos, sin dependencias externas
 */

(function() {
  'use strict';

  // Configuración de la animación
  const CONFIG = {
    duration: 1200, // milisegundos
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    color: '#39ff14',
    observerOptions: {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    }
  };

  // Guardar qué barras ya fueron animadas
  const animatedBars = new WeakSet();

  /**
   * Animar una barra individual
   * @param {HTMLElement} fillElement - Elemento que se anima (.skill-bar-fill)
   * @param {number} targetWidth - Ancho objetivo en porcentaje
   */
  function animateBar(fillElement, targetWidth) {
    // Prevenir doble animación
    if (animatedBars.has(fillElement)) {
      return;
    }

    animatedBars.add(fillElement);

    // Resetear a 0% si es necesario
    fillElement.style.width = '0%';
    fillElement.style.transition = 'none';
    
    // Forzar reflow para asegurar que el reset se aplique
    void fillElement.offsetWidth;

    // Aplicar transición y animar
    fillElement.style.transition = `width ${CONFIG.duration}ms ${CONFIG.easing}`;
    requestAnimationFrame(() => {
      fillElement.style.width = `${targetWidth}%`;
    });
  }

  /**
   * Inicializar Intersection Observer
   */
  function initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fillElement = entry.target;
          const targetWidth = parseFloat(fillElement.style.width);
          
          // Reiniciar la animación
          animateBar(fillElement, targetWidth);
        }
      });
    }, CONFIG.observerOptions);

    // Observar todas las barras de habilidad
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    skillBars.forEach(bar => {
      // Resetear ancho a 0% para la animación
      const originalWidth = bar.style.width;
      bar.dataset.targetWidth = originalWidth;
      bar.style.width = '0%';
      observer.observe(bar);
    });

    return observer;
  }

  /**
   * Aplicar estilos dinámicos para la animación (glow effect)
   */
  function injectAnimationStyles() {
    // Verificar si los estilos ya fueron inyectados
    if (document.getElementById('skill-bar-animation-styles')) {
      return;
    }

    const style = document.createElement('style');
    style.id = 'skill-bar-animation-styles';
    style.textContent = `
      /* Skill Bar Animation Styles */
      .skill-bar-track {
        position: relative;
        overflow: hidden;
      }

      .skill-bar-fill {
        position: relative;
        transition: width 1200ms cubic-bezier(0.4, 0, 0.2, 1);
        background: linear-gradient(
          90deg,
          #39ff14 0%,
          #55ff33 50%,
          #39ff14 100%
        );
        box-shadow: 0 0 12px rgba(57, 255, 20, 0.5),
                    inset 0 0 8px rgba(57, 255, 20, 0.3);
        border-radius: 2px;
      }

      .skill-bar-fill::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          90deg,
          transparent 0%,
          rgba(255, 255, 255, 0.2) 50%,
          transparent 100%
        );
        border-radius: 2px;
        animation: shimmer 2s infinite;
      }

      @keyframes shimmer {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }

      /* Animación alternativa: pulse glow (opcional, descomentar si se desea) */
      @keyframes glowPulse {
        0%, 100% {
          box-shadow: 0 0 12px rgba(57, 255, 20, 0.5),
                      inset 0 0 8px rgba(57, 255, 20, 0.3);
        }
        50% {
          box-shadow: 0 0 20px rgba(57, 255, 20, 0.7),
                      inset 0 0 12px rgba(57, 255, 20, 0.5);
        }
      }

      /* Aplicar glow pulse durante la animación */
      .skill-bar-fill:not([style*="width: 0%"]) {
        animation: glowPulse 1.2s ease-in-out;
      }

      /* Reducir animaciones en modo prefiere-movimiento-reducido */
      @media (prefers-reduced-motion: prefer-reduced-motion) {
        .skill-bar-fill {
          transition: width 200ms ease-out;
        }

        .skill-bar-fill::after {
          animation: none;
        }

        .skill-bar-fill:not([style*="width: 0%"]) {
          animation: none;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /**
   * Inicializar todo cuando el DOM esté listo
   */
  function init() {
    // Inyectar estilos
    injectAnimationStyles();

    // Inicializar observer
    initIntersectionObserver();
  }

  // Ejecutar cuando el DOM esté completamente cargado
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Exponer función para reiniciar animaciones manualmente (útil para debugging)
  window.resetSkillBarsAnimation = function() {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    const animatedBarsArray = Array.from(animatedBars);
    
    skillBars.forEach(bar => {
      const targetWidth = bar.dataset.targetWidth || bar.style.width;
      bar.style.width = '0%';
      if (animatedBarsArray.includes(bar)) {
        animatedBars.delete(bar);
      }
      
      setTimeout(() => {
        bar.style.transition = `width 1200ms ${CONFIG.easing}`;
        requestAnimationFrame(() => {
          bar.style.width = targetWidth;
        });
      }, 100);
    });
  };

})();
