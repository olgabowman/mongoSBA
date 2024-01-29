app.get("/seed", async (req, res) => {
    try {
      // These methods should work for both, MongoDB Native Driver OR Mongoose
      // This will delete everything in the collection before the insetMany is ran,
      // this is done to prevent the database from getting cluttered. 
      // Below I'm using the Model like I would do in Mongoose but if you're using the Native Driver it'll be something like this (await collection.deleteMany({}) 
      await Model.deleteMany({}) 
      await Model.insertMany([
        {
          name: "Superman",
          powers: ["Flying", "Super Strength", "Laser Vision"],
          weakness: "Kryptonite"
        },
        {
          name: "Spiderman",
          powers: ["Web Slinging", "Super Strength", "Spidey Senses"],
          weakness: "Pizza"
        },
        {
          name: "Iron Man",
          powers: ["Flying", "Bulletproof", "Laser Blasters"],
          weakness: "Infinity Gauntlet"
        }
      ])
    } catch (err) {
      res.status(500).send("Something went wrong.")
    }
  })