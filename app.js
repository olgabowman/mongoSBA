
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;


mongoose.connect('your_mongo_connection_string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schema
const superheroSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  powers: [String],
  weakness: String,
});


const Superhero = mongoose.model('Superhero', superheroSchema);


app.get("/seed", async (req, res) => {
  try {
    
    await Superhero.deleteMany({});

    
    await Superhero.insertMany([
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
    ]);

    res.send("Database seeded successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong.");
  }
});

// Basic route to check if the server is running
app.get('/', (req, res) => {
  res.send('Task Manager App is running!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
