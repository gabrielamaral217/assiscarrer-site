# 📋 Plano de Marketing — Log de Execução

> **Arquivo de contexto vivo.** Lê isso antes de qualquer mudança relacionada ao plano de marketing.
> Origem: `planomarketingassiscarrer.pdf` (raiz do repo).
> Última atualização: **2026-11-09** · Portuga Bake Shop nas referências · Revisão do anúncio de Black Friday no Ads · Claude conectado ao Google Ads (API) · Faixa de Black Friday no topo do site · Bairros de toda SJC · Black Friday com a identidade da marca · Páginas de SJC para IA (FAQ, dados estruturados, llms.txt) · LP de Black Friday (carrossel maior, logos de clientes, botão para o site) · Otimização mobile antes do Meta Ads (fotos leves, PT como padrão, fontes woff2, logo branco em fundo escuro) · Correção de atribuição GA4 + `canal.js`

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
| Canal no WhatsApp | ✅ | `canal.js` em todas as 7 páginas públicas: quem chega com `gclid`/`gbraid`/`wbraid` manda "Olá, vi o anúncio no Google!"; com `fbclid`/`utm_source` Meta manda "Olá, vi o anúncio de vocês!". Guardado 30 dias em `localStorage`. Visita sem anúncio mantém a frase original (preserva a leitura do A/B) |
| Campanha Google Ads | ✅ | "Search · Residencial+Comercial SJC" · Search puro · R$ 25/dia · 6 conv. a R$27/lead (14 dias) |
| Crédito Google Ads | ✅ | R$ 880 vinculado (cobre ~35 dias) |
| Google Meu Negócio | ✅ | Categoria + descrição + 12 serviços + atributos + WhatsApp |
| Reviews GMN | 🟡 | 2/10 (faltam 8 pra meta semana 1) |
| Cases nomeados site | ✅ | 5 residencial (Believe, Celebration, Enjoy Aquarius, Real Ville, Portal Victoria) + 2 consultórios + Sapore upgrade |
| Instagram | 🟡 | 7k seguidores · bio precisa update conforme plano (ver pendências) |
| Meta Ads | ⏳ | Não iniciado · Pixel pronto pra ligar |
| Visibilidade em IA (GEO) | 🟡 | 2026-11-04: páginas `arquiteta-sao-jose-dos-campos.html` e `projeto-de-interiores-sjc.html` com perguntas frequentes (FAQPage), cartão do escritório completo no `index.html` (fundadoras, endereço, serviços, área atendida), `llms.txt` e sitemap atualizado. **Regra do Gabriel: nada de preço nem prazo em número nas páginas** ("tudo é muito customizado"). Sem tradução EN. Acompanhamento mensal em Pendências |
| Black Friday 2026 | ✅ | `lp-black-friday.html` (noindex no robots): 25% em projeto + acompanhamento de obra, contrato assinado até 30/11/2026 23h59, 10 primeiros projetos. Frase do WhatsApp: "Quero a condição de Black Friday (25% no projeto)". Contagem regressiva; depois do prazo a página troca sozinha para "encerrada" e esconde o formulário |
| Teste A/B LP mobile | 🟡 | A = `lp-apartamento.html` (controle) · B = `lp-apartamento-v2.html` (Apple-style, mobile-first). Split 50/50 via `ab-test.js`. Métrica: msgs WhatsApp recebidas. Variante inferida pela frase do prefill (sem código visível) · **2026-11-02:** v2 ganhou o mesmo formulário da v1 (mensagem começa com a frase da v2, "Vim pelo site, quero um orçamento de apartamento", seguida dos dados). Teste mantido. Histórico: as 4 mensagens "Vim pela landing de projeto residencial" (12 a 19/06) são de antes do A/B (21/06) e de quando a Pmax mandava 100% para a v1; depois de 21/06 o Search caiu na home e as LPs quase não tiveram tráfego. |
| Toggle EN/PT | ✅ | `i18n.js` (novo) em todas as 7 páginas públicas (index, residencial, comercial, processo, lp-apartamento, lp-comercial, lp-apartamento-v2). Idioma padrão segue `navigator.language` do visitante; override manual persiste em `localStorage`. `proposta-assis-carrer.html` (proposta privada de cliente, bloqueada no robots.txt) ficou fora do escopo — não é página de navegação pública |
| Idioma padrão | ✅ | Desde 2026-11-02 o site abre **sempre em português**; inglês só pelo botão EN (antes seguia `navigator.language` e celulares em inglês viam o site em inglês) |
| Performance mobile | 🟡 | Fotos com versões 800w/1400w (`images/portfolio/opt/`, `res-*`), fontes Now em woff2, Google Fonts sem bloquear a pintura. Gargalo restante: tags de terceiros (gtag carregado direto **e** via GTM, Meta Pixel) |
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
| API Google (Claude) | projeto Cloud `assiscarrer-marketing` (arquitetura@) | GA4 property `538797588` lida pelo MCP `google-analytics` (Claude Code, escopo usuário). Credenciais só no PC do Gabriel, na pasta `.assiscarrer` do usuário (fora do repo). Google Ads API ✅ desde 09/11: lê e cria na conta 346-764-6872 com acesso **Explorer do projeto Cloud** (desde 10/09/2026 o nível vale pelo projeto, não pelo token). A conta não está vinculada à MCC 948-618-7939; o acesso é direto (`login_customer_id` = 3467646872 no `google-ads.yaml`) |

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
| Projetos entregues | **200+** (desde 2026-11-02) |
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
- [ ] **Todo dia 5: teste de IA.** Perguntar em aba anônima no ChatGPT, Gemini e Perplexity: "melhor arquiteto em São José dos Campos", "arquiteta de interiores em SJC" e "escritório de arquitetura no Aquarius SJC". Anotar aqui se a Assis Carrer aparece e quem aparece. No GA4 (Aquisição › Aquisição de tráfego, origem/mídia) ver as visitas de `chatgpt.com`, `perplexity.ai` e `gemini.google.com`. Linha de base: 04/11/2026, antes das páginas novas serem indexadas
- [ ] Enviar o sitemap no Google Search Console e no Bing Webmaster Tools (o ChatGPT busca pelo Bing)
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

