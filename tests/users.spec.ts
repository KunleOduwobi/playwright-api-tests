import { test, expect } from '@playwright/test';
import { ApiClient } from '../utils/apiClient';

test('get user by id', async ({ request }) => {
  const api = new ApiClient(request);
  const response = await api.getUser(2);

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.data.id).toBe(2);
});
