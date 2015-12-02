var express = require('express');
var router = express.Router();
var shortener = require('../lib/shortener');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index' );
});

router.post('/', function( req, res, next) {
  var input_url = req.body.url;

  var short_id = shortener.create(input_url);

  var short_url = "http://localhost:3000/g/" + String(short_id);

  res.render('index', { url: input_url, short_url: short_url });
});

router.post('/c', function( req, res, next) { 

  var input_url = req.body.url;

  console.log( "ajax" );
  console.log( "url=" + input_url );

  var short_id = shortener.create(input_url);
  
  var short_url = "http://localhost:3000/g/" + String(short_id);
  console.log( "short_url=" + short_url );



  res.send( { version: "1.0", url: short_url } );
});

router.get( '/g/:id', function( req, res, next ) {

  var url = shortener.lookup( req.params.id );

  if( !url ) {
    res.status(404).send();

  } else {
    console.log( "url=", url );

    res.redirect( 301, url );
  }
});

module.exports = router;
