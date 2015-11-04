var express = require('express');
var data = require('../data.json');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', data[0]);
});

module.exports = router;
