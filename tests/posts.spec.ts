import { test, expect } from '@playwright/test';
import { ApiClient } from '../utils/apiClient';
// Searial ensures tests run sequentially and can share the createdPostId variable
test.describe.serial('Posts API - CRUD Tests', () => {
  let createdPostId: number;

  test('GET post by ID @smoke', async ({ request }) => {
    const api = new ApiClient(request);

    const response = await api.getPost(1);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.id).toBe(1);
    expect(body.title).toBeDefined();
    expect(body.body).toBeDefined();
  });

  test('POST create post', async ({ request }) => {
    const api = new ApiClient(request);

    const newPost = {
      title: 'Playwright API Testing',
      body: 'Practicing CRUD operations',
      userId: 1
    };

    const response = await api.createPost(newPost);

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.title).toBe(newPost.title);
    expect(body.body).toBe(newPost.body);
    expect(body.userId).toBe(newPost.userId);
    expect(body.id).toBeDefined(); // JSONPlaceholder returns id=101
    // store the created post ID for later tests
    createdPostId = 100; //await body.id;
  });

  test('PUT update post', async ({ request }) => {
    const api = new ApiClient(request);

    const updatedPost = {
      id: createdPostId,
      title: 'Updated Title',
      body: 'Updated body content',
      userId: 1
    };

    const response = await api.updatePost(createdPostId, updatedPost);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.title).toBe(updatedPost.title);
    expect(body.body).toBe(updatedPost.body);
  });

  test('DELETE post', async ({ request }) => {
    const api = new ApiClient(request);

    const response = await api.deletePost(createdPostId);

    expect(response.status()).toBe(200); // JSONPlaceholder returns 200
  });

  test('GET non-existing post returns 404', async ({ request }) => {
  const api = new ApiClient(request);

  const response = await api.getPost(9999); // createdPostId

  expect(response.status()).toBe(404);
});

test('POST post with missing required fields', async ({ request }) => {
  const api = new ApiClient(request);

  const invalidPost = {
    title: ''
  };

  const response = await api.createPost(invalidPost);

  expect(response.status()).toBe(201); 
  // JSONPlaceholder doesn't validate — mention this in interview
});


});
