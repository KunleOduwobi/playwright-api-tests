import { test, expect } from '@playwright/test';
import { AuthClient } from '../utils/authClient';

test.describe.serial('Authentication Tests', () => {
    let accessToken: string;
    test('Successful login returns token', async ({ request }) => {
        const auth = new AuthClient(request);

        const response = await auth.login(process.env.USERNAME!, process.env.PASSWORD!);

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.accessToken).toBeDefined();
        accessToken = body.accessToken;

    });

    test('Access protected endpoint with valid token', async ({ request }) => {
        const response = await request.get('/auth', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        expect(response.status()).toBe(200);

    });
});

