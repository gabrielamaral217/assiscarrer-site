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

// Contact form — mailto fallback (no backend needed)
document.getElementById('contatoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome     = this.nome.value;
  const email    = this.email.value;
  const telefone = this.telefone.value;
  const tipo     = this.tipo.value;
  const mensagem = this.mensagem.value;

  const subject = encodeURIComponent(`Contato via site — ${tipo || 'Projeto'}`);
  const body = encodeURIComponent(
    `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nTipo de projeto: ${tipo}\n\n${mensagem}`
  );
  window.location.href = `mailto:arquitetura@assiscarrer.com?subject=${subject}&body=${body}`;

  const success = document.getElementById('formSuccess');
  success.classList.add('show');
  setTimeout(() => success.classList.remove('show'), 5000);
});

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
