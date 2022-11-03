var express = require('express');
var router = express.Router();
const token = process.env.GITHUB_TOKEN;
const ROOT_URL = 'https://meowfacts.herokuapp.com';

/* GET home page. */
router.get('/', function(req, res, next) {
const options = {
  headers: {
    Authorization: `token ${token}`
  }
};

fetch(`${ROOT_URL}`, options)
.then(res => res.json())
.then(fact => {
  res.render('index', { fact });
  });
});

module.exports = router;
