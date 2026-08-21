# 📋 Plano de Marketing — Log de Execução

> **Arquivo de contexto vivo.** Lê isso antes de qualquer mudança relacionada ao plano de marketing.
> Origem: `planomarketingassiscarrer.pdf` (raiz do repo).
> Última atualização: **2026-08-21** · Revisão de campanhas (1 a 21 ago) · Teste A/B encerrado, v2 fora do ar · Nova LP `lp-casa.html` (construção e reforma de casa) · Mudanças de CAMPANHA seguem pendentes de confirmação

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
| Site reposicionado | ✅ | 7 páginas no ar: index, residencial, comercial, processo, lp-apartamento, lp-comercial, **lp-casa (nova)** |
| LP de casa | ✅ | `lp-casa.html` · construção em terreno + reforma/ampliação · noindex via robots.txt · **sem campanha apontando ainda** |
| Dark mode | ✅ | `prefers-color-scheme: dark` em todas as páginas |
| GTM | ✅ | `GTM-P6F5BN7Z` |
| GA4 | ✅ | `G-DDECLK9VYV` (conta arquitetura@) |
| Meta Pixel | ✅ | `2037009416852160` |
| Google Ads tag | ✅ | `AW-18186496405` (conta arquitetura@assiscarrer.com) |
| Conversão Lead Form | ❌ | Rótulo `F0xNCI3x6bIcEJXT_99D` · valor R$ 2.500 BRL. **BUG: dispara também em qualquer clique em `wa.me`** (`main.js:73` + 5 páginas), sem dedupe. Clique no botão verde conta igual a formulário enviado |
| Eventos custom | 🟡 | `lead_form_submit`, `whatsapp_click`, `scroll_75` chegam no GA4, mas **nenhum marcado como evento principal** (GA4 mostra "Eventos principais: 0") |
| Campanha Google Ads | 🟡 | "Search · Residencial+Comercial SJC" · Search puro · R$ 25/dia · 1 a 21 ago: R$460,28 · 187 cliques · 11 conv. a R$41,84. **Contagem de conversões não confiável, ver revisão 2026-08-21** |
| Crédito Google Ads | ❌ | **Esgotado.** Saldo R$0,00 em 21/08. Gasto agora sai do Mastercard ...5270 (~R$660/mês no ritmo atual) |
| Google Meu Negócio | ✅ | Categoria + descrição + 12 serviços + atributos + WhatsApp |
| Reviews GMN | 🟡 | 2/10 (faltam 8 pra meta semana 1) |
| Cases nomeados site | ✅ | 5 residencial (Believe, Celebration, Enjoy Aquarius, Real Ville, Portal Victoria) + 2 consultórios + Sapore upgrade |
| Instagram | 🟡 | 7k seguidores · bio precisa update conforme plano (ver pendências) |
| Meta Ads | ⏳ | Não iniciado · Pixel pronto pra ligar |
| Teste A/B LP mobile | ✅ | **ENCERRADO em 2026-08-21.** Variante A (`lp-apartamento.html`) mantida no ar, variante B fora do ar (noindex, arquivo preservado). `ab-test.js` não é mais carregado por nenhuma página. Motivo: **nunca deu resultado e não daria nem com tráfego (3 bloqueios, ver revisão 2026-08-21).** 28 dias: A = 2 views / 0 usuários · B = 0 views. Sem evento principal no GA4. E o método de leitura era furado: a frase de prefill de A é a frase padrão de 5 outras páginas, só B era identificável. A = `lp-apartamento.html` · B = `lp-apartamento-v2.html` · split 50/50 via `ab-test.js` |
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

### Campanha Google Ads ATIVA (a que gasta)

