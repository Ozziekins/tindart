const bcrypt = require('bcrypt');
const SALT_ROUNDS = 3;
let users = {};

exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { login, password } = JSON.parse(event.body);

  if (login in users) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Username already exists' }),
    };
  } else if (!login || !password) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Username and password required' }),
    };
  } else {
    users[login] = password;
    return {
      statusCode: 200,
      body: JSON.stringify({}),
    };
  }
};
