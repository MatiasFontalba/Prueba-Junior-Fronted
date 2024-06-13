import "./components/component.js";
const express = require("express");
const app = express();

app.get("/articulo/:index", (req, res) => {
  console.log(req.params);
});
