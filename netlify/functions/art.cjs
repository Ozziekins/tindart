const faker = require('faker')

const data = Array.from({ length: 5 + Math.random() * 20 }).map((_) => ({
    id: faker.datatype.uuid(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    address: `${faker.address.streetAddress()} ${faker.address.city()}`,
    description: faker.random.words(),
  }));

exports.handler = async function(event, context) {
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      data.map((item) => {
        const newItem = { ...item };
        return newItem;
      })
    ),
  };
};
