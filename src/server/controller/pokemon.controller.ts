import PokemonModel from "../models/pokemon.models";
import { Request, Response } from "express";

class PokemonController {
  async getAll(req: Request, res: Response) {
    try {
      const data = await new PokemonModel().getAll();

      return res.status(200).json(data);
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const data = await new PokemonModel().getById(+id);

      return res.status(200).json(data);
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  }

  async getPokemonsByType(req: Request, res: Response) {
    try {
      const type = req.query.type as string;

      // TODO: FiX THIS
      const legendary = parseInt(req.query.legendary as string);

      if (!type && !legendary) {
        return res.status(400).json({ error: "Query Error" });
      }

      if (type && !legendary) {
        const data = await new PokemonModel().getAllUniqueType(type);
        return res.status(200).json(data);
      }

      const data = await new PokemonModel().getAllUniqueTypeLegendary(
        type,
        legendary
      );

      return res.status(200).json(data);
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  }
}

export default PokemonController;
