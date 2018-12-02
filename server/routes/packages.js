var express = require('express');
var router = express.Router();
var packages = require('../public/json/packages.json');

/* GET game packages listing. */
router.get('/', function(req, res, next) {
  res.json(packages);
});

module.exports = router;
