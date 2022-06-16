const nock = require('nock')
const getAllUser = require("../gateways/user");

test('Hello World API', async () => {
  nock('https://jsonplaceholder.typicode.com')
  .get('/users')
  .reply(200, [{},{},{}]);

  const response = await getAllUser();
  expect(response.code).toEqual(200);
  expect(response.data.length).toEqual(3);
});
