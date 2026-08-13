import { test } from '../fixtures/testFixture';

test.describe('Login Tests', () => {

    test.beforeEach(async ({ loginPage }) => {

        await loginPage.open();

    });

    test('Valid Login', async ({ loginPage }) => {

        await loginPage.login(
            'Admin',
            'admin123'
        );

        await loginPage.verifyLogin();

    });

});