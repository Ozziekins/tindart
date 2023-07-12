const faker = require('faker');
const bcrypt = require('bcrypt');

const API_ENDPOINT = 'https://api.artic.edu/api/v1/artworks';
const SALT_ROUNDS = 3;
const LOGIN_SEPAROTOR = ';';

const data = Array.from({ length: 5 + Math.random() * 20 }).map(() => ({
  id: faker.datatype.uuid(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  address: `${faker.address.streetAddress()} ${faker.address.city()}`,
  description: faker.random.words(),
}));

const users = {};

const authMiddleware = async (event) => {
  if (event.headers.authorization) {
    const authToken = Buffer.from(event.headers.authorization, 'base64').toString();
    const [login, hash] = authToken.split(LOGIN_SEPAROTOR);
    if (login && hash && login in users) {
      const result = await new Promise((resolve) =>
        bcrypt.compare(login, hash, function (err, result) {
          resolve(result);
        })
      );
      if (result) {
        return;
      }
    }
  }
  throw new Error('Unauthorized');
};

const handler = async (event) => {
  try {
    if (event.httpMethod === 'GET' && event.path === '/art') {
      return {
        statusCode: 200,
        body: JSON.stringify(
          data.map((item) => {
            const newItem = { ...item };
            return newItem;
          })
        ),
      };
    }

    if (event.httpMethod === 'GET' && event.path === '/info') {
      return {
        statusCode: 200,
        body: JSON.stringify(
          data.map((item) => {
            const newItem = { ...item };
            delete newItem.description;
            return newItem;
          })
        ),
      };
    }

    if (event.httpMethod === 'POST' && event.path === '/login') {
      const { login, password } = JSON.parse(event.body);
      if (login in users && password === users[login]) {
        const token = await new Promise((resolve) =>
          bcrypt.hash(login, SALT_ROUNDS, function (err, hash) {
            resolve(Buffer.from(`${login}${LOGIN_SEPAROTOR}${hash}`).toString('base64'));
          })
        );
        return {
          statusCode: 200,
          body: JSON.stringify({
            token,
          }),
        };
      } else {
        throw new Error('Invalid login or password');
      }
    }

    if (event.httpMethod === 'POST' && event.path === '/signup') {
      const { login, password } = JSON.parse(event.body);
      if (login in users) {
        throw new Error('Username already exists');
      } else if (!login || !password) {
        throw new Error('Username and password required');
      } else {
        users[login] = password;
        return {
          statusCode: 200,
          body: JSON.stringify({}),
        };
      }
    }

    return {
      statusCode: 404,
      body: JSON.stringify({ message: 'Not found' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};

const config = { path: "/auth" };

module.exports = { handler, config };
