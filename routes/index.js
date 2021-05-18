var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');
/* GET home page. */

var url = 'mongodb://localhost:3000/qadb';
router.get('/', function(req, res, next) {
  res.render('index');
});



module.exports = router;
