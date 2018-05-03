/* eslint-env node, jest */
import request from 'supertest';
import app from '../../app';

describe('Index Route Tests', () => {
  test('Ping route returns Pong', async () => {
    expect.assertions(1);
    const response = await request(app).get('/ping');
    expect(response.text).toBe('Pong');
  });

  test('Status route returns Ok', async () => {
    expect.assertions(1);
    const response = await request(app).get('/status');
    expect(response.text).toBe('Ok');
  });

  test('index route returns rendered HTML', async () => {
    expect.assertions(1);
    const response = await request(app).get('/');
    expect(response.text).toContain('Express');
  });

  test('index route matches snapshot', async () => {
    expect.assertions(1);
    const response = await request(app).get('/');
    expect(response.text).toMatchSnapshot();
  });
});
