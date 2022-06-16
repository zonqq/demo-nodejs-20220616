const getAllUser = require("../gateways/user");

test('Hello World API', async () => {
  const response = await getAllUser();
  expect(response.code).toEqual(200);
  expect(response.data.length).toEqual(10);
});
