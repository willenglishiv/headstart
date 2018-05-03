/* eslint-env node, jest */
import request from 'supertest';
import app from '../app';

describe('Express Application Tests', () => {
  test('Server is live and returns a 200 response', async () => {
    expect.assertions(1);
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});

