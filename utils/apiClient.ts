import { APIRequestContext } from '@playwright/test';

export class ApiClient {
  constructor(private request: APIRequestContext) {}

  async getUser(id: number) {
    return this.request.get(`/users/${id}`);
  }

  async createUser(data: any) {
    return this.request.post('/users', { data });
  }

  async getPosts(id: number) {
    return this.request.get(`/posts/${id}`);
  }
}
