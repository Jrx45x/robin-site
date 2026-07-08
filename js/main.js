// $ROBIN — main.js
// Copy-to-clipboard for CA, cursor spotlight, scroll reveal.

(function () {
  'use strict';

  // ---------- Copy CA ----------
  const copyBtn = document.getElementById('copyBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const text = copyBtn.dataset.copy || '';
      try {
        await navigator.clipboard.writeText(text);
        const original = copyBtn.textContent;
        copyBtn.textContent = 'Copied ✓';
        copyBtn.classList.add('copied');
        setTimeout(() => {
          copyBtn.textContent = original;
          copyBtn.classList.remove('copied');
        }, 1600);
      } catch (err) {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(ta);
        copyBtn.textContent = 'Copied ✓';
        copyBtn.classList.add('copied');
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
          copyBtn.classList.remove('copied');
        }, 1600);
      }
    });
  }

  // ---------- Reveal on scroll ----------
  const observer = ('IntersectionObserver' in window)
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 })
    : null;

  if (observer) {
    document.querySelectorAll('.pillar, .panel, .step, .manifesto-card, .sentry-card').forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  // ---------- Cursor spotlight (smooth lag) ----------
  const bgFx = document.querySelector('.bg-fx');
  if (bgFx && window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let curX = targetX;
    let curY = targetY;
    let raf = null;
    const lerp = (a, b, t) => a + (b - a) * t;
    const animate = () => {
      curX = lerp(curX, targetX, 0.08);
      curY = lerp(curY, targetY, 0.08);
      bgFx.style.setProperty('--cx', curX + 'px');
      bgFx.style.setProperty('--cy', curY + 'px');
      if (Math.abs(curX - targetX) < 0.3 && Math.abs(curY - targetY) < 0.3) {
        raf = null;
      } else {
        raf = requestAnimationFrame(animate);
      }
    };
    document.addEventListener('pointermove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (raf == null) raf = requestAnimationFrame(animate);
    }, { passive: true });
  }

})();
