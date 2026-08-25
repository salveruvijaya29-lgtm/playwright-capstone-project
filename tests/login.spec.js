import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../env/.env') });

test('Login test', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/login');
    await page.fill('#username', process.env.USERNAME);
    await page.fill('#password', process.env.PASSWORD);
    await page.click('#submit-login');

    await expect(page).toHaveURL(/secure/);
    await expect(page.locator('#flash')).toContainText(' You logged into a secure area!');
});