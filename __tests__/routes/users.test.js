/* eslint-env node, jest */
import request from 'supertest';
import app from '../../app';

describe('User Route tests', () => {
  test('User route responds with a resource', async () => {
    expect.assertions(1);
    const response = await request(app).get('/users');
    expect(response.text).toBe('respond with a resource');
  });

  test('User/:id route returns data with valid numeric ID', async () => {
    expect.assertions(1);
    const id = 1;
    const mockResponse = { id, name: 'Will English IV' };
    const response = await request(app)
      .get(`/users/${id}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/);
    expect(JSON.parse(response.text)).toMatchObject(mockResponse);
  });

  test('User/:id route returns an error with non-numeric id', async () => {
    expect.assertions(1);
    const id = 'something';
    const response = await request(app)
      .get(`/users/${id}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/);
    expect(response.statusCode).toBe(400);
  });
});
