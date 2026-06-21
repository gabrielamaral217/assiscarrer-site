/* A/B Test: lp-apartamento v1 (A) vs v2 (B)
 *
 * Comportamento:
 * - Cada visitante recebe variant A ou B (50/50), persistido em cookie 365 dias.
 * - Se cair no slug "errado" pra variant, redireciona pro slug certo (com replaceState pra UX limpa).
 * - Adiciona visitor_id curto (8 chars hex) no parâmetro ?v= dos links wa.me.
 *   Assim, quando você recebe mensagem, o texto vem com [v=AB-A-3f8a1c2b] e dá pra cruzar.
 * - Dispara evento GA4 `ab_assignment` na primeira visita e `ab_variant` em cada page_view.
 *
 * Para reset durante teste manual, no console:
 *   document.cookie='ab=;path=/;max-age=0'; location.reload();
 */
(function () {
  var VARIANTS = {
    A: '/lp-apartamento.html',
    B: '/lp-apartamento-v2.html'
  };
  // Normalize a pathname to its canonical .html form so the script behaves the
  // same on GitHub Pages (serves with .html) and on local dev (npx serve strips it).
  function canon(path) {
    if (/\.html$/.test(path)) return path;
    if (path === '/lp-apartamento' || path === '/lp-apartamento-v2') return path + '.html';
    return path;
  }
  var COOKIE_NAME = 'ab';
  var ONE_YEAR = 60 * 60 * 24 * 365;

  function readCookie(name) {
    var m = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return m ? m[2] : null;
  }
  function writeCookie(name, value) {
    document.cookie = name + '=' + value + ';path=/;max-age=' + ONE_YEAR + ';SameSite=Lax';
  }
  function randomHex(len) {
    var s = '';
    while (s.length < len) s += Math.floor(Math.random() * 16).toString(16);
    return s.slice(0, len);
  }

  // Read or create assignment "VARIANT|VISITORID"
  var raw = readCookie(COOKIE_NAME);
  var variant, visitorId, fresh = false;
  if (raw && /^[AB]\|[0-9a-f]{8}$/.test(raw)) {
    var parts = raw.split('|');
    variant = parts[0];
    visitorId = parts[1];
  } else {
    variant = Math.random() < 0.5 ? 'A' : 'B';
    visitorId = randomHex(8);
    writeCookie(COOKIE_NAME, variant + '|' + visitorId);
    fresh = true;
  }

  // Expose globally for the page to use (e.g., custom analytics)
  window.AB = { variant: variant, visitorId: visitorId };

  // Redirect if user landed on the wrong slug for their variant
  var targetPath = VARIANTS[variant];
  var currentPath = canon(location.pathname);
  if (currentPath === VARIANTS.A || currentPath === VARIANTS.B) {
    if (currentPath !== targetPath) {
      location.replace(targetPath + location.search + location.hash);
      return;
    }
  }

  // Fire GA4 events as soon as gtag is available (poll briefly)
  var fired = false;
  function fire() {
    if (fired || !window.gtag) return;
    fired = true;
    // Page view augmented with variant — gives a clean dimension in GA4 reports
    window.gtag('event', 'ab_variant', {
      variant: variant,
      visitor_id: visitorId,
      page_path: location.pathname
    });
    if (fresh) {
      window.gtag('event', 'ab_assignment', {
        variant: variant,
        visitor_id: visitorId
      });
    }
  }
  fire();
  if (!fired) {
    var tries = 0;
    var iv = setInterval(function () {
      tries++;
      fire();
      if (fired || tries > 40) clearInterval(iv);
    }, 100);
  }

  // Stamp visitor identifier onto every wa.me link so you can match messages later.
  // We append " [AB-A-3f8a1c2b]" to the text param.
  function stampWaLinks() {
    var tag = ' [AB-' + variant + '-' + visitorId + ']';
    document.querySelectorAll('a[href*="wa.me"]').forEach(function (a) {
      if (a.dataset.abStamped === '1') return;
      try {
        var u = new URL(a.href);
        var text = u.searchParams.get('text') || '';
        if (text.indexOf('[AB-') === -1) {
          u.searchParams.set('text', text + tag);
          a.href = u.toString();
        }
        a.dataset.abStamped = '1';
      } catch (e) { /* ignore malformed urls */ }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', stampWaLinks);
  } else {
    stampWaLinks();
  }
  // Re-stamp if SPA-like links are added later
  var mo = new MutationObserver(stampWaLinks);
  mo.observe(document.documentElement, { childList: true, subtree: true });
})();
