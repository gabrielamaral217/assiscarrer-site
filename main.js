// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Tracking helpers — disparam quando os pixels estiverem ativos
function trackEvent(name, params) {
  params = params || {};
  if (window.dataLayer) window.dataLayer.push(Object.assign({ event: name }, params));
  if (window.gtag)      window.gtag('event', name, params);
  if (window.fbq)       window.fbq('trackCustom', name, params);
}

// Google Ads conversion — disparado no envio do formulário (lead qualificado)
const GADS_CONVERSION = { send_to: 'AW-18186496405/F0xNCI3x6bIcEJXT_99D', value: 2500.0, currency: 'BRL' };
function trackConversion() {
  if (window.gtag) window.gtag('event', 'conversion', GADS_CONVERSION);
  // Meta Pixel: também marca como Lead (evento padrão do Meta)
  if (window.fbq)  window.fbq('track', 'Lead', { value: 2500, currency: 'BRL' });
}

// Contact form — envia lead para WhatsApp + dispara lead_form_submit
const WA_NUMBER = '5512981534551';
document.getElementById('contatoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome     = this.nome.value.trim();
  const telefone = this.telefone.value.trim();
  const tipo     = this.tipo.value;
  const prazo    = this.prazo.value;
  const mensagem = this.mensagem.value.trim();

  trackEvent('lead_form_submit', { tipo_projeto: tipo, prazo: prazo });
  trackConversion();

  const text = encodeURIComponent(
    `Olá! Quero um orçamento.\n\n` +
    `Nome: ${nome}\n` +
    `WhatsApp: ${telefone}\n` +
    `Tipo de projeto: ${tipo}\n` +
    `Quando pretende iniciar: ${prazo}` +
    (mensagem ? `\n\nMensagem: ${mensagem}` : '')
  );
  window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');

  const success = document.getElementById('formSuccess');
  success.classList.add('show');
  setTimeout(() => success.classList.remove('show'), 5000);
});

// Track WhatsApp clicks (float + qualquer link wa.me)
document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
  a.addEventListener('click', () => trackEvent('whatsapp_click', { source: a.id || 'link' }));
});

// scroll_75 — disparado uma vez quando passa de 75% da página
let scroll75Fired = false;
window.addEventListener('scroll', () => {
  if (scroll75Fired) return;
  const pct = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
  if (pct >= 0.75) { trackEvent('scroll_75'); scroll75Fired = true; }
}, { passive: true });

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.servico-card, .portfolio-item, .processo-step, .sobre-text, .sobre-imagem, .contato-info, .contato-form, .equipe-header, .equipe-imagem, .equipe-text, .contato-bloco, .section-header'
).forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Servico modal (mobile only)
const servicoModal = document.getElementById('servicoModal');
const servicoModalClose = document.getElementById('servicoModalClose');
const servicoModalIcon = document.getElementById('servicoModalIcon');
const servicoModalTitle = document.getElementById('servicoModalTitle');
const servicoModalText = document.getElementById('servicoModalText');

function openServicoModal(card) {
  const icon = card.querySelector('.servico-icon');
  const title = card.querySelector('h3');
  const text = card.querySelector('p');
  servicoModalIcon.innerHTML = icon ? icon.innerHTML : '';
  servicoModalTitle.textContent = title ? title.textContent : '';
  servicoModalText.textContent = text ? text.textContent : '';
  servicoModal.classList.add('open');
  servicoModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeServicoModal() {
  servicoModal.classList.remove('open');
  servicoModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.servico-card').forEach(card => {
  card.addEventListener('click', () => {
    if (window.innerWidth > 768) return;
    openServicoModal(card);
  });
});
servicoModalClose.addEventListener('click', closeServicoModal);
servicoModal.addEventListener('click', (e) => {
  if (e.target === servicoModal) closeServicoModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && servicoModal.classList.contains('open')) closeServicoModal();
});

// Projeto lightbox
const projetoModal = document.getElementById('projetoModal');
const projetoModalImg = document.getElementById('projetoModalImg');
const projetoModalClose = document.getElementById('projetoModalClose');

function openProjetoModal(item) {
  const img = item.querySelector('img');
  if (!img) return;
  projetoModalImg.src = img.currentSrc || img.src;
  projetoModalImg.alt = img.alt || '';
  projetoModal.classList.add('open');
  projetoModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeProjetoModal() {
  projetoModal.classList.remove('open');
  projetoModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.portfolio-item').forEach(item => {
  item.addEventListener('click', () => openProjetoModal(item));
});
projetoModalClose.addEventListener('click', closeProjetoModal);
projetoModal.addEventListener('click', (e) => {
  if (e.target === projetoModal) closeProjetoModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && projetoModal.classList.contains('open')) closeProjetoModal();
});
