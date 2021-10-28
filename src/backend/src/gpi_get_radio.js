const Lautfm = require('lautfm');

module.exports = function (req, res) {
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
            res.send("err");
        })
};
