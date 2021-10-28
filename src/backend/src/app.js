require('dotenv').config();
const express = require('express');
const cors = require('cors');
const gpi_get_radio = require("./gpi_get_radio.js");

const app = express();
app.use(cors());
app.listen(process.env.NODEJS_LOCALE_PORT);
console.log(`Open ${process.env.NODEJS_BASEURL}:${process.env.NODEJS_LOCALE_PORT}/`);

app.get("/", function(req, res) {
    res.send("Hello, World!");
});

app.get("/gpi-get-radio", gpi_get_radio);
