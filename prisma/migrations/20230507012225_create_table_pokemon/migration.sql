-- CreateTable
CREATE TABLE "Pokemons" (
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
    "spawns" BOOLEAN NOT NULL,
    "regional" BOOLEAN NOT NULL,
    "raidable" INTEGER NOT NULL,
    "hatchable" INTEGER NOT NULL,
    "shiny" BOOLEAN NOT NULL,
    "nest" BOOLEAN NOT NULL,
    "new" BOOLEAN NOT NULL,
    "not_gettable" BOOLEAN NOT NULL,
    "future_evolve" BOOLEAN NOT NULL,
    "CP_40" INTEGER NOT NULL,
    "CP_39" INTEGER NOT NULL
);
