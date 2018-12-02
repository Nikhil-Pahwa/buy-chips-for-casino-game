var express = require('express');
var router = express.Router();
var paymentMethods = require('../public/json/payment-methods.json');

router.get('/', function(req, res, next) {
  res.json(paymentMethods);
});

module.exports = router;
