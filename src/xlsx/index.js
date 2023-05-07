const xlsx = require("xlsx");
const path = require("path");
const express = require("express");
const prisma = require("../prisma/prisma.js");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

var file = xlsx.readFile(path.join(__dirname, "pokego.xlsx"));

const pokexcel = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[0]]);
let inserts = [];
app.get("/", async function (req, res) {
  pokexcel.forEach(async (item) => {
    console.log("Criando Item -> ", item.Name);
    inserts.push(
      prisma.pokemons.create({
        data: {
          name: item["Name"],
          pokedex_number: item["Pokedex Number"],
          img_name: String(item["Img name"]),
          generation: item["Generation"],
          evolution_stage:
            typeof item["Evolution Stage"] !== "string"
              ? item["Evolution Stage"]
              : -1,
          evolved: String(item["Evolved"]),
          familid_id: item["FamilyID"],
          cross_gen: item["Cross Gen"],
          type_1: item["Type 1"],
          type_2: item["Type 2"],
          weather_1: item["Weather 1"],
          weather_2: item["Weather 2"],
          stat_total: item["STAT TOTAL"],
          atk: item["ATK"],
          def: item["DEF"],
          sta: item["STA"],
          legendary: item["Legendary"],
          aquireable: item["Aquireable"],
          spawns: item["Spawns"],
          regional: item["Regional"],
          raidable: item["Raidable"],
          hatchable: item["Hatchable"],
          shiny: item["Shiny"],
          nest: item["Nest"],
          new: item["New"],
          not_gettable: item["Not-Gettable"],
          future_evolve: item["Future Evolve"],
          CP_40: item["100% CP @ 40"],
          CP_39: item["100% CP @ 39"],
        },
      })
    );
  });

  await prisma.$transaction(inserts);

  return res.status(200).send();
});

app.listen(3030, function () {
  console.log("Listening on port 3030 😒🚀");
});
