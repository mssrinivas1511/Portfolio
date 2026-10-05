import { useEffect } from 'react';

/** Adds a subtle fade-up to sections and cards as they enter the viewport. */
const ScrollReveal = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );
    const scan = () => {
      document.querySelectorAll('main section, main > article, main > div > section').forEach((el) => {
        if (!el.classList.contains('reveal')) {
          el.classList.add('reveal');
          io.observe(el);
        }
      });
    };
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
  return null;
};

export default ScrollReveal;
