import { test, expect } from '@playwright/test';
import { credentials } from '../data/credentials.data';
import { urls } from '../data/urls.data';

test('Login should be stable using auto-wait and web-first assertions', async ({ page }) => {
    await page.goto(urls.login);
    await page.locator('#user-name').fill(credentials.username);
    await page.locator('#password').fill(credentials.password);
    await page.locator('#login-button').click();
    await expect(page).toHaveURL(urls.inventory);
    await expect(page.locator('.title')).toBeVisible({ timeout: 10_000 });
});