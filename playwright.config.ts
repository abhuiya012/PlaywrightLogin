
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({
    path: path.resolve(__dirname, '.env.qa')
});

export default defineConfig({

  testDir: './tests',

  fullyParallel: true,

  reporter: 'html',

  use: {
    baseURL: process.env.BASE_URL,

    headless: process.env.CI ? true : false,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

});