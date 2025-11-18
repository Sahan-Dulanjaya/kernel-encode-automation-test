import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://kernelencode.com/', 
  },
  timeout: 30000,
});
