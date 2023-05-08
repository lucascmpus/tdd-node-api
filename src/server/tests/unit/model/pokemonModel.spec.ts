import PokemonModel from "../../../models/pokemon.models";

const makeSut = () => {
  return new PokemonModel();
};

describe("Model: Pokemon", () => {
  test("should return all pokemons", async () => {
    const model = await makeSut().getAll();

    expect(model.length).toBeGreaterThan(1);
  });
});
