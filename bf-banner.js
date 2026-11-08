/* Faixa de Black Friday no topo do site.
   Aparece em todas as páginas (menos na própria lp-black-friday) até 30/11/2026 23h59 (Brasília)
   e some sozinha depois. O visitante pode fechar; fica fechada até ele fechar o navegador.
   Para tirar antes do prazo (as 10 vagas acabaram): mudar ATIVA para false. */
(function () {
  var ATIVA = true;
  var FIM = new Date('2026-11-30T23:59:59-03:00').getTime();
  var CHAVE = 'bfFaixaFechada';
  if (!ATIVA || Date.now() > FIM) return;
  if (/lp-black-friday/.test(location.pathname)) return;
  try { if (sessionStorage.getItem(CHAVE)) return; } catch (e) {}

  var css =
    '.bf-faixa{position:fixed;top:0;left:0;right:0;z-index:1000;height:var(--bf-h);display:flex;align-items:center;justify-content:center;' +
    'background:#0b0a09;border-bottom:1px solid rgba(231,180,124,.35);font-family:"Now","Segoe UI",sans-serif;}' +
    '.bf-faixa a{display:flex;align-items:center;gap:10px;height:100%;padding:0 48px;color:#f6f2ec;text-decoration:none;' +
    'font-size:12px;font-weight:400;letter-spacing:.16em;text-transform:uppercase;white-space:nowrap;}' +
    '.bf-faixa b{color:#e7b47c;font-weight:500;}' +
    '.bf-faixa .bf-sep{color:rgba(231,180,124,.6);}' +
    '.bf-faixa .bf-cta{border-bottom:1px solid rgba(231,180,124,.7);color:#e7b47c;padding-bottom:1px;}' +
    '.bf-faixa a:hover .bf-cta{color:#f6f2ec;border-color:#f6f2ec;}' +
    '.bf-faixa .bf-x{position:absolute;right:6px;top:50%;transform:translateY(-50%);width:36px;height:36px;border:0;background:none;' +
    'color:rgba(246,242,236,.7);font-size:20px;line-height:1;cursor:pointer;}' +
    '.bf-faixa .bf-x:hover{color:#fff;}' +
    '.bf-faixa .bf-longo{display:inline;}.bf-faixa .bf-curto{display:none;}' +
    '@media (max-width:640px){.bf-faixa a{font-size:11px;letter-spacing:.08em;gap:7px;padding:0 40px;}.bf-faixa .bf-longo{display:none;}.bf-faixa .bf-curto{display:inline;}}' +
    'html.tem-bf{--bf-h:40px;}' +
    'html.tem-bf body{margin-top:var(--bf-h);}' +
    'html.tem-bf #navbar,html.tem-bf .lp-header,html.tem-bf .topbar{top:var(--bf-h);}' +
    'html.tem-bf body.nav-open .bf-faixa{display:none;}' +
    'html.tem-bf body.nav-open #navbar{top:0;}';

  function montar() {
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);
    var bar = document.createElement('div');
    bar.className = 'bf-faixa';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', 'Promoção de Black Friday');
    bar.innerHTML =
      '<a href="lp-black-friday.html" id="bfFaixaLink">' +
        '<b>Black Friday</b><span class="bf-sep">·</span>' +
        '<span><span class="bf-longo">25% no seu projeto até 30/11</span><span class="bf-curto">25% no projeto</span></span>' +
        '<span class="bf-sep">·</span><span class="bf-cta"><span class="bf-longo">Ver condição</span><span class="bf-curto">Ver</span></span>' +
      '</a>' +
      '<button type="button" class="bf-x" aria-label="Fechar aviso da Black Friday">×</button>';
    document.body.insertBefore(bar, document.body.firstChild);
    document.documentElement.classList.add('tem-bf');

    bar.querySelector('#bfFaixaLink').addEventListener('click', function () {
      var p = { page: location.pathname.replace(/^\//, '') || 'index' };
      if (window.dataLayer) window.dataLayer.push(Object.assign({ event: 'bf_faixa_click' }, p));
      if (window.gtag) window.gtag('event', 'bf_faixa_click', p);
    });
    bar.querySelector('.bf-x').addEventListener('click', function () {
      bar.remove();
      document.documentElement.classList.remove('tem-bf');
      try { sessionStorage.setItem(CHAVE, '1'); } catch (e) {}
    });
  }

  if (document.body) montar();
  else document.addEventListener('DOMContentLoaded', montar);
})();
