# 📋 Plano de Marketing — Log de Execução

> **Arquivo de contexto vivo.** Lê isso antes de qualquer mudança relacionada ao plano de marketing.
> Origem: `planomarketingassiscarrer.pdf` (raiz do repo).
> Última atualização: **2026-08-13** · Toggle EN/PT · Fix de contraste dark mode (bug sistêmico em `var(--white)`) · Ajustes mobile · Remoção de travessões em todos os textos

---

## 🤖 Para o próximo agente (LEIA PRIMEIRO)

**1. Antes de qualquer mudança ligada a marketing/tracking/conteúdo:**
- Lê este arquivo inteiro
- Confere a seção **Status Atual** pra saber o que está vivo
- Confere **Pendências** pra saber o que falta

**2. Depois de qualquer mudança:**
- Atualiza a seção **Status Atual** (se mudou estado)
- Adiciona uma entrada nova no **Histórico** (formato abaixo)
- Atualiza **Última atualização** no topo deste arquivo
- Inclui este arquivo no mesmo commit das suas mudanças

**3. Convenções:**
- Datas no formato `YYYY-MM-DD`
- Sempre referencia commit SHA quando aplicável
- Status com emoji: ✅ feito · ⏳ pendente · 🟡 parcial · ❌ bloqueado
- Manter este arquivo sob 600 linhas — se passar, mover histórico antigo pra `MARKETING-LOG-ARCHIVE.md`

---

## ⚡ Status Atual (snapshot)

| Sistema | Status | Detalhes |
|---------|--------|----------|
| Site reposicionado | ✅ | 6 páginas: index, residencial, comercial, processo, lp-apartamento, lp-comercial |
| Dark mode | ✅ | `prefers-color-scheme: dark` em todas as páginas |
| GTM | ✅ | `GTM-P6F5BN7Z` |
| GA4 | ✅ | `G-DDECLK9VYV` (conta arquitetura@) |
| Meta Pixel | ✅ | `2037009416852160` |
| Google Ads tag | ✅ | `AW-18186496405` (conta arquitetura@assiscarrer.com) |
| Conversão Lead Form | ✅ | Rótulo `F0xNCI3x6bIcEJXT_99D` · valor R$ 2.500 BRL |
| Eventos custom | ✅ | `lead_form_submit`, `whatsapp_click`, `scroll_75` |
| Campanha Google Ads | ✅ | "Search · Residencial+Comercial SJC" · Search puro · R$ 25/dia · 6 conv. a R$27/lead (14 dias) |
| Crédito Google Ads | ✅ | R$ 880 vinculado (cobre ~35 dias) |
| Google Meu Negócio | ✅ | Categoria + descrição + 12 serviços + atributos + WhatsApp |
| Reviews GMN | 🟡 | 2/10 (faltam 8 pra meta semana 1) |
| Cases nomeados site | ✅ | 5 residencial (Believe, Celebration, Enjoy Aquarius, Real Ville, Portal Victoria) + 2 consultórios + Sapore upgrade |
| Instagram | 🟡 | 7k seguidores · bio precisa update conforme plano (ver pendências) |
| Meta Ads | ⏳ | Não iniciado · Pixel pronto pra ligar |
| Teste A/B LP mobile | 🟡 | A = `lp-apartamento.html` (controle) · B = `lp-apartamento-v2.html` (Apple-style, mobile-first). Split 50/50 via `ab-test.js`. Métrica: msgs WhatsApp recebidas. Variante inferida pela frase do prefill (sem código visível) |
| Toggle EN/PT | ✅ | `i18n.js` (novo) em todas as 7 páginas públicas (index, residencial, comercial, processo, lp-apartamento, lp-comercial, lp-apartamento-v2). Idioma padrão segue `navigator.language` do visitante; override manual persiste em `localStorage`. `proposta-assis-carrer.html` (proposta privada de cliente, bloqueada no robots.txt) ficou fora do escopo — não é página de navegação pública |
| Dark mode contraste | ✅ | Bug sistêmico corrigido: `var(--white)` era usado tanto como token de superfície reativo quanto como "branco literal" sobre fundos sempre-escuros (foto do hero, seções navy) — no dark mode isso invertia pra quase-preto. Afetava os CTAs do hero, botão Contato do menu, ícone hambúrguer e o menu mobile inteiro no `index.html`. Também corrigidas 3 páginas (`residencial`, `comercial`, `processo`) que não tinham CSS de dark mode próprio nenhum (testemunhos e cases com texto navy sobre fundo quase-preto) |
| Travessões no copy | ✅ | Removidos de todos os textos visíveis nas 7 páginas públicas (títulos, parágrafos, alt text, meta tags) — reescritos com vírgula, dois-pontos ou frases separadas |

