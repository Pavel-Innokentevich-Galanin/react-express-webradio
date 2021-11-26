const express = require('express');
const router = express.Router();
const Lautfm = require('lautfm');

router.get("/get-json-stream", function (req, res) {
    const laut = new Lautfm();
    laut.searchStations({ query: 'ska' })
        .then(response => {
            let result = [];
            let arr = response.results;
            for (let i = 0; i < arr.length; ++i) {
                result = result.concat(arr[i].items);
            }
            res.send(result);
        })
        .catch(function (err) {
            console.error(err);
            res.send(500);
        })
})

module.exports = router;
