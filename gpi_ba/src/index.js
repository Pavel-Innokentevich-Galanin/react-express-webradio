// gpi_ Библиотеки
const gpi_dotenv = require('dotenv');
const gpi_express = require('express');
const gpi_cors = require('cors');
const gpi_route_radio = require('./route/gpi_route_radio');

// gpi_ Инициализация
gpi_dotenv.config();
const gpi_app = gpi_express();
gpi_app.use(gpi_cors());

// gpi_ Запуск сервера
gpi_app.listen(process.env.gpi_nodejs_port);
console.log(`Open ${process.env.gpi_nodejs_baseurl}:${process.env.gpi_nodejs_port}/`);

// gpi_ Роутер home
gpi_app.get("/", function (gpi_request, gpi_response) {
    gpi_response.send("Hello, World!");
})

// gpi_ Роутер radio
gpi_app.use("/", gpi_route_radio);
