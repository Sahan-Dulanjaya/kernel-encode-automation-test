import { test, expect } from '@playwright/test';
import { getToken } from './utils.js';

test.describe('Product Tests', () => {
  test.beforeAll(async () => {
    // Delay to ensure token is set
    await new Promise(resolve => setTimeout(resolve, 500));
    expect(getToken()).toBeTruthy();
  });

  test('List Products - Should return product array', async ({ request }) => {
    const response = await request.get('/api/products', {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    expect(response.status()).toBe(200);

    const products = await response.json();
    expect(Array.isArray(products)).toBe(true);

    products.forEach(product => {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('price');
    });
  });

  test('Create Product - Should save new product', async ({ request }) => {
    const newProduct = { name: 'Phone', price: 299 };

    const response = await request.post('/api/products', {
      data: newProduct,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.name).toBe(newProduct.name);
    expect(body.price).toBe(newProduct.price);
  });
});
