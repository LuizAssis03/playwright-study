import { test, expect } from '@playwright/test';
import { credentials } from '../data/credentials.data';
import { urls } from '../data/urls.data';

// Exemplo propositalmente instável: espera tempo fixo em vez de esperar o estado da página.
test('Login should be flaky using waitForTimeout on credentials', async ({ page }) => {
    await page.goto(urls.login);
    await page.locator('#user-name').fill(credentials.username);
    // Espera fixa: falha se a página demorar mais de 1s, desperdiça tempo se for rápida.
    await page.waitForTimeout(1000);
    await page.locator('#password').fill(credentials.password);
    await page.waitForTimeout(1000);
    await page.locator('#login-button').click();
    await page.waitForTimeout(1000);
    // Confere a URL só uma vez. Se a página ainda estiver carregando, o teste falha.
    expect(page.url()).toContain(urls.inventory);
});
