import { test, expect } from '@playwright/test';
import { setToken } from './utils.js';

test('Login Test - Should return token', async ({ request }) => {
  const response = await request.post('/api/login', {
    data: {
      email: 'demo@example.com',
      password: 'secret123',
    },
  });

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.token).toBeTruthy();

  setToken(body.token);
  console.log(`Token saved: ${body.token}`);
});
