# 📋 Plano de Marketing — Log de Execução

> **Arquivo de contexto vivo.** Lê isso antes de qualquer mudança relacionada ao plano de marketing.
> Origem: `planomarketingassiscarrer.pdf` (raiz do repo).
> Última atualização: **2026-05-24** · Commit base: pós SEO snippet update

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
| Campanha Google Ads | ✅ | "Arquiteto São José dos Campos" · Performance Max · R$ 25/dia |
| Crédito Google Ads | ✅ | R$ 880 vinculado (cobre ~35 dias) |
| Google Meu Negócio | ✅ | Categoria + descrição + 12 serviços + atributos + WhatsApp |
| Reviews GMN | 🟡 | 2/10 (faltam 8 pra meta semana 1) |
| Cases nomeados site | ✅ | 5 residencial (Believe, Celebration, Enjoy Aquarius, Real Ville, Portal Victoria) + 2 consultórios + Sapore upgrade |
| Instagram | 🟡 | 7k seguidores · bio precisa update conforme plano (ver pendências) |
| Meta Ads | ⏳ | Não iniciado · Pixel pronto pra ligar |

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

### 2026-05-27 · Google Ads: +2 descrições no grupo de recursos
- **Antes:** 2 descrições, qualidade "Ruim".
- **Depois:** 4 descrições, qualidade do anúncio agora deve subir pra "Excelente" (Google: +6% conversões médias).
- **Descrições novas:**
  1. "Qualidade no projeto, investimento na medida da sua realidade. Atendimento em SJC." (82/90)
  2. "Projeto autoral que valoriza seu imóvel. Apartamento, casa ou comercial em SJC." (79/90)
- **Ainda pendente pra qualidade Excelente:** Sitelinks (0), mais 1 imagem horizontal + 1 quadrada + 2 verticais (4:5).

### 2026-05-27 · Google Ads: URL final trocada home → lp-apartamento.html
- **Problema descoberto na review:** GA4 mostrou que tráfego do canal "Cross-network" (Google Ads) tinha tempo médio de **4 segundos** vs Organic Search com **3min 54s**. Usuário paga, cai na home genérica, não vê oferta direta e sai.
- **Investigação no painel Google Ads:**
  - URL final declarada no grupo de recursos: `https://www.assiscarrer-arquitetura.com/` (home)
  - Expansão de URL final: ATIVADA (mas sem volume ainda pra explorar)
  - **Qualidade do anúncio: "Ruim"** (faltam descrições adicionais, sitelinks)
- **Ação:** URL final alterada de `/` para `/lp-apartamento.html` (residencial = maior volume em SJC: Aquarius, Urbanova).
- **Status:** grupo de recursos "Em análise" (Google revisa em até 24h).
- **Próximos fixes pendentes na campanha:**
  - Adicionar 4 sitelinks (Apartamentos, Comercial, Processo, Falar agora)
  - Adicionar +2 descrições pra fechar qualidade "Excelente" (atual: 2/4)
  - Acompanhar amanhã se o tempo médio do canal Cross-network melhora.

### 2026-05-27 · Review de resultados + fix de tracking (WhatsApp como conversão)
- **Google Ads (24-27 mai, 4 dias):** 2.829 impressões · 120 cliques · CTR 4,24% (alto, média Pmax é 1-2%) · CPC R$ 0,76 · Custo R$ 91,63 · Pontuação otimização 91,8% · **Conversões: 0** apesar de leads reais chegando no WhatsApp.
- **Diagnóstico:** Em Conversões → Páginas da Web da ação "Enviar formulário de lead (1)" → "Você ainda não tem dados". Causa raiz: `trackConversion()` só era chamado no submit do formulário; cliques no botão flutuante de WhatsApp e nos CTAs `wa.me` disparavam só evento custom `whatsapp_click` (não convertia).
- **Fix em `main.js` (commit `76d9d24`):** handler de clique em `a[href*="wa.me"]` agora chama `trackConversion()` em paralelo com `trackEvent('whatsapp_click', ...)`. Mesmo `send_to` (`AW-18186496405/F0xNCI3x6bIcEJXT_99D`) e mesmo valor R$ 2.500.
- **Pendências detectadas no painel de Conversões:**
  - Meta "Solicitar cotação" com status **Configuração incorreta** (auto-criada pelo Google, sem label no site) — deletar pra não poluir relatórios.
  - Existem 2 conversões com nome "Enviar formulário de lead": uma vem do GA4 (auto-importada), outra é a manual com nosso label. A do GA4 conta `lead_form_submit`; a manual conta `gtag('event', 'conversion', ...)`. Pode fragmentar atribuição — avaliar desativar a do GA4.

