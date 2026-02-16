import { test, expect } from '@playwright/test';
import Ajv from 'ajv';
import { userSchema } from '../schemas/user.schema';
import { describe } from 'node:test';

test.describe('User API - Schema Validation', () => {
  const ajv = new Ajv({ formats: { email: true } });
  const validate = ajv.compile(userSchema);

  test('GET user by ID - Schema Validation', async ({ request }) => {
    const response = await request.get('/users/1');
    expect(response.status()).toBe(200);

    const body = await response.json();
    const valid = validate(body);
    if (!valid) {
      console.error(validate.errors);
    }
    expect(valid).toBe(true);
  });
});