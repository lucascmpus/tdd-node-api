const prisma = require("../../prisma/prisma.js");

class PokemonModel {
  async getAll() {
    try {
      return await prisma.pokemons.findMany();
    } catch (e) {
      return e;
    }
  }

  async getById(id) {
    try {
      return await prisma.pokemons.findUnique({
        where: {
          id
        },
      });
    } catch (e) {
      return e;
    }
  }
}

module.exports = PokemonModel;