---

## 🔑 Inventário Técnico

### Contas e acessos

| Sistema | Conta | ID |
|---------|-------|-----|
| Google Ads ATIVO | `arquitetura@assiscarrer.com` | `346-764-6872` |
| Google Ads legado | `gabrielamaral217@gmail.com` | `745-620-3056` — não usar |
| GA4 propriedade ATIVA | `www.assiscarrer-arquitetura.com` (conta arquitetura@) | `G-DDECLK9VYV` |
| GA4 propriedade legada | `assiscarrer` (conta gabrielamaral217@) | `G-TXWFQ3D6PQ` — não usar, fica órfã |
| GTM container | site assiscarrer-arquitetura | `GTM-P6F5BN7Z` |
| Meta Business | (Business Manager Assis Carrer) | Pixel `2037009416852160` |
| GitHub repo | gabrielamaral217/assiscarrer-site | branch `main` (GitHub Pages) |
| Site público | https://www.assiscarrer-arquitetura.com | CNAME no repo |
| Instagram | @assiscarrer.arq | 7k+ seguidores |

### WhatsApp e contato

| Item | Valor |
|------|-------|
| Número oficial WhatsApp | `+55 12 98153-4551` → `5512981534551` |
| E-mail comercial | `arquitetura@assiscarrer.com` |
| Endereço oficial | R. Dr. Orlando Feirabend Filho, 230 · Centro Empresarial Aquarius · Sala 709 · Torre B · Jd. Aquarius · São José dos Campos/SP · 12246-190 |
| Link review GMN | `https://g.page/r/CSoXeC74khRsEBM/review` |

### Campanha Google Ads ativa

| Campo | Valor |
|-------|-------|
| Nome | Arquiteto São José dos Campos |
| Tipo | Performance Max |
| Orçamento | R$ 25/dia · R$ 760/mês máximo |
| Lance | Maximizar conversões |
| Conversão alvo | Enviar formulário de lead (`F0xNCI3x6bIcEJXT_99D`) · R$ 2.500 |
| Localizações | SJC + Taubaté + Caçapava + Jacareí |
| Temas (10) | arquitetura, projeto arquitetonico, arquitetura de interiores, arquitetura residencial, projeto de arquitetura de interiores, serviços de arquitetura, arquitetos comerciais, arquiteto sjc, reforma apartamento sjc, arquiteto aquarius |
| Anúncio | 4 títulos + 2 descrições + 9 imagens + 3 logos + telefone |
| Status | Qualificada → Ativa após aprovação (~1h) |

### Imagens-chave em produção (`/site/images/portfolio/`)

**Heros e Sobre:**
- `hero-celebration-life-vista.jpg` — hero da home (Cobertura Celebration Life)
- `hero-apto-integrado-3amb.jpg` — large card portfolio home
- `hero-sapore-balcao.jpg` — hero página comercial
- `sobre-escritorio-assis-carrer.jpg` — seção Sobre

**Cases residencial (nomeados):**
- `case-celebration-sala.jpg` — Família Andrade · Celebration Life
- `case-enjoy-aquarius-sala.jpg` — Camila & Pedro · Enjoy Aquarius (⭐ keyword crítica)
- `case-believe-jantar.jpg` — Mariana & Lucas · Believe
- `case-real-ville-hall.jpg` — Família Costa · Real Ville
- `case-portal-victoria-sala.jpg` — Beatriz & Rafael · Portal Victoria
- `case-sala-jantar-azul.jpg` — Apartamento em Floradas (anônimo)

**Cases comercial:**
- `case-sapore-greenwall.jpg` — Sapore Gelato Caffè (seção Gastronomia)
- `case-consultorio-boutique.jpg` — Consultório terracota (psicologia/terapia)
- `case-consultorio-premium.jpg` — Clínica premium (madeira + dourado, Aquarius)

