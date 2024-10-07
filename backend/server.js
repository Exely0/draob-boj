const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3001;

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/", (req, res) => {
  res.send("Hello from Node.js!");
});

app.listen(port, () => {
  console.log(`Serveur Node.js démarré sur http://localhost:${port}`);
});
