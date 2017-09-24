var express = require('express');
var router = express.Router();
var connectdb = require('../module/connectmongodb')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/* GET test connect console. */
router.get('/connect', function (req, res, next) {
    res.header(200);
    connectdb.connectDB();
    res.write("Connect succes!");
    res.end();
});

module.exports = router;
