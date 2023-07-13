const MongoClient = require('mongodb').MongoClient;

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { login, comments } = JSON.parse(event.body);

  const uri = process.env.MONGODB_URL;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db('tindart');
    const users = database.collection('users');

    const query = { login };
    const update = {
      $set: { comments },
    };
    await users.updateOne(query, update);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Comments saved successfully' }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: err.message }),
    };
  } finally {
    await client.close();
  }
};