**Pastas com material extra (não usadas no site, disponíveis):**
- `images/00.FOTOS OBRAS/` — 104 fotos profissionais em 6 pastas de clientes nomeados
- `images/portfolio/Selecionadas/` — 32 fotos Instagram + subpasta `google/` com 23 fotos GMN
- `images/comercial/` — 26 fotos (Sapore + 2 consultórios)
- Vídeo: `00.FOTOS OBRAS/VIDEO APRESENTACAO - ASSISCARRER.mp4` (34MB · não embedado por enquanto)

### Texto e copy padronizados

| O quê | Versão oficial |
|-------|----------------|
| Tempo de mercado | **7 anos** (ou "desde 2019") — NUNCA "6 anos" |
| Projetos entregues | **100+** |
| Gênero das sócias | Feminino — "as arquitetas" (Flavia + Beatriz) |
| Nome com acento | **Flavia** (sem acento) |
| CTA principal | **"Orçamento em 24h"** |
| Endereço base | Centro Empresarial Aquarius · Sala 709 · Torre B |

---

## 🎯 Pendências

### Curto prazo (esta semana)
- [ ] Disparar campanha de reviews (3 mensagens hoje, escalar até 10/semana 1)
  - Template em `MARKETING-LOG.md` ou recuperar da conversa de origem
  - Meta: 10 reviews em 7 dias, 30 em 90 dias (Parte 5.4 do plano)
- [ ] Atualizar bio Instagram conforme Parte 3 do plano:
  ```
  Assis Carrer Arquitetura
  Residencial + Comercial em SJC
  100+ projetos | 7 anos | cases: Sapore Gelato, etc
  Orçamento em 24h ↓
  [link da landing]
  ```
- [ ] Criar 6 destaques fixos no Instagram (Apartamentos, Casas, Comercial, Processo, Depoimentos, Orçamento)
- [ ] Acompanhar primeiros 7 dias da campanha Google Ads (sem mexer)

### Médio prazo (próximos 30 dias)
- [ ] Subir mais 20+ fotos no GMN (usar pasta `images/00.FOTOS OBRAS/`)
- [ ] Ligar campanha Meta Ads (Pixel já está rodando · faltam criativos)
- [ ] Calendário editorial Instagram 12 posts/mês (Parte 3 do plano)
- [ ] Configurar WhatsApp Business com mensagens automáticas (saudação + ausência)
- [ ] Pedir 30 reviews 5★ no Google

### Longo prazo (60-90 dias)
- [ ] Avaliar performance Google Ads + decidir escalar ou migrar pra Modo Expert
- [ ] Considerar página de cases dedicada (decisão protelada, ver histórico abaixo)
- [ ] Avaliar contratação de social media júnior (R$ 1.500-2.500/mês conforme plano)
- [ ] Conversion API do Meta Pixel (server-side)
- [ ] Embedar vídeo de apresentação (subir no YouTube e usar iframe)

### Pendências do plano original NÃO implementadas
- Página `/cases` filtrável (usuário decidiu manter cases dentro de /residencial)
- Página `/blog` (decisão postergada)
- 3 depoimentos em vídeo (substituídos por placeholders textuais com nomes fictícios — usuário não tem vídeo no momento)

---

## 📅 Histórico (ordem cronológica reversa)

### 2026-08-13 · Toggle EN/PT · Fix de contraste dark mode · Ajustes mobile · Remoção de travessões
**Pedido:** revisar o site com foco em mobile — (1) tirar o uso de travessão dos textos, (2) revisar contraste no dark mode (textos e logos), (3) manter o padrão de idioma do navegador com botão de troca EN/PT no menu, (4) revisar e melhorar a experiência mobile.

**1. Travessões removidos (commits `d88a22e`...`d9871c6`):** todo texto visível (títulos, parágrafos, blockquotes, alt, meta description/og) nas 7 páginas públicas reescrito sem `—`/` - `, usando vírgula, dois-pontos ou frases separadas. Os únicos `—` remanescentes no repo estão dentro de comentários CSS (não é texto visível).

