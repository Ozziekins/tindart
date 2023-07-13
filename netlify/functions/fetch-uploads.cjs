const MongoClient = require('mongodb').MongoClient;

exports.handler = async function (event, context, callback) {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const uri = process.env.MONGODB_URL;

  const { login } = event.queryStringParameters;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db('tindart');
    const users = database.collection('users');

    const query = { login };
    const projection = { uploadedImages: 1 };
    const user = await users.findOne(query, projection);

    return {
      statusCode: 200,
      body: JSON.stringify({ uploads: user.uploadedImages }),
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
