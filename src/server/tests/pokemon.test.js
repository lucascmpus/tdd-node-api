const axios = require("axios");

const request = function (url) {
  return axios.get(`http://localhost:3030/${url}`);
};

const randomNumberId = function () {
  return Math.floor(Math.random() * 822) + 1;
};

test("should return all pokemons", async function () {
  const response = await request("pokemons").then((res) => res.data);

  expect(response).toHaveLength(822);
});

test("should return one pokemon", async function () {
  const id = randomNumberId();
  const response = await request(`pokemon/${id}`).then((res) => res.data);

  expect(response.id).toBe(id);
});