### 2026-11-09 · Linha de base: visibilidade em IA
- Pergunta "me indique arquitetos em sao jose dos campos", feita pelo Gabriel:
  - **Gemini:** Assis Carrer em **1º** (ficha do Google, 5,0). Resposta personalizada (conta logada e localização no Urbanova), então precisa repetir em janela anônima.
  - **ChatGPT:** **não cita**. A lista vem de dados de mapa, ordenada por nota e volume de avaliações: Mariana Lobo 4,9 (68), Bevilacqua 4,9 (45), Débora Toledo 4,9 (57), Fumagalli 5,0 (31), José Luís 5,0 (144), Analu Andrade 4,9 (100), Rafaela Andrade 5,0 (45), Cintia Silva 5,0 (28), Casa Lemham 5,0 (49), Fabio Gouvêa 5,0 (22).
- GA4, visitas vindas de IA (90 dias): só chatgpt.com. Agosto 4 (robôs), setembro 2, outubro 2, novembro até dia 09: 3 (todas engajadas, cerca de 70 s). Todas entram pela home.
- Alavanca principal: **volume de avaliações no Google** (os citados têm de 22 a 144) e ficha replicada no Bing Places e no Apple Business Connect.

### 2026-11-09 · Portuga Bake Shop nas referências e topo da home mais enxuto
- **Home, topo:** saiu "Mais de 200 projetos entregues em 7 anos." do subtítulo (PT e EN); repetia a linha de prova logo abaixo. Fica "As arquitetas por trás de cafés, sorveterias e residências de referência na cidade."
- **Portuga Bake Shop (parceira):** logo (`images/clientes/portuga.svg`, mascote oficial do site deles) em "Empresas que já transformamos" na home e nas marcas da LP de Black Friday (grade passou a 5). Foto do balcão (`opt/case-portuga-balcao.*`, 360×480 enviada pelo Gabriel) no portfólio da home (7º item; CM Brigadeiros passou a ocupar 2 colunas) e nos cases da página Comercial (2º card; último card ímpar centralizado).
- Pendente: foto da Portuga em resolução maior. Aviso: a `lp-comercial.html` usa `images/lp/comercial-portuga.jpg` com legenda "Portuga Bake Shop", mas a foto parece ser de uma louçaria na Casacor; não alterado.