| Campo | Valor |
|-------|-------|
| Nome | **Search · Residencial+Comercial SJC** |
| Tipo | Search puro · 1 grupo de anúncios ("Grupo de anúncios 1") |
| Orçamento | R$ 25/dia (gasto real ago: R$ 21,92/dia = 88% do teto) |
| Lance | Maximizar conversões |
| Conversão alvo | Enviar formulário de lead (`F0xNCI3x6bIcEJXT_99D`) · R$ 2.500 — ⚠️ ver achado 01 de 2026-08-21 |
| Localizações | SJC + Taubaté + Caçapava + Jacareí (recomendado cortar Taubaté e Caçapava) |
| Keywords com gasto | `"arquiteto são josé dos campos"`, `"arquiteto sjc"`, `"arquiteto taubaté"`, `"escritório de arquitetura sjc"`, `"projeto de interiores sjc"` |
| Negativas (9) | autocad · curso · emprego · estudante · faculdade · gratis · salário · sketchup · vaga |
| Extensões | Local (GMN) + chamada. Chamada: 1.301 impr · 0,38% · R$14,11 · 0 conv |
| Recursos automáticos | ⚠️ **Ligados** — Google escolhendo páginas de destino sozinho, inclusive a versão `http://` |
| Página de destino | Home (173 de 187 cliques) |

### Campanha Performance Max (INATIVA — só polui relatório)

| Campo | Valor |
|-------|-------|
| Nome | Arquiteto São José dos Campos |
| Tipo | Performance Max |
| Status | **0 impressões em tudo** (todos os dispositivos, todas as cidades, inclusive Telas de TV). Recomendado excluir |

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
- [ ] **Corrigir contagem de conversões** (achado 01 da revisão 2026-08-21) — nova ação de conversão no Ads só pra WhatsApp + dedupe no código
- [ ] **Marcar eventos principais no GA4** (achado 02) — 5 min, só painel, sem tocar no site
- [ ] **Tirar o `source` do `main.js:72`** (achado 03) — 1 palavra
- [ ] **Cortar Taubaté e Caçapava da segmentação** (achado 04) — libera ~R$65/período
- [x] ~~Decidir destino do teste A/B~~ → **encerrado em 2026-08-21**, variante A mantida, v2 fora do ar
- [ ] **Criar grupo de anúncios de casa apontando pra `lp-casa.html`** (keywords: projeto de casa sjc, construir casa sjc, arquiteto urbanova, reforma de casa sjc). A LP está pronta e sem tráfego
- [ ] **Mandar fotos de casas entregues** pra substituir/ampliar a galeria da `lp-casa.html` (hoje: 1 render + 1 case Real Ville + 1 living)
- [ ] **Levantar nº real de conversas no WhatsApp em 1-21/08** — é o dado que valida ou derruba as 11 conversões
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

### 2026-08-21 (2) · Teste A/B encerrado · Nova LP de casa (`lp-casa.html`)
**Pedido:** manter a LP de apartamento antiga (variante A) e tirar a versão estilo Apple do ar sem apagar o arquivo. Criar uma página nova voltada a **casa**: construção de fato pra quem tem terreno, e obra pra quem quer adequar a casa ao gosto ou uso atual.

**1. Teste A/B encerrado:**
- `<script src="ab-test.js">` removido de `lp-apartamento.html` e `lp-apartamento-v2.html`. O sorteio 50/50 e o redirect entre slugs pararam. Quem acessa `/lp-apartamento` fica em `/lp-apartamento`.
- `lp-apartamento-v2.html`: adicionado `<meta name="robots" content="noindex, nofollow">` + comentário no topo explicando como reativar. **Arquivo preservado**, como pedido.
- `ab-test.js` mantido no repo, mas não é mais carregado por nenhuma página.
- ⚠️ **v2 NÃO foi bloqueada no `robots.txt` de propósito.** `noindex` + `Disallow` se anulam: se o robots bloqueia o rastreamento, o Google nunca lê o `noindex` e a página pode continuar no índice. Pra des-indexar, o crawl precisa ser permitido. Isso está comentado dentro do `robots.txt`.

**2. Nova LP `lp-casa.html`** (LP de tráfego pago, escolha do usuário; `Disallow` no robots.txt como as irmãs):

