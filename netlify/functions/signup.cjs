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
    
    if (existingUser) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Username already exists' }),
      };
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    await users.insertOne({
      login,
      password: hashedPassword,
    });

    const token = Buffer.from(`${login}${LOGIN_SEPARATOR}${hashedPassword}`).toString('base64');

    return {
      statusCode: 200,
      body: JSON.stringify({
        token,
      }),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  } finally {
    await client.close();
  }
};
