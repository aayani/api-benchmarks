const express = require("express");

const app = express();
const port = Number(process.env.PORT) || 3000;

app.disable("x-powered-by");

app.get("/", (req, res) => {
  res
    .status(200)
    .type("txt")
    .send("Welcome to express!");
});

app.use((req, res) => {
  res
    .status(404)
    .type("txt")
    .send(`Cannot ${req.method} ${req.originalUrl}`);
});

app.listen(port, () => {
  console.log(`🚀  API running at http://localhost:${port}`);
});