| Seção | Conteúdo |
|---|---|
| Hero | Render de fachada (`proj-casa-render.png`) em full bleed. Foge do split das outras LPs porque o render é 16:9 e cortar em painel vertical destruiria a composição. Legenda declara que é render, não foto |
| Dois caminhos | **A separação central da página.** Caminho 1: tem o terreno e vai construir. Caminho 2: já tem a casa e quer mudar. Prazos, custos e documentação diferentes |
| Dores | 3, específicas de casa: obra travada na prefeitura, orçamento estourado no meio, profissionais sem projeto comum |
| Escopo | Viabilidade, plantas/cortes/fachadas/3D, projeto legal e aprovação, estrutural com calculista + complementares, executivo, acompanhamento de obra. Foto de obra real (`processo-obra.jpg`) |
| Galeria | 3 imagens com lightbox: render de fachada, Real Ville (casa em condomínio), living com pé-direito duplo |
| Prova | 100+ projetos · 7 anos · resposta em 24h · chips de bairro: Urbanova, Esplanada do Sol, Jardim Oriente, Satélite, Real Ville |
| Processo | 5 etapas: viabilidade → estudo preliminar → projeto legal → executivo → obra |
| Form | Campos próprios de casa: fase (tenho terreno / vou comprar / reformar / ampliar / obra já começou / avaliando), local (bairro), prazo |

**Bairros citados** foram informados pelo usuário nesta sessão: Urbanova, Esplanada do Sol, Jardim Oriente, Satélite e outros. Real Ville veio da `residencial.html`, que já trata o case como "casa em condomínio".

**⚠️ Sem depoimento inventado.** As outras páginas usam depoimentos com nomes fictícios como placeholder. Nesta não foi criado nenhum: há um slot HTML comentado esperando depoimento real de cliente de casa.

**3. Tracking da LP nova, de propósito diferente das irmãs:**
- Clique em WhatsApp dispara **só** `whatsapp_click`, **não** a conversão de R$2.500. Evita repetir o achado 01 da revisão desta mesma data.
- Conversão do Ads dispara só no **envio do formulário**, com trava de disparo único por carregamento (`converted` flag).
- Frase de prefill do WhatsApp **exclusiva**: `"Olá! Vim pela página de casa, quero falar sobre um projeto."` Aplica a lição do achado 08: mensagem que chega com essa frase é rastreável até esta página. As outras páginas compartilham a frase genérica.
- Quando existir ação de conversão própria pra WhatsApp no Ads, o `send_to` dela entra no handler de `whatsapp_click`, que já está marcado com comentário.

**4. Imagem otimizada:** `proj-casa-render.png` 2383KB → 205KB webp / 193KB jpg (-91%), gerado em `images/portfolio/opt/`. As demais imagens da página reaproveitam arquivos que já existiam em `opt/`, sem reprocessar: `processo-obra`, `case-real-ville` e `case-living-pe-direito`.

**Validado em Chromium headless** (mobile 390px e desktop 1440px, claro e escuro): zero erro de JS, zero overflow horizontal, toggle EN/PT funcional, lightbox abre e fecha com Esc, formulário dispara exatamente 1 conversão, clique no WhatsApp dispara `whatsapp_click` sem conversão. Regressão nas duas LPs de apartamento: sem erro, sem redirect, `noindex` presente só na v2.

**Dois bugs encontrados e corrigidos durante o teste da página nova:**
- Overflow horizontal de 39px no mobile: `<select>` com opção longa esticava a coluna do grid. Corrigido com `minmax(0,1fr)` em todos os grids + `min-width:0` nos campos.
- Bloco de dark mode não pintava nada: estava declarado **antes** das regras de componente e, com a mesma especificidade, perdia no cascade. Movido pro fim do stylesheet. É o mesmo tipo de armadilha da entrada de 2026-08-13, por isso o comentário no topo do bloco.

**⏳ Pendente pra LP de casa dar resultado:** ela está no ar mas **nenhuma campanha aponta pra ela**. Precisa de um grupo de anúncios novo com keywords de casa (`projeto de casa sjc`, `construir casa em são josé dos campos`, `arquiteto urbanova`, `reforma de casa sjc`). Isso é mudança de campanha, então depende de confirmação.

### 2026-08-21 · Revisão de campanhas e resultados (1 a 21 ago) · 3 bugs de tracking confirmados
**Pedido:** revisão das campanhas e resultados. Input: 22 prints de Google Ads + GA4 de 21/08/2026.

**Relatório completo:** artifact `https://claude.ai/code/artifact/63972bb4-2732-45c6-b8aa-42f0de3241fa`

**Números do período (Search · Residencial+Comercial SJC, 1 a 21 ago, 21 dias):**

