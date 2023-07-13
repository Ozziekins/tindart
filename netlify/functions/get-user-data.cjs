const MongoClient = require('mongodb').MongoClient;

const url = process.env.MONGODB_URL;
const dbName = 'tindart';

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { login } = event.queryStringParameters;

  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();

    const db = client.db(dbName);
    const users = db.collection('users');

    const user = await users.findOne({ login });

    if (!user) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'User not found' }),
      };
    }

    const { displayName, description, photo } = user;

    return {
      statusCode: 200,
      body: JSON.stringify({ displayName, description, photo }),
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