**2. Bug sistêmico de contraste no dark mode encontrado e corrigido:** `var(--white)` era usado em `style.css` (e nos `:root` locais de `lp-apartamento.html`/`lp-comercial.html`) tanto como token de **superfície reativa** (correto: inverte pra escuro no dark mode, ex. cards) quanto como **"branco literal" sobre fundo sempre-escuro** (foto do hero, seções navy fixas) — nesse segundo uso, o dark mode invertia o texto pra quase-preto sobre fundo escuro. Confirmado via Playwright headless (`prefers-color-scheme: dark`) antes/depois:
- Homepage: botões do hero ("Orçamento em 24h", "Ver Projetos"), botão Contato do menu (não rolado), ícone hambúrguer e todo o menu mobile ficavam **quase invisíveis** em dark mode. Corrigido trocando pra `#fff` literal nesses pontos específicos (mantendo os usos corretos de superfície reativa intactos).
- `residencial.html`, `comercial.html`, `processo.html`: essas 3 páginas não tinham **nenhum** CSS de dark mode próprio — testemunhos, FAQ e cards de case ficavam com texto navy sobre fundo quase-preto. Corrigido usando os tokens reativos já existentes em `style.css` (`var(--text)`, `var(--text-muted)`, `var(--white)`).
- `lp-apartamento.html`/`lp-comercial.html`: botão "Orçamento em 24h" do header, botão de submit do formulário e o número do step de processo também sofriam do mesmo bug (`var(--white)` local dessas páginas). Corrigido.
- Bug JS pré-existente (não relacionado ao dark mode) encontrado de bônus nas duas LPs: o script do lightbox de galeria rodava antes do HTML do modal existir no DOM (`getElementById` retornava `null`), quebrando com `TypeError` e travando o fechamento do lightbox. Corrigido envolvendo o script em `DOMContentLoaded`.

**3. Toggle EN/PT implementado (novo arquivo `i18n.js`):** idioma padrão detectado via `navigator.language` do visitante (inglês → EN, qualquer outro → PT, que é o idioma nativo já escrito no HTML). Botão no menu (`data-lang-toggle`) troca manualmente e o app **lembra a escolha** em `localStorage` daí em diante — exatamente como pedido ("sempre respeitando o padrão do navegador" como default, com override manual). Tradução completa (inglês natural, não literal) das 7 páginas públicas: index, residencial, comercial, processo, lp-apartamento, lp-comercial, lp-apartamento-v2. `proposta-assis-carrer.html` ficou de fora — é uma proposta privada de cliente (bloqueada no `robots.txt`, sem nav/menu), não faz parte da experiência de navegação pública do site.

**4. Ajustes de mobile UX:**
- Corrigido zoom automático do iOS Safari ao focar campos de formulário (`font-size` estava abaixo de 16px em vários `<input>`/`<select>` no mobile).
- Corrigido o botão flutuante do WhatsApp aparecendo por cima do menu mobile aberto (agora esconde via classe `body.nav-open`).
- Aumentado o alvo de toque do ícone hambúrguer e do botão de idioma pra ficar mais perto de 44px.
- Adicionado `env(safe-area-inset-*)` no botão do WhatsApp pra não ficar colado na borda em iPhones com notch/gesture bar.
- Corrigido o header das LPs (`lp-apartamento`/`lp-comercial`) que ficava sem espaço pro novo botão de idioma em telas pequenas (CTA saindo da viewport) — reorganizado em container flexível.

**Commits:** `d88a22e` (infra `i18n.js` + fixes de contraste em `style.css` + `index.html` completo) → `4920200` (`processo.html` + `lp-apartamento-v2.html`) → `4c70f38` (`comercial.html`) → `1ef4ce2` (`residencial.html`) → `d9871c6` (`lp-apartamento.html` + `lp-comercial.html`).

**Validado:** teste headless (Playwright/Chromium) em todas as 7 páginas: zero erros de JS no console, toggle EN/PT funcional em todas, zero overflow horizontal em mobile (390px), contraste em dark mode confirmado via computed style antes/depois do fix.

### 2026-07-06 · Review Search (14 dias) · Otimizações site · Análise keywords
**Campanha Search "Search · Residencial+Comercial SJC" — 22 jun a 5 jul 2026:**

