const axios = require("axios");

test("should return all pokemons", async function () {
  const response = await axios
    .get("http://localhost:3030/pokemons")
    .then((res) => res.data);

  expect(response).toHaveLength(822);
});
