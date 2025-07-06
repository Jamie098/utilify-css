; (function () {
  if (typeof window === 'undefined') return;
  document.addEventListener('DOMContentLoaded', () => {
    const els = document.querySelectorAll('[class*="reveal-"]');

    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    els.forEach(el => obs.observe(el));
  });
})();
