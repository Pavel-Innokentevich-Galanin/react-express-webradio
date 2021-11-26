require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.listen(process.env.NODEJS_LOCALE_PORT);
console.log(`Open ${process.env.NODEJS_BASEURL}:${process.env.NODEJS_LOCALE_PORT}/`);

app.use("/", require("./gpi_home"));
app.use("/gpi_", require("./gpi_home"));
app.use("/gpi_", require("./gpi_get-json-stream"));
