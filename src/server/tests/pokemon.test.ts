import axios from "axios";

const request = (url: string) => {
  return axios.get(`http://localhost:3030/${url}`);
};

const randomNumberId = () => {
  return Math.floor(Math.random() * 822) + 1;
};

describe("Route pokemons", () => {
  test("should return all pokemons", async () => {
    const response = await request("pokemons").then((res) => {
      expect(res.status).toEqual(200);
      expect(res.data).toHaveLength(822);
    });
  });

  test("should return one pokemon", async () => {
    const id = randomNumberId();
    const response = await request(`pokemon/${id}`).then((res) => res.data);

    expect(response.id).toBe(id);
  });

  test("should return all pokemons type normal", async () => {
    const type = "normal";
    const response = await request(`pokemon/?type=${type}`).then((res) => {
      expect(res.status).toEqual(200);
    });
  });

  test("should return all pokemons type normal and legendary", async () => {
    const type = "normal";
    const legendary = 1;
    const response = await request(
      `pokemon/?type=${type}&legendary=${legendary}`
    ).then((res) => {
      expect(res.status).toEqual(200);
      expect(res.data.length).toBeGreaterThan(1);
      expect(res.data.length).toBe(4);
    });
  });
});
