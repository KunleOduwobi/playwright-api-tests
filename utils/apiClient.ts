import { APIRequestContext } from '@playwright/test';

export class ApiClient {
  constructor(private request: APIRequestContext) {}

  async getUser(id: number) {
    return this.request.get(`/users/${id}`);
  }

  async createUser(data: any) {
    return this.request.post('/users', { data });
  }

  async getPost(id: number) {
    return this.request.get(`/posts/${id}`);
  }

  async createPost(data: object) {
    return this.request.post('/posts', { data });
  }

  async updatePost(id: number, data: object) {
    return this.request.put(`/posts/${id}`, { data });
  }

  async deletePost(id: number) {
    return this.request.delete(`/posts/${id}`);
  }
}
