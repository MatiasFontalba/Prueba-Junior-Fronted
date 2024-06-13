//import express from "express";
//const express = require('express');
//const server = express();
//server.set("trust proxy", true);
//server.use("/", express.static(__dirname + "/public"));
//server.listen(8438);
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const server = express();
server.set("trust proxy", true);
server.use("/", express.static(path.join(__dirname, "src")));
server.listen(8438);
console.log("Live server http://localhost:8438");
