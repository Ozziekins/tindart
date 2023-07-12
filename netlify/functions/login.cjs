const bcrypt = require('bcrypt');
const SALT_ROUNDS = 3;
const LOGIN_SEPARATOR = ';';
let users = {};

exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { login, password } = JSON.parse(event.body);
  
  if (login in users && password === users[login]) {
    const hash = await bcrypt.hash(login, SALT_ROUNDS);
    return {
      statusCode: 200,
      body: JSON.stringify({
        token: Buffer.from(`${login}${LOGIN_SEPARATOR}${hash}`).toString('base64'),
      }),
    };
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Invalid login or password' }),
    };
  }
};
