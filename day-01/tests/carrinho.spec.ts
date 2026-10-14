import { test, expect } from '@playwright/test';
import { credentials } from '../data/credentials.data';
import { urls } from '../data/urls.data';

test('should add a product to the cart', async ({ page }) => {
    await page.goto(urls.login);

    await page.locator('#user-name').fill(credentials.username);
    await expect(page.locator('#user-name')).toHaveValue(credentials.username);
    await page.locator('#password').fill(credentials.password);
    await page.locator('#login-button').click();

    await expect(page).toHaveURL(/inventory/);
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    await expect(page.locator('#remove-sauce-labs-backpack')).toBeVisible();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});
