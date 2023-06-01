const request = require('supertest');
const app = require('./index');

describe('Server', () => {
    afterAll((done) => {
        app.close(done);
    });
//   describe('GET /art', () => {
//     it('returns the art data', async () => {
//       const response = await request(app).get('/art');
//       expect(response.status).toBe(200);
//       expect(response.body).toEqual(/* expected response body */);
//     });
//   });

//   describe('GET /info', () => {
//     it('returns the art data without description', async () => {
//       const response = await request(app).get('/info');
//       expect(response.status).toBe(200);
//       expect(response.body).toEqual(/* expected response body */);
//     });
//   });

  describe('POST /signup', () => {
    it('signs up a new user with valid credentials', async () => {
      const response = await request(app)
        .post('/signup')
        .send({ login: 'newuser', password: 'password' });
      expect(response.status).toBe(200);
    });

    it('returns an error when signing up with an existing username', async () => {
      const response = await request(app)
        .post('/signup')
        .send({ login: 'newuser', password: 'password' });
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('message', 'Username already exists');
    });

    it('returns an error when signing up without username or password', async () => {
      const response = await request(app).post('/signup').send({});
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('message', 'Username and password required');
    });
  });


  describe('POST /login', () => {
    it('logs in with valid credentials', async () => {
      const response = await request(app)
        .post('/login')
        .send({ login: 'newuser', password: 'password' });
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('token');
    });

    it('returns an error with invalid credentials', async () => {
      const response = await request(app)
        .post('/login')
        .send({ login: '', password: 'password' });
      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('message', 'Invalid login or password');
    });
  });

});
