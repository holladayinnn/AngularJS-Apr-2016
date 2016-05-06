'use strict';

var yelp = require('yelp').createClient({
  'consumer_key': '8coLgePe0vibeL2xEiKfSQ', 
  'consumer_secret': 'd8tsefjRHxoB4eQ4qawOVX_gYyI',
  'token': 'xW8h7FPCuj_xOvpz25C5LrmbQEtlo8ZZ',
  'token_secret': 'CzumUcwIUdGaVUKZ-IoKoC7Bf4U'
});


exports.search = function(req, res) {


  console.log(req.query);

  // Sample Request
  // http://localhost:8080/api/yelp/search?term=food&location=11221

  yelp.search({term: req.query.term, location: req.query.location}, function(error, data) {
    res.send(data);
  });
};