const nock = require('nock')
const getAllUser = require("../../gateways/user");

test('Success case with 200', async () => {
  nock('https://jsonplaceholder.typicode.com')
  .get('/users')
  .reply(200, [{},{},{}]);

  const response = await getAllUser();
  expect(response.code).toEqual(200);
  expect(response.data.length).toEqual(3);
});

test('Fail case case with 20000', async () => {
  nock('https://jsonplaceholder.typicode.com')
  .get('/users')
  .reply(500);

  const response = await getAllUser();
  expect(response.code).toEqual(20000);
});