### 2026-11-09 · Revisão do anúncio de Black Friday no Google Ads (via API)
- O Gabriel montou o anúncio de Black Friday (RSA 830870387488) dentro do grupo da campanha "Search · Residencial+Comercial SJC", levando para `lp-black-friday.html`. Revisado e ajustado com o ok dele.
- **Anúncio BF:** 15 títulos (+ "Black Friday de Arquitetura", "Visita Técnica Gratuita", "Projeto Autoral em SJC", "Arquitetas Flavia e Beatriz"); "Orçamento em 24h" virou "Orçamento pelo WhatsApp"; descrição "SJC e vale" virou "Atendemos SJC e Vale do Paraíba...".
- **Anúncio normal (813728245433):** sem "24h" (compromisso de prazo) e bairros ampliados ("Aquarius, Urbanova e Toda SJC"; "+200 projetos... Aquarius, Urbanova, Satélite e toda SJC").
- **Recursos:** promoção 25% com exibição de 09 a 30/11; sitelink novo "Black Friday 25%" (asset 437845231240, 09 a 30/11); sitelinks Apartamentos ("Aquarius, Satélite e toda SJC") e Falar agora ("Fale direto com as arquitetas", sem "resposta em 24h").
- **Pausa em 01/12:** a campanha não tem data de fim. Fica por regra automática no Google Ads (criada pelo Gabriel) ou rodando `python -I ~/.assiscarrer/pausar_bf.py` (pausa o anúncio BF e tira o sitelink).
- Não mexido, para decisão do Gabriel: teto de lance R$ 3 (campanha "limitada pela estratégia"; sugerido R$ 4) e conversões "Local actions" como principais (inflam o número).

### 2026-11-09 · Claude conectado ao Google Ads (API)
- Token colado em `google-ads.yaml`. O login do Google tinha expirado (reautenticação exigida pela conta) e foi refeito.
- O Google mudou as regras em 10/09/2026: o nível de acesso da API passou a valer pelo **projeto do Google Cloud**, e o "Acesso básico" do token não migrou. Pedido o **acesso Explorer** no projeto `assiscarrer-marketing` (Cloud Console > Google Ads API > Níveis de acesso), aprovado em minutos.
- Teste de leitura ok. Nos últimos 30 dias, "Search · Residencial+Comercial SJC" está ativa: 537 impressões, 23 cliques, R$ 64,02 e 4 conversões. "Arquiteto São José dos Campos" (PMax) está pausada.
- Regra mantida: campanha criada pela API nasce pausada; ativar ou mudar orçamento só com ok do Gabriel.

