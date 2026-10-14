import { test, expect } from '@playwright/test';
import { credentials } from '../data/credentials.data';
import { urls } from '../data/urls.data';

test('Login should be stable using toBeVisible on credentials', async ({ page }) => {
    await page.goto(urls.login);

    await expect(page.locator('#user-name')).toBeVisible();
    await page.locator('#user-name').fill(credentials.username);
    await expect(page.locator('#password')).toBeVisible();
    await page.locator('#password').fill(credentials.password);
    await page.locator('#login-button').click();

    await expect(page).toHaveURL(urls.inventory);
    await expect(page.locator('.title')).toHaveText('Products');
    await expect(page.locator('.title')).toBeVisible();
});