### 2026-05-24 · Search Console verificada + sitemap.xml + robots.txt
- **Search Console:** propriedade URL prefix `https://www.assiscarrer-arquitetura.com/` verificada via arquivo HTML (`googleb6efdc18273f3563.html` no root — NÃO REMOVER, Google revalida).
- **sitemap.xml:** declarado com 4 URLs (home, residencial, comercial, processo). Submetido com sucesso — Google descobriu as 4. Status no painel: Sitemaps → "Sucesso".
- **robots.txt:** Allow all + Disallow LPs de paid (`lp-apartamento.html`, `lp-comercial.html`) e `proposta-assis-carrer.html`. Declara sitemap. Motivo de bloquear LPs: evitar competição com pages principais no orgânico — LPs servem só pra paid.
- **Indexação manual solicitada:** home (`/`) já na fila prioritária. Faltam residencial/comercial/processo (limite 10/dia, então pode fazer aos poucos).
- **Bug pre-existente detectado:** `/refund-policy` aparece como 404 desde 11/15/25 (template de e-commerce antigo). Validate Fix clicado — Google vai dropar do índice.

### 2026-05-24 · SEO snippet do Google: título + og:image + Schema Organization
- **Problema:** Google exibindo nos resultados "Assis Carrer Arquitetura | Design de interiores" (título antigo em cache) + imagem genérica de padrão ao lado (porque não tínhamos `og:image`).
- **Mudanças no `index.html`:**
  - `<title>` → `Assis Carrer | Escritório de Arquitetura em São José dos Campos`
  - `<meta name="description">` → começa com "Escritório de arquitetura em São José dos Campos..."
  - Adicionados: `link rel="canonical"`, `og:url`, `og:image` (case-believe-jantar.jpg), `og:image:width/height/alt`, twitter card completo
  - Adicionado bloco `application/ld+json` com `LocalBusiness` (logo, telefone, endereço SJC, áreas atendidas, Instagram)
- **Efeito esperado:** próximo crawl do Google (dias a semanas) deve atualizar o snippet com o título novo + usar o logo declarado no Schema + a foto Believe como thumb. Pode-se acelerar via Search Console → Inspecionar URL → Solicitar indexação.
- **Por que demora:** Google decide independentemente quando recrawlear e pode até reescrever o título de novo se achar que content interno bate melhor. Schema.org Organization é o caminho mais confiável pra fixar logo + nome corretos.

### 2026-05-24 · Migração GA4: G-TXWFQ3D6PQ → G-DDECLK9VYV
- **O quê:** descoberto que o Google Ads (conta arquitetura@) criou automaticamente uma NOVA propriedade GA4 (`G-DDECLK9VYV`) durante o signup da campanha. O site ainda estava com a GA4 antiga (`G-TXWFQ3D6PQ` da conta gabrielamaral217@), e por isso a nova estava vazia.
- **Solução:** substituídas 12 ocorrências em 6 páginas. main.js não tinha refs ao ID GA4 (usa só lead_form_submit que é evento custom).
- **Resultado:** Tracking 100% consolidado na conta arquitetura@assiscarrer.com — Google Ads, GA4, conversão Lead Form Submit, tudo no mesmo lugar.

### 2026-05-24 · Hero crop mais agressivo (teto persistia)
- **O quê:** primeiro ajuste (scale 1.55) não foi suficiente — teto ainda dominava em mobile e desktop. Agora:
  - Mobile: `transform: scale(2.1) translateY(18%)` + `object-position: 50% 100%` + `transform-origin: center bottom`
  - Desktop: `transform: scale(1.25) translateY(8%)` + `object-position: 50% 100%` + `transform-origin: center bottom`
- **Por quê:** a foto Celebration Life é landscape com teto + linear LED ocupando ~40% superior. Sem scale agressivo + translateY o teto sempre aparecia no enquadramento vertical mobile.

### 2026-05-24 · Fix mobile: WhatsApp float fora da viewport + hero foco no chão
- **O quê:**
  - Adicionado `overflow-x: hidden` + `width: 100%; max-width: 100vw` no `html` e `body` — corrige bug do mobile onde algum elemento (provavelmente uma imagem ou seção larga) criava scroll horizontal e jogava o `.wa-float` pra fora do viewport
  - Hero da home: `object-position` ajustado e media query mobile com `transform: scale(1.55)` + `object-position: 50% 85%` pra mostrar o sofá curvo + ilha canelada dominando (em vez do teto)