| Métrica | Valor |
|---|---|
| Impressões | 899 |
| Cliques | 70 |
| CTR | **7.79%** (benchmark: 3-5%) |
| CPC médio | R$ 2.35 |
| Custo total | R$ 164.16 |
| Conversões | **6** |
| Custo/conversão | **R$ 27.36** |
| Taxa de conversão | 8.57% |

**Dispositivos:**
- Smartphones: 49 cliques · R$119.75 · **6 conversões (12.24%)** ← 100% das convs
- Computadores: 21 cliques · R$44.41 · **0 conversões (0%)**

**Keywords ativas (com gasto):**
- `"arquiteto são josé dos campos"` → 45 cliques · R$104.54 · CTR 7.99%
- `"arquiteto sjc"` → 25 cliques · R$59.62 · CTR 7.55%
- `"arquiteto para apartamento"`, `"arquiteto residencial sjc"`, `"reforma apartamento sjc"` → **R$0 · 0 cliques** (sem volume local suficiente em phrase match)

**Termos reais que ativaram os anúncios:** arquitetura sjc · arquiteto sjc · arquiteto sao jose dos campos · arquitetos sjc · arquiteta sao jose dos campos · escritorios de arquitetura sjc · arquiteta sjc

**Concorrência (leilão):**
- Você: 47.39% parcela de impressões · 30.51% posição 1
- robertafelix.com: 16.47% · **46.34% posição 1** (supera você em 39.76% dos casos — principal concorrente)
- alebrandiniarquitetura.com.br: 10.84%

**Página de destino:** 62 dos 70 cliques vão para a homepage (assiscarrer-arquitetura.com/). `residencial.html` aparece com 39 impressões automáticas pelo Google mas 0 cliques.

**GA4 (últimos 30 dias):**
- 544 usuários ativos · 532 novos · 34s engajamento médio
- google/cpc: **488 usuários (89.7%)** — campanha é o único motor de tráfego
- Páginas: LP apartamento 618 views (60.3% rejeição) · Homepage 192 views (36.7% rejeição)
- Cidades: SJC 236 · SP 100 · Jacareí 51 · Taubaté 40

**Mudanças no site (mesma sessão):**
- `processo.html`: removida FAQ "Quanto custa um projeto de arquitetura com vocês?"
- `index.html`: hero otimizado 6.6MB → 128KB WebP (-98%) com `<picture>` + preload. LCP esperado: de ~7s para ~2-3s.
- Imagens geradas: `images/portfolio/opt/hero-celebration-life-vista.webp` e `.jpg`
- Favicon: adicionado em todas as 8 páginas (`favicon-32.png` + `apple-touch-icon.png`)

**Recomendações keywords (pendente aplicar no Ads):**
- Adicionar: `"arquiteta são josé dos campos"` (já aparece nos termos reais — sem controle de lance)
- Adicionar: `"escritório de arquitetura sjc"` (aparece nos termos reais — intenção diferente)
- Substituir as 3 keywords zeradas por: `"projeto arquitetônico sjc"`, `"projeto de interiores sjc"`, `"arquitetura comercial sjc"`
- Considerar: `"arquiteto jacareí"` e `"arquiteto taubaté"` (volume menor, CPC mais barato)

### 2026-06-24 · Refino dark mode + UX da LP v2 (variante B)
**Contexto:** ~100% do tráfego é mobile. LP v2 (`lp-apartamento-v2.html`) é a variante B do teste A/B — microsite estilo Apple (scroll-driven, carrosséis horizontais, sticky topbar). Feedback do cliente apontou problemas visuais, principalmente no dark mode.

**Ajustes feitos:**
- **Reveal animation acelerada** (`animation-range: entry 0% cover 30%` → `cover 16%`, translateY 20px → 14px). Era a causa raiz das queixas "texto escuro / botão desativado": elementos ficavam muito tempo em baixa opacidade enquanto o usuário rolava, e gradiente/botão pareciam quebrados a meio caminho.
- **Gradiente warm do dark mode clareado** (não termina mais em marrom escuro `#966442`) → títulos longos ("Comece pelos destaques.", "Casa.") legíveis ponta a ponta.
- **Botão WhatsApp reforçado** (light + dark): gradiente verde + sombra/glow. Antes era verde chapado `#25D366` e, esmaecido pelo reveal, parecia desativado.
- **Bordas "liquid glass" nas células do dark mode** (carrosséis + Instagram): highlight superior + borda colorida + glow externo suave, dando profundidade translúcida iOS.
- **Removida a stat "4 cidades do Vale do Paraíba"** (a pedido do cliente). Stats agora: 100+ apartamentos · 7 anos.
- Verificado: logo do header troca corretamente no dark (versão negativo/branca) — queixa anterior era cache.

