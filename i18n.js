// Lightweight EN/PT toggle. Portuguese is the language baked into the HTML;
// English strings live in a per-page `window.AC_EN` dictionary keyed by data-i18n id.
// Default language is always Portuguese: the audience is local (SJC e região) and
// many Brazilians keep the phone in English, which used to flip the whole site.
// English only when the visitor toggles it (remembered in localStorage).
(function () {
  var STORAGE_KEY = 'ac-lang';
  var originals = new WeakMap();

  function detectDefault() {
    return 'pt';
  }

  function currentLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'en' || stored === 'pt' ? stored : detectDefault();
  }

  function apply(lang) {
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    var dict = window.AC_EN || {};
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var attr = el.getAttribute('data-i18n-attr');
      if (!originals.has(el)) {
        originals.set(el, attr ? el.getAttribute(attr) : el.innerHTML);
      }
      var original = originals.get(el);
      var value = lang === 'en' && dict[key] != null ? dict[key] : original;
      if (attr) el.setAttribute(attr, value);
      else el.innerHTML = value;
    });
    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      btn.textContent = lang === 'en' ? 'PT' : 'EN';
      // o nome acessível precisa conter o texto visível (EN/PT)
      btn.setAttribute('aria-label', lang === 'en' ? 'PT, mudar para português' : 'EN, switch to English');
    });
    document.body.setAttribute('data-lang', lang);
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    apply(lang);
  }

  window.acSetLang = setLang;
  window.acCurrentLang = currentLang;

  document.addEventListener('DOMContentLoaded', function () {
    apply(currentLang());
    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(currentLang() === 'en' ? 'pt' : 'en');
      });
    });
  });
})();
