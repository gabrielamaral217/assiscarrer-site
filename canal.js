/* Canal de origem no texto do WhatsApp
 *
 * O clique no wa.me conta como conversão, mas não diz se a mensagem chegou.
 * Para contar as mensagens reais por canal, quem veio de anúncio manda um
 * "Olá!" um pouco diferente, sem código estranho no texto:
 *   - Google Ads (gclid/gbraid/wbraid)  -> "Olá, vi o anúncio no Google!"
 *   - Meta Ads (fbclid ou utm_source facebook/instagram/ig/meta) -> "Olá, vi o anúncio de vocês!"
 *   - demais visitas: texto original da página (mantém a frase do teste A/B).
 * O canal fica guardado por 30 dias, porque muita gente volta depois pelo direto.
 */
(function () {
  var KEY = 'ac_canal';
  var TTL = 30 * 24 * 60 * 60 * 1000;
  var FRASES = {
    google: 'Olá, vi o anúncio no Google!',
    meta: 'Olá, vi o anúncio de vocês!'
  };

  function detectar() {
    var qs = new URLSearchParams(location.search);
    if (qs.get('gclid') || qs.get('gbraid') || qs.get('wbraid')) return 'google';
    var src = (qs.get('utm_source') || '').toLowerCase();
    if (qs.get('fbclid') || /^(facebook|instagram|ig|meta|fb)$/.test(src)) return 'meta';
    return null;
  }

  function ler() {
    try {
      var v = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (v && v.canal && Date.now() - v.ts < TTL) return v.canal;
    } catch (e) {}
    return null;
  }

  var canal = detectar();
  if (canal) {
    try { localStorage.setItem(KEY, JSON.stringify({ canal: canal, ts: Date.now() })); } catch (e) {}
  } else {
    canal = ler();
  }
  window.AC_CANAL = canal;

  function marcar(url) {
    if (!canal || typeof url !== 'string' || url.indexOf('wa.me/') === -1) return url;
    try {
      var u = new URL(url, location.href);
      var texto = u.searchParams.get('text') || '';
      if (texto.indexOf(FRASES[canal]) === 0) return url;
      texto = /^Olá!\s*/.test(texto)
        ? texto.replace(/^Olá!\s*/, FRASES[canal] + ' ')
        : FRASES[canal] + (texto ? ' ' + texto : '');
      u.searchParams.delete('text');
      // %20 em vez do "+" do URLSearchParams, igual aos links originais
      var resto = u.searchParams.toString();
      return u.origin + u.pathname + '?text=' + encodeURIComponent(texto) + (resto ? '&' + resto : '');
    } catch (e) {
      return url;
    }
  }

  // Links <a href="https://wa.me/...">: troca o texto no clique, antes de navegar
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest && ev.target.closest('a[href*="wa.me/"]');
    if (a) a.href = marcar(a.href);
  }, true);

  // Formulários que abrem o WhatsApp por window.open
  var abrir = window.open;
  window.open = function (url) {
    var args = Array.prototype.slice.call(arguments);
    args[0] = marcar(url);
    return abrir.apply(window, args);
  };
})();
