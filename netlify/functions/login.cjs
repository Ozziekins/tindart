const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 3;
const LOGIN_SEPARATOR = ';';

const url = process.env.MONGODB_URL;

const dbName = 'tindart';

exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { login, password } = JSON.parse(event.body);

  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();

    const db = client.db(dbName);
    const users = db.collection('users');

    const existingUser = await users.findOne({ login });
    
    if (existingUser && await bcrypt.compare(password, existingUser.password)) {
      const token = Buffer.from(`${login}${LOGIN_SEPARATOR}${existingUser.password}`).toString('base64');
      return {
        statusCode: 200,
        body: JSON.stringify({
          token,
        }),
      };
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: 'Invalid login or password' }),
      };
    }

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  } finally {
    await client.close();
  }
};
