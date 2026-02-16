import { APIRequestContext } from '@playwright/test';

export class GetAuthToken {
    constructor(private request: APIRequestContext) {}
    async getAuthToken() {
        const response = await this.request.post('/auth/login', {
            data: {
                username: process.env.USERNAME!,
                password: process.env.PASSWORD!
            }
        })
        const body = await response.json();
        return body.accessToken;
    }
}