- **Por quê:** user testou no celular, WhatsApp aparecia "fora da coluna". Hero mostrava muito teto + pouca sala.

### 2026-05-24 · Fix contraste: headlines em itálico sobre imagens
- **O quê:** Hero `<em>` (Sua casa em **identidade**, Seu ponto é a **maior mídia**, etc) tinha cor sand muito apagada sobre o overlay das fotos. Aplicado em todas as 4 páginas com background image (index, residencial, comercial, processo, lp-comercial):
  - Cor: `var(--sand)` → `#f0c896` (mais claro, mais vivo)
  - Peso: normal → `font-weight: 500`
  - Sombra: `text-shadow: 0 2px 14px rgba(0,0,0,0.6), 0 0 1px rgba(0,0,0,0.8)`
- Mesma melhoria aplicada nas linhas `.hero-proof` / `.res-hero .proof` / `.com-hero .proof` ("100+ PROJETOS · 7 ANOS · AQUARIUS..." etc).
- **Por quê:** copper escuro sobre fotos com tons médios virava quase invisível em mobile.

### 2026-05-24 · Migração tracking pra conta arquitetura@
- **Commit:** `4dfd369`
- **O quê:** Substituídas tags da conta antiga (gabrielamaral217 / AW-18185024974) pelas da conta nova (arquitetura@ / AW-18186496405). Nova conversão Lead Form Submit criada com rótulo `F0xNCI3x6bIcEJXT_99D`.
- **Por quê:** Crédito R$ 880 + campanha Performance Max estão na conta nova. Tracking precisava ser da mesma conta pra Google Ads ler conversões.
- **Impacto:** 7 arquivos · 13 substituições AW + 6 substituições de rótulo.

### 2026-05-24 · Campanha Google Ads criada e ativa
- **O quê:** Campanha Performance Max "Arquiteto São José dos Campos" criada na conta `arquitetura@assiscarrer.com`. Orçamento R$ 25/dia, 4 cidades (SJC + Taubaté + Caçapava + Jacareí), 10 temas de palavras-chave, 9 imagens, 3 logos.
- **Status:** Qualificada (aguardando aprovação Google ~1h) · não pausada · crédito R$ 880 vinculado.

### 2026-05-24 · Depoimentos: pessoas fictícias em vez de empresas
- **Commit:** `4df0153`
- **O quê:** Trocados 3 depoimentos que citavam "Sapore Gelato Caffè" como autor por pessoas fictícias (Bruno F., Carlos R.) com profissão "Cafeteria em SJC". Tom natural reescrito.
- **Por quê:** Evitar exposição da marca dos clientes em citações.

### 2026-05-24 · "6 anos" → "7 anos" em todas as referências
- **Commit:** `3dccaf7`
- **O quê:** 19 ocorrências de "6 anos" trocadas por "7 anos" em 7 arquivos. Bate com 2026-2019 = 7 e com a bio do Instagram.

### 2026-05-24 · Navbar inconsistente + Sapore home upgrade
- **Commit:** `47e41e0`
- **O quê:** Padronizado menu de navegação nas 4 páginas (Sobre · Residencial · Comercial · Processo · Portfólio · Contato). Foto Sapore da home trocada por versão render premium nova (green wall).

### 2026-05-24 · Cases comerciais novos (consultórios)
- **Commit:** `b36bc87`
- **O quê:** 
  - Hero home substituído por Cobertura Celebration Life
  - Foto escritório Assis Carrer adicionada na seção Sobre
  - 6 cases residencial reformulados com nomes fictícios + empreendimentos reais
  - LP-apartamento: 3 cards atualizados
  - Hero `/comercial` upgraded para Sapore CENA_05
  - 2 cases consultórios adicionados (terracota + premium)
  - Seção "Lojas & Boutiques" expandida pra incluir Consultórios

### 2026-05-24 · Refresh visual: 14 fotos premium
- **Commit:** `1284383`
- **O quê:** 14 fotos profissionais novas substituindo Wix legacy. Cleanup de 19 imagens antigas.

### 2026-05-24 · Sprint 3: páginas residencial, comercial, processo
- **Commits:** Sprint 2 e Sprint 3 incrementais (ver `git log --oneline`)
- **O quê:** 3 páginas novas criadas, navbar atualizada, SEO local por página.

### 2026-05-24 · Sprint 1: tracking + reposicionamento + form
- **Commits:** GTM/GA4/Meta Pixel/Google Ads instalados, hero reposicionado, formulário com WhatsApp, dark mode.

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
