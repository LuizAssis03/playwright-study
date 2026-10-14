import { test, expect } from '@playwright/test';
import { credentials } from '../data/credentials.data';
import { urls } from '../data/urls.data';

test('should checkout a product', async ({ page }) => {
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

    await page.locator('.shopping_cart_link').click();
    await expect(page).toHaveURL(/cart/);
    await expect(page.locator('[data-test="cart-list"] [data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack');
    await page.locator('#checkout').click();

    await expect(page).toHaveURL(/checkout-step-one/);
    await page.locator('#first-name').fill('Luiz');
    await page.locator('#last-name').fill('Assis');
    await page.locator('#postal-code').fill('12345');
    await page.locator('#continue').click();

    await expect(page).toHaveURL(/checkout-step-two/);
    await expect(page.locator('[data-test="cart-list"] [data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack');
    await page.locator('#finish').click();

    await expect(page).toHaveURL(/checkout-complete/);
    await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
});