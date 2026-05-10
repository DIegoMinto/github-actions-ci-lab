const request = require('supertest');
const app = require('./app');

describe('Pruebas de API Películas', () => {
  test('GET /movies - listar películas', async () => {
    const res = await request(app).get('/movies');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
  });

  test('POST /movies - crear película', async () => {
    const res = await request(app).post('/movies').send({ movie: "Inception", category: "Sci-Fi" });
    expect(res.statusCode).toBe(201);
  });
});