### 2026-11-07 · Faixa de Black Friday no site, selo da home e bairros de toda SJC
- **Faixa no topo (`bf-banner.js`):** barra preta fixa com "Black Friday · 25% no seu projeto até 30/11 · Ver condição" (no celular, "25% no projeto · Ver"), levando para `lp-black-friday.html`. Entra em index, residencial, comercial, processo, arquiteta-sao-jose-dos-campos, projeto-de-interiores-sjc, lp-apartamento, lp-apartamento-v2 e lp-comercial (fora da própria LP e da proposta). Tem "×" (fica fechada na sessão), some sozinha após 30/11 23h59 e mede o clique como `bf_faixa_click`. **Para tirar antes (vagas esgotadas): `ATIVA = false` no topo do arquivo.**
- **Selo "Arquitetura autoral · São José dos Campos" (home):** estava apagado sobre a foto clara. Agora em areia claro (#f3cf9f) com fundo escuro translúcido e filete à esquerda (`.hero-label` no style.css).
- **Bairros:** o Gabriel não quer parecer que o escritório atende só 2 ou 3 bairros. Linha padrão embaixo dos botões: "200+ projetos · 7 anos · Aquarius · Urbanova · Satélite · Floradas · Esplanada · toda SJC" (home, residencial, lp-apartamento, PT e EN). Descrições do Google passam a dizer "em toda a cidade/toda SJC" (home, residencial, LPs de apartamento). Residencial ganhou Satélite, Vila Adyana e "e toda SJC" nos quadros de bairros. Páginas de SJC e llms.txt incluem Satélite (e Jd. das Indústrias no FAQ). Legendas de obras reais (ex.: "Casa em Urbanova") não mudaram.
- Sobe junto a foto do Real Ville da LP de Black Friday, cujo deploy anterior (058ab7f) falhou por timeout do GitHub Pages.

### 2026-11-07 · Black Friday com a identidade da marca
- O Gabriel quis manter a página preta, rápida e só sobre a promoção, mas com cara de Assis Carrer. Uma versão no layout completo do site (creme e azul-marinho) foi testada e descartada.
- **lp-black-friday.html:** mesma estrutura e textos, agora com Cormorant Garamond nos títulos ("25% off." em itálico dourado), fonte Now no texto, botões e caixas retos em caixa alta espaçada, selo com linhas douradas, contagem e números em dourado serifado, passos 01/02/03 como no Processo, depoimentos em itálico e o símbolo da marca em marca d'água no topo. Formulário, medição, carrossel e encerramento em 30/11 sem mudança.
- **Layout de computador (≥ 960 px):** hero em duas colunas com foto vertical do jantar da Casa Real Ville (`opt/bf-hero-realville-jantar.webp`, 127 KB, só carrega no computador; escolhida pelo Gabriel no lugar da foto do Celebration) e moldura dourada, carrossel na largura toda, passos e depoimentos em linha, formulário em duas colunas. Celular sem mudança.

### 2026-11-07 · Banners da Black Friday (Meta e Google)
- Pasta `assiscarrer/banners-black-friday/` (fora do repo), feita com as fotos profissionais de `images/00.FOTOS OBRAS/` (Celebration, Enjoy Aquarius, Believe, Real Ville e a foto das arquitetas), fonte Now e as cores da LP.
- **Meta (`meta/`):** feed 4:5 com a oferta, feed 4:5 com as arquitetas, quadrado com "25%", stories 9:16 (texto fora das faixas de cima e de baixo) e carrossel de 5 cards (4 projetos + card da oferta).
- **Google (`google/`):** 2 imagens paisagem 1.91:1 e 3 quadradas, **sem texto por cima** (o Google reprova imagem com texto sobreposto), para os recursos de imagem da campanha de pesquisa.
- Para refazer: editar `src/banners.html` e renderizar com o Chrome headless (`--screenshot`, um banner por `#id`).

### 2026-11-07 · Claude com acesso ao GA4 (Ads a caminho)
- Projeto `assiscarrer-marketing` no Google Cloud com Google Ads API, Analytics Data e Admin API; cliente OAuth de app para computador. Login de arquitetura@ com escopos analytics.readonly, adwords e cloud-platform.
- MCP oficial do GA4 (`uvx analytics-mcp`) registrado no Claude Code. Teste 08/10 a 06/11: 107 sessões (63 diretas, 24 google/cpc, 13 orgânicas, **4 vindas do chatgpt.com**); 6 `whatsapp_click`, 1 `lead_form_submit`.
- Google Ads: o developer token já existia com Acesso básico; ver o token exige a chave de acesso nova da conta (até 2 dias). Regra mantida: campanhas criadas pela API nascem pausadas; ativar ou mudar orçamento só com ok do Gabriel.

### 2026-11-04 · Processo sem prazos em número
- **Por quê:** regra do Gabriel, nada de preço nem prazo em número no site, porque cada projeto é customizado.
- **processo.html (PT e EN):** os rótulos das etapas eram "Semana 1", "Semanas 2 a 4", "Semanas 5 a 8" e "8 a 24 semanas" e viraram "Início · conversa e visita", "Criação · layout e 3D", "Detalhamento técnico" e "Obra · conforme o seu projeto". A resposta "Quanto tempo leva?" saiu de "6 a 8 semanas / 3 a 5 meses / 4 a 6 meses" e passou a dizer que o prazo depende do imóvel, do escopo e das aprovações, com o cronograma montado com o cliente. Também saíram "em média, duas rodadas de refinamento", "visitas semanais" (agora "periódicas") e "quanto tempo leva" do topo e da meta description.
- **Mantido (confirmado pelo Gabriel em 04/11):** a pergunta "Cobram pela visita técnica inicial?" continua dizendo que a primeira visita é gratuita para projetos qualificados.

### 2026-11-04 · Visibilidade em IA: páginas de SJC, FAQ e dados estruturados
- **Por quê:** o Gabriel quer que a IA (ChatGPT, Gemini, Perplexity) cite a Assis Carrer quando alguém perguntar por arquiteto em SJC. As IAs tiram a resposta de páginas que respondem perguntas diretas e de dados estruturados.
- **Páginas novas (no sitemap e indexáveis):** `arquiteta-sao-jose-dos-campos.html` (quem é o escritório, as arquitetas, serviços, regiões, 8 perguntas) e `projeto-de-interiores-sjc.html` (o que entra no projeto, arquitetura x interiores, 7 perguntas). As duas têm dados estruturados de FAQPage, Service e BreadcrumbList; eventos `whatsapp_click`, `faq_open` e `scroll_75` com `page` `arquiteta-sjc` / `interiores-sjc`. Em todo o texto, preço e prazo são "sob medida, depende do escopo", sem números, a pedido do Gabriel.
- **index.html:** o cartão do escritório (dados estruturados) ganhou endereço completo, CEP, e-mail, fundadoras, ano de fundação (2019), serviços e cidades atendidas. O telefone foi corrigido para o WhatsApp oficial (antes era +55 12 99776-0398) e o Instagram para `@assiscarrer.arq` (antes `assiscarrer.arquitetura`). O contador "+100 projetos entregues" da seção Sobre passou a "+200".
- **Rodapé** de index, residencial, comercial e processo com links para as duas páginas novas.
- **`llms.txt`** na raiz (resumo do escritório para IAs) e `sitemap.xml` com as páginas novas.

### 2026-11-03 · Landing page de Black Friday
- **Regras (definidas pelo Gabriel):** contrato assinado até 30/11/2026, desconto de 25% sobre projeto arquitetônico, interiores e acompanhamento de obra. Fora: execução, mão de obra, materiais, móveis e produtos. Limite de 10 primeiros contratos, sem contador na página. "Não cumulativo" foi acrescentado no regulamento: confirmar.
- **Página:** `lp-black-friday.html`, mobile-first e escura nos dois temas, com hero, contagem até 30/11 23h59 (BRT), o que entra e o que não entra, 3 passos, prova (200+, 7 anos, 4,9 no Google, 3 depoimentos), formulário, WhatsApp e regulamento. Depois do prazo esconde formulário e contagem e volta a frase padrão do WhatsApp.
- **Medição:** `whatsapp_click`, `lead_form_submit` e `scroll_75` com `page: 'lp-black-friday'`; mesma conversão do Ads e `Lead` no Pixel; `canal.js` marca Google/Meta. Mensagens contáveis pela frase "Quero a condição de Black Friday".
- **robots.txt:** `Disallow: /lp-black-friday.html`, como nas outras LPs pagas.
- **2026-11-04:** botão "Conhecer o escritório e os projetos" depois dos depoimentos, levando à home (`index.html`), com evento `conhecer_site_click`. O canal de anúncio fica salvo no navegador, então quem vai para a home continua sendo marcado no WhatsApp.
- **2026-11-04:** a foto única do topo virou um **carrossel com 9 projetos** (Celebration, Enjoy Aquarius, Believe, Portal Victoria, cozinha preta, lavabo rosé, varanda gourmet, Sapore Gelato Caffè, CM Brigadeiros), em imagens 4:5 de 640 px (`opt/car-*-640.webp`, 18 a 62 KB cada), arrastável, com bolinhas. Em "Quem vai cuidar" entrou a faixa **"Marcas que confiaram no escritório"** com Sapore, Sapore Açaí, Artesane e CM Brigadeiros, em quadros brancos.
- **2026-11-04:** carrossel maior, como o Gabriel pediu: no celular cada foto ocupa 90% da largura (~310 px; antes eram ~260 px) e no computador o carrossel sai da coluna de texto, com fotos de 420 px (antes 300 px). Sete fotos ganharam versão `opt/car-*-hd.webp` (742 a 1080 px) por `srcset`. Sapore e CM Brigadeiros ficam só na versão de 640 px, porque o original é menor que isso.

### 2026-11-02 · LP v2: formulário + contraste no escuro · 200+ projetos
- **Formulário na v2** (`#lpForm2`, no CTA final, com os mesmos campos da v1). A mensagem do WhatsApp começa com a frase da v2, então o A/B continua separando as versões pela frase: a v1 usa "Vim pela landing de projeto residencial" e a v2 "Vim pelo site, quero um orçamento de apartamento". Dispara `lead_form_submit` `{page: 'lp-apartamento-v2'}` e a conversão do Ads. Testado o envio (mensagem, eventos e confirmação).
- **Formulários com `method="post" action="#"`** (home, v1, v2, LP comercial): se o JS falhar, nome e telefone não vão para a URL.
- **Contraste da v2 no escuro:** a topbar de 72% de opacidade deixava o conteúdo aparecer atrás do logo e dos botões; agora é 94% (claro e escuro). O "Orçamento" e o botão cobre no escuro passaram a texto escuro sobre o cobre claro. O botão do WhatsApp foi para um verde mais fechado (#16903f a #127a35): o texto branco tinha 1,6 a 2,9 de contraste. O `--copper` do claro da v2 passou a `#985F34`, como no resto do site.
- **100 → 200 projetos** em todas as páginas (PT, EN e meta descriptions): 32 trocas. Na v2 o número grande dizia "100+ apartamentos entregues" e passou a "200+ projetos entregues", porque os 200 incluem os comerciais.
- **Fora do site, para atualizar à mão:** textos e frases de destaque do Google Ads ("100+ projetos") e o Perfil da Empresa no Google, se mencionarem o número.

### 2026-11-02 · Ajustes de acessibilidade (contraste, títulos, dimensões)
- **Contraste:** o cobre `#A96D3E` não passava em texto pequeno nem em botão com letra branca (3,6 a 4,25; o mínimo é 4,5). `--copper` agora é `#985F34` no tema claro e `#d39963` no escuro, e o novo `--copper-btn: #985F34` vale para os fundos de botão com texto branco. No modo escuro, o CTA do portfólio da home estava navy sobre quase-preto (1,25) e agora usa a cor de texto e o sand. Nas LPs, ficaram mais claros os labels do formulário, os números de credencial, o rodapé e o local dos depoimentos; as tags sobre navy usam `#E2BC94`.
- **Ordem dos títulos:** os `h4` que vinham logo depois de `h2` (home, residencial, comercial, LP v1, LP comercial) viraram `h3.h4`. Os seletores CSS passaram de `h4` para `.h4` e `h3.h4` neutraliza o estilo de h3. O estilo calculado foi comparado antes e depois e é idêntico. `processo.html` não mudou (lá os h4 vêm depois de h3).
- **Dimensões:** `width`/`height` em `logobranco_pq.png` e `simbolo.png`, com o tamanho renderizado conferido em 375 e 1280 px.
- **LP v2 no celular:** o logo ficava espremido em 73×22 px, sem espaço ao lado de 3 botões. Abaixo de 420 px o botão "Explorar" do topo fica oculto (o hero já tem "Explorar ›") e o logo ganhou `object-fit: contain`.
- **Outros:** botão EN/PT com nome acessível contendo o texto visível; `label for` nos selects da LP comercial.
- **Resultado (Lighthouse a11y, claro e escuro):** 100 em home, residencial, comercial, processo, LP v2 e LP comercial; LP v1 92, só pelos números decorativos grandes (`.dor-num`, marca d'água), mantidos de propósito.

### 2026-11-02 · Otimização mobile antes do Meta Ads
**Motivo:** o Meta Ads vai trazer principalmente tráfego de celular. Lighthouse mobile (4G simulada) nas páginas no ar: home 41/100 (LCP 12,8 s, 2,1 MB), LP v2 37/100 (LCP 10 s, 2,2 MB), residencial 52/100 (LCP 10,6 s, **21 MB**).

**O que mudou:**
1. **Fotos:** `residencial.html` usava os JPGs originais (até 7,3 MB). Agora usa `opt/res-*-800.webp` e `-1400.webp` com `srcset`, `width`/`height` e `loading="lazy"`; o fundo do hero usa `opt/hero-residencial-integrado(-800).webp`. Home, LP v2 e LP v1 ganharam versões `-800.webp` no `srcset` (incluindo o preload do hero). `simbolo.png` (6000 px, 222 KB) e `sapore-acai.png` (4000 px, 226 KB) foram reduzidos no lugar para 12 KB e 31 KB.
2. **Idioma:** `i18n.js` agora abre sempre em PT.
3. **Fontes:** Now-Light/Regular/Medium em woff2 (cerca de 22 KB cada, com o .otf como fallback) e `font-display: swap` em todas. O CSS do Google Fonts carrega com `media="print" onload` para não bloquear a primeira pintura.
4. **Logo em fundo escuro:** `logo-horizontal-negativo-crop.png` tinha o símbolo azul-marinho, que sumia no escuro (LP v2 em dark mode, headers e footers de residencial, comercial e processo). Trocado por `logobranco_pq.png` (branco e dourado), o mesmo da home.

**Resultado local (Lighthouse mobile):** o peso caiu para 1,2 a 1,3 MB nas três páginas (residencial: de 21 MB para 1,3 MB; carregada inteira com rolagem, 476 KB). LP v2 subiu de 37 para 61 (FCP 0,9 s, LCP 6,0 s); home de 41 para 47. A nota simulada varia ±10 entre rodadas.

**Pendente:**
- O LCP simulado continua alto por causa das tags: `gtag.js` do G-DDECLK9VYV é carregado pela página e de novo pelo GTM, mais o AW e o Meta Pixel. Só um `page_view` é enviado (sem contagem dupla), mas a biblioteca carrega duas vezes. Para tirar o gtag direto das páginas é preciso revisar o GTM-P6F5BN7Z (tags de GA4, Ads e conversão).
- A fonte Herokid em uso é a versão **DEMO** da Fontspring: conferir a licença.
- Decidir se o A/B da LP de apartamento continua (a v1 segura ~20 s, a v2 ~2min14).

### 2026-11-02 · Correção de medição (atribuição GA4 + canal no WhatsApp)
**Contexto:** conta Google Ads 346-764-6872 pausada para verificação do anunciante (docs enviados em 02/11). A análise de Ads + GA4 de 22/06 a 23/10 mostrou que os "leads" do Ads são cliques no wa.me (não mensagens) e que havia 8 sessões com origem `waFloat / (not set)`.

**1. Bug de atribuição corrigido (`main.js`):** o `whatsapp_click` da home enviava o parâmetro `source: a.id`. No GA4, `source` é reservado e sobrescreve a origem da sessão, então quem clicava no botão flutuante virava `waFloat / (not set)` e perdia o `google / cpc`. Agora o parâmetro se chama `link_id`. As outras páginas já usavam `page` e não tinham o problema.

**2. Novo `canal.js`:** marca a frase inicial do WhatsApp para quem veio de anúncio (Google: "Olá, vi o anúncio no Google!"; Meta: "Olá, vi o anúncio de vocês!"). Funciona nos links `wa.me` (troca o texto no clique) e nos formulários (envolve o `window.open`). Assim dá para contar as mensagens que chegaram de verdade por canal e comparar com as conversões do Ads. Visitas sem anúncio continuam com a frase original de cada página, então a inferência da variante do A/B não muda.

**Pendências de painel (fora do código):** marcar `whatsapp_click` e `lead_form_submit` como eventos principais no GA4; na ação de conversão do Ads, contar "Uma" por clique; ativar "Enforce HTTPS" no GitHub Pages (hoje `http://www` responde 200 sem redirecionar; 27 cliques pagos caíram na versão http); conferir a segmentação de local da campanha ("Presença", pois São Paulo apareceu com 158 usuários).

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
