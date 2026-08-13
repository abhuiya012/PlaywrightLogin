import { test } from '../fixtures/testFixture';

test.describe('Login Tests', () => {

    test.beforeEach(async ({ loginPage }) => {

        await loginPage.open();

    });

    test('Valid Login', async ({ loginPage }) => {

        await loginPage.login(
    process.env.USERNAME!,
    process.env.PASSWORD!
);

        await loginPage.verifyLogin();
        

    });

});