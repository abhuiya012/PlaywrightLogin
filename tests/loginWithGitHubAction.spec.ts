import { test } from '../fixtures/testFixture';

test.describe('Login Tests', () => {

    test.beforeEach(async ({ loginPage }) => {

        await loginPage.open();

    });

    test('Valid Login', async ({ loginPage }) => {

        await loginPage.login(
    process.env.APP_USERNAME!,
    process.env.APP_PASSWORD!
);

        await loginPage.verifyLogin();
        

    });

});