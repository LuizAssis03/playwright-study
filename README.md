# playwright-study

Projeto de estudo de testes E2E com [Playwright](https://playwright.dev/) e TypeScript, usando o site de demonstração [SauceDemo](https://www.saucedemo.com/).

## Conteúdo

### Day 01

| Teste | O que cobre |
| --- | --- |
| `login-estavel.spec.ts` | Login usando asserções que esperam o estado da página (`toBeVisible`, `toHaveURL`) |
| `login-flaky.spec.ts` | Exemplo proposital de teste instável com `waitForTimeout` e checagem única de URL |
| `carrinho.spec.ts` | Adicionar um produto ao carrinho |
| `checkout.spec.ts` | Fluxo de checkout de um produto |

Os dados de teste (credenciais públicas do SauceDemo e URLs) ficam em `day-01/data`.

## Estrutura

```
day-01/
  data/    # credenciais e URLs
  tests/   # specs
playwright.config.ts
.github/workflows/playwright.yml
```

## Como rodar

```bash
npm install
npx playwright install

npm test              # roda todos os testes (headless)
npm run test:headed   # com o navegador visível
npm run test:ui       # modo UI do Playwright
npm run test:debug    # modo debug
npm run report        # abre o último relatório HTML
```

## CI

Os testes rodam no GitHub Actions a cada push e pull request na `main`. O relatório HTML fica disponível como artifact do workflow.
