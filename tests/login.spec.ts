import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Tests', () => {

    test('Valid Login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.login(
            'Admin',
            'admin123'
        );

        await loginPage.verifyLogin();

    });

});