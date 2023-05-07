/*
  Warnings:

  - You are about to alter the column `future_evolve` on the `Pokemons` table. The data in that column could be lost. The data in that column will be cast from `Boolean` to `Int`.
  - You are about to alter the column `nest` on the `Pokemons` table. The data in that column could be lost. The data in that column will be cast from `Boolean` to `Int`.
  - You are about to alter the column `new` on the `Pokemons` table. The data in that column could be lost. The data in that column will be cast from `Boolean` to `Int`.
  - You are about to alter the column `not_gettable` on the `Pokemons` table. The data in that column could be lost. The data in that column will be cast from `Boolean` to `Int`.
  - You are about to alter the column `regional` on the `Pokemons` table. The data in that column could be lost. The data in that column will be cast from `Boolean` to `Int`.
  - You are about to alter the column `shiny` on the `Pokemons` table. The data in that column could be lost. The data in that column will be cast from `Boolean` to `Int`.
  - You are about to alter the column `spawns` on the `Pokemons` table. The data in that column could be lost. The data in that column will be cast from `Boolean` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pokemons" (
    "row" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "pokedex_number" INTEGER NOT NULL,
    "img_name" INTEGER NOT NULL,
    "generation" INTEGER NOT NULL,
    "evolution_stage" INTEGER NOT NULL,
    "evolved" INTEGER NOT NULL,
    "familid_id" INTEGER NOT NULL,
    "cross_gen" INTEGER NOT NULL,
    "type_1" TEXT NOT NULL,
    "type_2" TEXT NOT NULL,
    "weather_1" TEXT NOT NULL,
    "weather_2" TEXT NOT NULL,
    "stat_total" INTEGER NOT NULL,
    "atk" INTEGER NOT NULL,
    "def" INTEGER NOT NULL,
    "sta" INTEGER NOT NULL,
    "legendary" INTEGER NOT NULL,
    "aquireable" INTEGER NOT NULL,
    "spawns" INTEGER NOT NULL,
    "regional" INTEGER NOT NULL,
    "raidable" INTEGER NOT NULL,
    "hatchable" INTEGER NOT NULL,
    "shiny" INTEGER NOT NULL,
    "nest" INTEGER NOT NULL,
    "new" INTEGER NOT NULL,
    "not_gettable" INTEGER NOT NULL,
    "future_evolve" INTEGER NOT NULL,
    "CP_40" INTEGER NOT NULL,
    "CP_39" INTEGER NOT NULL
);
INSERT INTO "new_Pokemons" ("CP_39", "CP_40", "aquireable", "atk", "cross_gen", "def", "evolution_stage", "evolved", "familid_id", "future_evolve", "generation", "hatchable", "img_name", "legendary", "name", "nest", "new", "not_gettable", "pokedex_number", "raidable", "regional", "row", "shiny", "spawns", "sta", "stat_total", "type_1", "type_2", "weather_1", "weather_2") SELECT "CP_39", "CP_40", "aquireable", "atk", "cross_gen", "def", "evolution_stage", "evolved", "familid_id", "future_evolve", "generation", "hatchable", "img_name", "legendary", "name", "nest", "new", "not_gettable", "pokedex_number", "raidable", "regional", "row", "shiny", "spawns", "sta", "stat_total", "type_1", "type_2", "weather_1", "weather_2" FROM "Pokemons";
DROP TABLE "Pokemons";
ALTER TABLE "new_Pokemons" RENAME TO "Pokemons";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
