const db = require("../config/connection");
const { User } = require("../models");
const userSeeds = require("./userSeeds.json");

db.once("open", async () => {
  try {
    //delete database to start fresh
    await User.deleteMany({});

    //create our users and property
    const users = await User.insertMany(userSeeds);

    for (newUser of users) {
      await newUser.save();
    }

    console.log("User data is seeded");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
