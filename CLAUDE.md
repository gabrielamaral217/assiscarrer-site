# Instruções para agentes Claude trabalhando neste repo

## 🚨 ANTES DE QUALQUER MUDANÇA, LEIA: `MARKETING-LOG.md`

Esse arquivo contém:
- Estado atual de TODOS os sistemas (tracking, campanhas, GMN, etc)
- Todos os IDs em produção (GTM, GA4, Meta Pixel, Google Ads tag e rótulo)
- Histórico cronológico de mudanças
- Pendências e decisões já tomadas
- Convenções de copy (gênero feminino, "7 anos", "Flavia" sem acento, etc)

**Não tomar decisões sem ler primeiro o log.** A maioria das perguntas que você tem provavelmente já foi respondida lá.

## 🔄 DEPOIS de qualquer mudança ligada a marketing

1. Atualize a seção **Status Atual** do `MARKETING-LOG.md` se mudou estado
2. Adicione uma entrada nova no **Histórico** (data, commit SHA, o quê, por quê)
3. Atualize **Última atualização** no topo do arquivo
4. Inclua o log no mesmo commit das suas mudanças

## Sobre este projeto

- **Cliente:** Assis Carrer Arquitetura (escritório em SJC)
- **Stack:** HTML estático + GitHub Pages
- **Site:** https://www.assiscarrer-arquitetura.com
- **Repo:** `gabrielamaral217/assiscarrer-site` (branch `main` deploya automático)
- **Plano de marketing:** `planomarketingassiscarrer.pdf` (raiz do repo)

## Comandos básicos

```bash
# Preview local
npx serve -l 3000 .

# Validação rápida dos tracking IDs (deve retornar contagens não-zero)
grep -c "AW-18186496405\|G-TXWFQ3D6PQ\|GTM-P6F5BN7Z" *.html

# Confirma que tag antiga foi totalmente substituída
grep -r "AW-18185024974" *.html main.js  # esperado: vazio
```

## Restrições importantes

- **NUNCA tocar em cartão de crédito** (já tem cadastrado no Google Ads — não precisa)
- **NUNCA ativar campanhas pagas sem confirmação explícita** do usuário
- **Sempre commitar `MARKETING-LOG.md`** junto com mudanças de marketing
