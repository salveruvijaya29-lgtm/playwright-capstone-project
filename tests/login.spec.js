import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
import { LoginPage } from '../pages/LoginPage.js';

dotenv.config({ path: path.resolve(__dirname, '../env/.env') });

test('Login test', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(process.env.USERNAME, process.env.PASSWORD);

    await expect(page).toHaveURL(/secure/);
    await expect(loginPage.flashMessage).toContainText(' You logged into a secure area!');
});