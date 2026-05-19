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
