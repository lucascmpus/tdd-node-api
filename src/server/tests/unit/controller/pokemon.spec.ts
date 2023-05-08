import PokemonController from "../../../controller/pokemon.controller";
import { Request, Response } from "express";

const makeSut = () => {
  return new PokemonController();
};

describe("Controller: Pokemon", () => {
  describe("Get All Pokemons: getAll", () => {
    test("should return a list of pokemons", () => {
      const controller = makeSut().getAll;
    });
  });
});
