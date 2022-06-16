const request = require("supertest");
const app = require("../../server");

test('Hello World API', async () => {
  const response = await request(app)
      .get('/api')
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Welcome to TDD World');
});
