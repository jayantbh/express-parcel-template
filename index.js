const express = require("express");
const path = require("path");

const app = express();

const port = process.env.port || 3000;

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

app.get("/status", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`[Express + Parcel] App listening at http://localhost:${port}`);
});
