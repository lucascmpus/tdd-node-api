import prisma from "../../prisma/prisma";

class PokemonModel {
  async getAll() {
    const pokemons = await prisma.pokemons.findMany();

    if (!pokemons) throw new Error("Pokemons not found");

    return pokemons;
  }

  async getById(id: number) {
    const pokemon = await prisma.pokemons.findUnique({
      where: {
        id,
      },
    });
    if (!pokemon) throw new Error("Pokemon not found");

    return pokemon;
  }

  async getAllUniqueType(type: string) {
    const pokemonsFilterByType = await prisma.pokemons.findMany({
      where: {
        type_1: type,
      },
    });

    if (!pokemonsFilterByType) throw new Error("Type not found");

    return pokemonsFilterByType;
  }

  async getAllUniqueTypeLegendary(type: string, legendary: number) {
    const pokemonsFilterByTypeLegendary = await prisma.pokemons.findMany({
      where: {
        type_1: type,
        legendary,
      },
    });

    if (!pokemonsFilterByTypeLegendary)
      throw new Error("Type/Legendary not found");

    return pokemonsFilterByTypeLegendary;
  }

  async getPokemonsPerPage(page: number) {
    const limitPage = 20;

    const pokemonsPerPage = await prisma.pokemons.findMany({
      skip: page * limitPage,
      take: limitPage,
      orderBy: {
        id: "asc",
      },
    });

    if (!pokemonsPerPage) throw new Error("Not Found Pokemons");

    return pokemonsPerPage;
  }
}

export default PokemonModel;
