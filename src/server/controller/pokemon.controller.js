const PokemonModel = require("../models/pokemon.models.js");

class PokemonController {
  async getAll(req, res) {
    try {
      const data = await new PokemonModel().getAll();

      return res.status(200).json(data);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  }
}

module.exports = PokemonController;
