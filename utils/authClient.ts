import { APIRequestContext } from '@playwright/test';

export class AuthClient {
  constructor(private request: APIRequestContext) {}

  async login(username: string, password: string) {
    const response = await this.request.post('/auth/login', {
      data: { username, password }
    });

    return response;
  }
}
