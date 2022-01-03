require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.listen(process.env.gpi_nodejs_port);
console.log(`Open ${process.env.gpi_nodejs_baseurl}:${process.env.gpi_nodejs_port}/`);

app.use("/", require("./gpi_home"));
app.use("/gpi_", require("./gpi_home"));
app.use("/gpi_", require("./gpi_get-json-stream"));