| Métrica | Ago (21d) | Jul (14d) | Var. por dia |
|---|---|---|---|
| Custo | R$ 460,28 | R$ 164,16 | +87% |
| Cliques | 187 | 70 | +78% |
| Impressões | 3.316 | 899 | +146% |
| CTR | 5,64% | 7,79% | -28% |
| CPC médio | R$ 2,46 | R$ 2,35 | +5% |
| Conversões | 11 | 6 | +22% |
| Custo/conv. | R$ 41,84 | R$ 27,36 | +53% |
| Parcela de impressões | 56,63% | 47,39% | +9,2 p.p. |

**🔴 Achado 01 (CRÍTICO, código):** `main.js:70-75` dispara `trackConversion()` (AW + rótulo `F0xNCI3x6bIcEJXT_99D`, R$2.500) em **qualquer** clique em link `wa.me`, incluindo o botão flutuante. Mesmo padrão em `comercial.html:600`, `residencial.html:531`, `processo.html:462`, `lp-apartamento.html:781`, `lp-comercial.html:765`. Sem dedupe. A ação de conversão no Ads se chama "Enviar formulário de lead" — ou seja, clique no botão verde = formulário enviado. Explica a inversão mobile/desktop: **desktop 10,45% de conv. (7 conv, R$24,06) vs mobile 3,33% (4 conv, R$72,96)**, oposto exato de julho (mobile 12,24%, desktop 0%). E explica o termo `arquitetos sjc`: 4 cliques → 4 conversões (100%).

**🔴 Achado 02 (CRÍTICO, painel GA4):** "Eventos principais: 0". Os eventos chegam mas nenhum foi marcado como evento principal. GA4 não tem número de conversão nenhum — o Ads é fonte única, e está contaminado pelo achado 01.

**🟠 Achado 03 (ALTO, código):** `main.js:72` envia `{ source: a.id }`. `source` é parâmetro reservado do GA4 e **reatribui a sessão inteira**. Confirmado no print: origem `waFloat / (not set)` com 2 sessões, roubadas de `google / cpc`.

**🟠 Achado 04 (ALTO, Ads):** Taubaté R$56,76 / 26 cliques / **0 conversões** + keyword `"arquiteto taubaté"` R$59,74 / 27 cliques / 0 conv / pior CTR (4,79%). Caçapava R$8,08 / 0 conv. Extensão de chamada R$14,11 / 1.301 impr / 0,38% / 0 conv. Total ~R$79 (17% do período) sem retorno. SJC sozinha = 78,9% do custo e 10 das 11 conversões (R$36,30/conv). Jacareí converteu 1 (R$32,50), fica.

**🟠 Achado 05 (ALTO, faturamento):** crédito R$880 **esgotado**. Saldo R$0,00, sem pagamentos futuros. Gasto passou pro Mastercard ...5270. ~R$660/mês no ritmo de R$21,92/dia.

**🟡 Achado 06 (MÉDIO, Ads):** recursos criados automaticamente ligados. Google serve `http://` (sem HTTPS): 207 impr, CTR 1,45% vs 5,75% da home. E `residencial.html` (148 impr, CTR 4,05%). Home = 173 dos 187 cliques.

**🟡 Achado 07 (MÉDIO, Ads):** Pmax "Arquiteto São José dos Campos" com 0 impressões em tudo (inclusive Telas de TV) poluindo relatórios. Conversões: 4 registrando, 3 sem conversões recentes, 1 não verificada.

**🟠 Achado 08 (ALTO — revisado, GA4 + código):** **o teste A/B nunca produziu resultado, e não produziria nem com tráfego.** Três bloqueios independentes:

1. **Sem tráfego.** Últimos 28 dias: A (`lp-apartamento.html`, título "Projeto Arquitetônico para Casais em...") = 2 views, 0 usuários, 100% rejeição. B (`lp-apartamento-v2.html`, título "Apartamento em São José dos Campos") = **não aparece no relatório**, 0 views. A campanha manda 173 de 187 cliques pra home.
2. **Sem instrumentação.** Achado 02 — GA4 sem evento principal. Nada a comparar entre variantes.
3. **Método de leitura quebrado na origem.** O log dizia "variante inferida pela frase do prefill". Mas a frase da variante A é a frase PADRÃO do site inteiro:
   - A → `"Olá! Quero conversar sobre um projeto."` — idêntica à de `index`, `residencial`, `comercial`, `processo` e `lp-comercial` (verificado por grep)
   - B → `"Olá! Vim pelo site, quero um orçamento de apartamento."` — única, 3 links
   Só B era identificável. O controle nunca teve leitura possível.

