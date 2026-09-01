import { test, expect } from '@playwright/test';
import formData from '../helpers/formData.json' assert { type: 'json' };
import { FormPage } from '../pages/FormPage.js';

test('form submission with valid data', async ({ page }) => {
    const formPage = new FormPage(page);

    await formPage.goto();
    await formPage.fillForm(formData);
    await formPage.submit();

    await expect(formPage.validFeedback).toBeVisible();
});
