const { json } = require('netlify-functions/middleware')
const faker = require('faker')
const bcrypt = require('bcrypt')
const cors = require('cors')

const API_ENDPOINT = 'https://api.artic.edu/api/v1/artworks'

const SALT_ROUNDS = 3

const data = Array.from({ length: 5 + Math.random() * 20 }).map(() => ({
  id: faker.datatype.uuid(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  address: `${faker.address.streetAddress()} ${faker.address.city()}`,
  description: faker.random.words()
}))

const users = {}
const LOGIN_SEPAROTOR = ';'

const authMiddleware = async (event, context) => {
  if (event.headers.authorization) {
    const authToken = Buffer.from(event.headers.authorization, 'base64').toString()
    const [login, hash] = authToken.split(LOGIN_SEPAROTOR)
    if (login && hash && login in users) {
      const result = await new Promise((resolve) =>
        bcrypt.compare(login, hash, function (err, result) {
          resolve(result)
        })
      )
      if (result) {
        return true
      }
    }
  }
  return false
}

const handleArtRequest = async (event, context) => {
  if (event.httpMethod === 'GET' && event.path === '/art') {
    if (await authMiddleware(event, context)) {
      return {
        statusCode: 200,
        body: JSON.stringify(data)
      }
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: 'Unauthorized' })
      }
    }
  }

  if (event.httpMethod === 'GET' && event.path === '/info') {
    if (await authMiddleware(event, context)) {
      const sanitizedData = data.map((item) => {
        const { description, ...newItem } = item
        return newItem
      })

      return {
        statusCode: 200,
        body: JSON.stringify(sanitizedData)
      }
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: 'Unauthorized' })
      }
    }
  }

  if (event.httpMethod === 'POST' && event.path === '/login') {
    const requestBody = JSON.parse(event.body)

    if (requestBody.login in users && requestBody.password === users[requestBody.login]) {
      bcrypt.hash(requestBody.login, SALT_ROUNDS, function (err, hash) {
        return {
          statusCode: 200,
          body: JSON.stringify({
            token: Buffer.from(`${requestBody.login}${LOGIN_SEPAROTOR}${hash}`).toString('base64')
          })
        }
      })
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: 'Invalid login or password' })
      }
    }
  }

  if (event.httpMethod === 'POST' && event.path === '/signup') {
    const requestBody = JSON.parse(event.body)

    if (requestBody.login in users) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Username already exists' })
      }
    } else if (!requestBody.login || !requestBody.password) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Username and password required' })
      }
    } else {
      users[requestBody.login] = requestBody.password
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Signup successful' })
      }
    }
  }

  return {
    statusCode: 404,
    body: JSON.stringify({ message: 'Route not found' })
  }
}

module.exports = {
  handler: json(handleArtRequest)
}