**Sobre os 618 views da LP em julho:** houve volume em algum momento, mas os bloqueios 2 e 3 já valiam lá, então aquele tráfego também não virou resultado. E provavelmente é irrecuperável: `ab-test.js` envia `ab_variant`/`ab_assignment` com o parâmetro `variant`, mas parâmetro só vira relatório depois de registrado como dimensão personalizada no GA4, e **esse registro não é retroativo**.

**Pra rodar de verdade** são 3 coisas na ordem: (a) frase de prefill própria pra variante A, (b) registrar `variant` como dimensão personalizada no GA4, (c) grupo de anúncios mandando tráfego de "reforma de apartamento" pras LPs. Sem as três, roda de novo e dá em nada de novo.

**Leilão — mudou o pelotão:** `favostudioarquitetura.com.br` **entrou com 13,48%** e supera em 50,42%. `robertafelix.com` recuou de 16,47% → 10,82% (supera em 50,95%). Também: ppsarquitetura.com, getninjas.com.br, fernandaauler.com.br (<10%).

**Keywords (5 maiores = 87% do custo):** `"arquiteto são josé dos campos"` R$167,55/62/7,13% · `"arquiteto sjc"` R$106,85/42/5,66% · `"arquiteto taubaté"` R$59,74/27/4,79% · `"escritório de arquitetura sjc"` R$33,20/14/4,40% · `"projeto de interiores sjc"` R$32,47/14/7,18%. As 2 recomendações de julho que saíram do zero foram as duas últimas; `projeto de interiores sjc` empata em CTR com a principal da conta.

**GA4 (28 dias):** 195 usuários (+28,3%) · 191 novos · 39s engajamento · `google/cpc` 141 usuários / 168 sessões · direto 30 · orgânico 16 · **`chatgpt.com / ai-assistant` 3 usuários / 4 sessões** (novo). Home 246 views / 44,1% rejeição; resto em unidades. Ressalvas: **Council Bluffs 19 de 195 usuários** (datacenter Google, ~10% não é gente) e GA4 registra 25-30% menos que os cliques do Ads.

**Demografia (cliques):** 35-44 é a maior faixa, depois 25-34 · Feminino 83 vs Masculino 54 · **66 cliques (35%) do top 10% de renda**, alinhado ao público-alvo do plano; ~21 cliques dos 50% de menor renda.

**⚠️ NADA FOI APLICADO.** Nenhuma mudança em campanha (regra do CLAUDE.md) e nenhuma correção de código, porque as correções alteram como as conversões passam a ser contadas. Ordem recomendada: (1) separar conversão de WhatsApp da de formulário, com dedupe; (2) marcar eventos principais no GA4; (3) tirar o `source` do `main.js:72`; (4) cortar Taubaté + Caçapava; (5) desligar recursos automáticos; (6) limpar conta; (7) decidir destino do teste A/B; (8) confirmar patamar de investimento.

**Pergunta em aberto que decide tudo:** quantas conversas reais chegaram no WhatsApp entre 1 e 21/08? Se ~11, a medição está ok. Se 3-4, o CPL real é R$115-150 (acima da meta de R$80 do plano) e a prioridade vira a página, não o lance.

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
git log --oneline -10

# Validar que IDs de tracking estão corretos (7 páginas públicas, 2 ocorrências cada)
grep -l "GTM-P6F5BN7Z" *.html          # esperado: 7 arquivos
grep -l "G-DDECLK9VYV" *.html          # esperado: 7 arquivos (NÃO G-TXWFQ3D6PQ, essa é a órfã)
grep -l "2037009416852160" *.html      # esperado: 7 arquivos
grep -l "AW-18186496405" *.html        # esperado: 7 arquivos
grep -c "F0xNCI3x6bIcEJXT_99D" *.html main.js  # 6 páginas + main.js (index usa via main.js)

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
