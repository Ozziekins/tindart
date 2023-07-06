// const express = require('express')
const morgan = require('morgan')
const faker = require('faker')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const cors = require('cors')

const API_ENDPOINT = 'https://api.artic.edu/api/v1/artworks';

const SALT_ROUNDS = 3;
const app = express();

app.use(bodyParser.json());
app.use(cors());

const data = Array.from({ length: 5 + Math.random() * 20 }).map((_) => ({
  id: faker.datatype.uuid(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  address: `${faker.address.streetAddress()} ${faker.address.city()}`,
  description: faker.random.words(),
}));

const users = {};
const usersSession = {};
const LOGIN_SEPAROTOR = ';';

const authMiddleware = async (req, res, next) => {
  if (req.headers.authorization) {
    const authToken = Buffer.from(req.headers.authorization, 'base64').toString();
    const [login, hash] = authToken.split(LOGIN_SEPAROTOR);
    if (login && hash && login in users) {
      const result = await new Promise((resolve) =>
        bcrypt.compare(login, hash, function (err, result) {
          resolve(result);
        })
      );
      if (result) {
        next();
        return;
      }
    }
  }
  res.status(401).end();
};

app.get('/art', authMiddleware, (req, res) => {
  res.json(
    data.map((item) => {
      const newItem = { ...item };
      return newItem;
    })
  );
});

app.get('/info', authMiddleware, (req, res) => {
  res.json(
    data.map((item) => {
      const newItem = { ...item };
      delete newItem.description;
      return newItem;
    })
  );
});

app.post('/login', (req, res) => {
  if (req.body.login in users && req.body.password === users[req.body.login]) {
    bcrypt.hash(req.body.login, SALT_ROUNDS, function (err, hash) {
      res.status(200).json({
        token: Buffer.from(`${req.body.login}${LOGIN_SEPAROTOR}${hash}`).toString('base64'),
      });
    });
    return;
  }
  res.status(401).json({ message: 'Invalid login or password' });
});

app.post('/signup', (req, res) => {
  if (req.body.login in users) {
    res.status(400).json({
      message: 'Username already exists',
    });
  } else if (!req.body.login || !req.body.password) {
    res.status(400).json({
      message: 'Username and password required',
    });
  } else {
    users[req.body.login] = req.body.password;
    res.status(200).end();
  }
});

export const handler = async (event) => {
  try {
    if (event.httpMethod === 'GET' && event.path === '/art') {
      const response = {
        statusCode: 200,
        body: JSON.stringify(
          data.map((item) => {
            const newItem = { ...item };
            return newItem;
          })
        ),
      };
      return response;
    }

    if (event.httpMethod === 'GET' && event.path === '/info') {
      const response = {
        statusCode: 200,
        body: JSON.stringify(
          data.map((item) => {
            const newItem = { ...item };
            delete newItem.description;
            return newItem;
          })
        ),
      };
      return response;
    }

    if (event.httpMethod === 'POST' && event.path === '/login') {
      const { login, password } = JSON.parse(event.body);
      if (login in users && password === users[login]) {
        bcrypt.hash(login, SALT_ROUNDS, function (err, hash) {
          const response = {
            statusCode: 200,
            body: JSON.stringify({
              token: Buffer.from(`${login}${LOGIN_SEPAROTOR}${hash}`).toString('base64'),
            }),
          };
          return response;
        });
      } else {
        const response = {
          statusCode: 401,
          body: JSON.stringify({ message: 'Invalid login or password' }),
        };
        return response;
      }
    }

    if (event.httpMethod === 'POST' && event.path === '/signup') {
      const { login, password } = JSON.parse(event.body);
      if (login in users) {
        const response = {
          statusCode: 400,
          body: JSON.stringify({ message: 'Username already exists' }),
        };
        return response;
      } else if (!login || !password) {
        const response = {
          statusCode: 400,
          body: JSON.stringify({ message: 'Username and password required' }),
        };
        return response;
      } else {
        users[login] = password;
        const response = {
          statusCode: 200,
          body: JSON.stringify({}),
        };
        return response;
      }
    }

    const response = {
      statusCode: 404,
      body: JSON.stringify({ message: 'Not found' }),
    };
    return response;
  } catch (error) {
    const response = {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
    return response;
  }
};