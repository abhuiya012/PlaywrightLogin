import {Page,Locator, expect} from '@playwright/test';
export class LoginPage{
   readonly page: Page;

    readonly txtUsername: Locator;

    readonly txtPassword: Locator;

    readonly btnLogin: Locator;

    readonly dashboard: Locator;
    constructor(page: Page){
        this.page = page;

        this.txtUsername = page.locator("input[name='username']");

        this.txtPassword = page.locator("input[name='password']");

        this.btnLogin = page.locator("button[type='submit']");

        this.dashboard = page.getByRole('heading', {
            name: 'Dashboard'
        });
    }
          async open() {

        await this.page.goto('/');

    }
     async login(username: string, password: string) {

        await this.txtUsername.fill(username);

        await this.txtPassword.fill(password);

        await this.btnLogin.click();

    }
    async verifyLogin() {

        await expect(this.dashboard).toBeVisible();

    }
}