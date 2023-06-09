import { Router } from "express";
import PokemonController from "../controller/pokemon.controller";
const router = Router();

const pokemonController = new PokemonController();

router.get("/pokemons", pokemonController.getAll);

router.get("/pokemon/:id", pokemonController.getOne);

router.get("/pokemon/", pokemonController.getPokemonsByType);

router.get("/pokemon/page/:id", pokemonController.getPokemonsByPage);
export default router;
