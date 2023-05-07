const {Router} = require("express");
const PokemonController = require("../controller/pokemon.controller.js");

const router = Router();

const pokemonController = new PokemonController();

router.get("/pokemons", pokemonController.getAll);

module.exports = router;
