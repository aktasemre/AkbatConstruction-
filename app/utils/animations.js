'use client';

/**
 * Sayfa yüklendiğinde ve kaydırma sırasında animasyonları etkinleştirir
 */
export const initAnimations = () => {
  if (typeof window === 'undefined') return;

  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  
  const checkReveal = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  };
  
  // İlk yüklemede kontrol et
  checkReveal();
  
  // Kaydırma sırasında kontrol et
  window.addEventListener('scroll', checkReveal);
  
  // Pencere boyutu değiştiğinde kontrol et
  window.addEventListener('resize', checkReveal);
  
  return () => {
    window.removeEventListener('scroll', checkReveal);
    window.removeEventListener('resize', checkReveal);
  };
};

/**
 * Belirli bir süre sonra animasyonu başlatır
 * @param {number} delay - Milisaniye cinsinden gecikme süresi
 * @returns {string} - CSS sınıfı
 */
export const getDelayClass = (delay) => {
  const delayValue = Math.floor(delay / 100) * 100;
  return `delay-${delayValue}`;
};

/**
 * Animasyon sınıfı oluşturur
 * @param {string} type - Animasyon tipi (fadeIn, fadeInUp, vb.)
 * @param {number} delay - Milisaniye cinsinden gecikme süresi (opsiyonel)
 * @returns {string} - CSS sınıfı
 */
export const getAnimationClass = (type, delay = 0) => {
  let classes = `animate-${type}`;
  
  if (delay > 0) {
    classes += ` ${getDelayClass(delay)}`;
  }
  
  return classes;
}; 