**Estado anterior (mesma sessão, já commitado):** hero "Seu lar. Sua história.", seção Reviews (Google 4,9★), seção Instagram, seção das arquitetas (Flavia e Beatriz — sócias, não mãe/filha), imagens otimizadas via sharp (-91%, LCP ~3,7s), 4 cantos arredondados em todas as fotos.

> **Histórico anterior a 2026-06-24** (Pmax pausada, reviews #2-#4, tracking WhatsApp, Search Console, sitemap, migração GA4, sprints iniciais) movido pra `MARKETING-LOG-ARCHIVE.md` em 2026-08-13 pra manter este arquivo sob 600 linhas.

---

## 📐 Plano original — referência rápida

Resumo do `planomarketingassiscarrer.pdf` pra evitar precisar abrir o PDF toda vez:

**Meta 90 dias:**
- Origem leads: 30% indicação / 40% pago / 30% orgânico (vs 100% indicação hoje)
- Leads qualificados: 30+/mês
- Projetos fechados: 3-5/mês
- CPL: < R$ 80
- ROI: 20x a 50x

**Investimento sugerido:** R$ 2.500-5.000/mês marketing
- Meta Ads: 60% (R$ 1.500)
- Google Ads: 30% (R$ 750)
- Reserva/boost orgânico: 10% (R$ 250)

**Segmentos foco:**
1. Residencial Jovem: casais 28-40, renda R$ 20-60k/mês, primeiro/segundo imóvel
2. Comercial F&B: empreendedores 28-50 (cafeteria, restaurante, gelateria, boutique)

**Bairros prioritários (Tier A/B):**
- Aquarius, Urbanova, Esplanada do Sol, Floradas, Jd. das Indústrias, Bosque dos Eucaliptos

**Cases-âncora:**
- Sapore Gelato Caffè, Portuga Bake Shop (mencionados como projetos reais, não depoimentos)

**Ticket médio:**
- Residencial: R$ 25.000
- Comercial F&B: R$ 80.000+

---

## 🔧 Comandos úteis

```bash
# Ver últimos commits
cd /Users/gabriel.amaral/Site-AC/site && git log --oneline -10

# Validar que IDs de tracking estão corretos
grep -c "GTM-P6F5BN7Z" *.html        # esperado: 6
grep -c "G-TXWFQ3D6PQ" *.html         # esperado: 6
grep -c "2037009416852160" *.html     # esperado: 6
grep -c "AW-18186496405" *.html       # esperado: 12 (gtag config + send_to)
grep -c "F0xNCI3x6bIcEJXT_99D" *.html # esperado: 5 (LPs) + 1 (main.js)

# Confirmar que NÃO sobrou tag antiga
grep -r "AW-18185024974\|HI92CLzb3LIcEM7rpd9D" *.html main.js
# (deve não retornar nada)

# Servir local
npx serve -l 3000 .
```

---

## 🚦 Próximos passos imediatos (se for retomar agora)

Em ordem de impacto:

1. **Disparar campanha de reviews** (15 min · cada review = +10% CTR nos ads)
   - Listar 10 clientes mais felizes
   - Enviar mensagem WhatsApp personalizada com link `g.page/r/CSoXeC74khRsEBM/review`
   - Lote: 3 hoje · 3 amanhã · 4 sexta

2. **Atualizar bio Instagram** (5 min · destrava tráfego orgânico)

3. **Aguardar 7 dias** sem mexer na campanha Google Ads (algoritmo precisa aprender)

4. **Em 7-14 dias:** revisar primeiras conversões + ajustar se necessário

---

*Mantenha este arquivo atualizado. É o único contexto que o próximo agente vai ter.*
