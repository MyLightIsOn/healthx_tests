var express = require('express');
var data = require('../data.json');
var router = express.Router();

/* GET menu page. */
router.get('/', function(req, res, next) {
    res.render('menu1', data[0]);
});

module.exports = router;

