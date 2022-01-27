const db = require("../config/connection");
const { User, Recipe } = require("../models");
const userSeeds = require("./userSeeds.json");
const recipeSeeds = require("./recipeSeeds.json");

db.once("open", async () => {
  try {
    //delete database to start fresh
    await User.deleteMany({});
    await Recipe.deleteMany({});

    //create our users and property
    const users = await User.insertMany(userSeeds);
    const recipes = await Recipe.insertMany(recipeSeeds);

    console.log("Data is seeded");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
