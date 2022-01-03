// gpi_ Библиотеки
const gpi_express = require('express');
const gpi_Lautfm = require('lautfm');

// gpi_ Инициализация
const gpi_router = gpi_express.Router();

// gpi_ Роутер gpi_get_radio
gpi_router.get("/gpi_get_radio_filtred", async function (gpi_request, gpi_resonse) {
    try {
        const gpi_laut = new gpi_Lautfm();
        const gpi_res = await gpi_laut.searchStations({ query: 'ska' });
       
        let gpi_result = []; // gpi_ Массив для станций
        const gpi_arr = gpi_res.results; // gpi_ переходим  в ветку results

        // gpi_ проходимся по массиву станций
        for (let gpi_i = 0; gpi_i < gpi_arr.length; ++gpi_i) {
            // gpi_ в массиве станций есть другие станции
            // gpi_ добавим другие станции в наш массив
            gpi_result = gpi_result.concat(gpi_arr[gpi_i].items);
        }

        // gpi_ Теперь у нас есть один массив с разными станциями в gpi_result
        gpi_resonse.send(gpi_result);
    }
    catch(gpi_error) {
        gpi_resonse.send({
            "gpi_code": "500",
            "gpi_msg": "" + gpi_error,
        });
    }
})

gpi_router.get("/gpi_get_radio", async function (gpi_request, gpi_resonse) {
    try {
        const gpi_laut = new gpi_Lautfm();
        const gpi_res = await gpi_laut.searchStations({ query: 'ska' });
        gpi_resonse.send(gpi_res);
    }
    catch(gpi_error) {
        gpi_resonse.send({
            "gpi_code": "500",
            "gpi_msg": "" + gpi_error,
        });
    }
})

module.exports = gpi_router;
