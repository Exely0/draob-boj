const express = require("express");
const cors = require("cors");
require("dotenv").config();
const genericRoutes = require("./routes/genericRoutes");
const connection = require("./config/db");
const app = express();
const port = process.env.PORT || 3001;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use("/api", genericRoutes);

connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données :", err.stack);
    return;
  }
  console.log("Connecté à la base de données MySQL");

  app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
  });
});
