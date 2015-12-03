
var assert = require( 'assert' );

var shortener = require( '../lib/shortener.js' );

describe( 'shortener', function() {

  describe( '#count', function() {

    it( 'should be zero by default', function() {
      shortener.clear();
      assert.equal( shortener.count(), 0 );
    });

    it( 'should count urls made', function() {

      shortener.clear();

      shortener.create( 'http://example.com/1' );
      shortener.create( 'http://example.com/2' );
      shortener.create( 'http://example.com/3' );

      assert.equal( shortener.count(), 3 );
    });
    
  });

  describe( '#clear', function() {

    it( 'should clear table for use', function() {
      shortener.clear();

      shortener.create( 'http://example.com/1' );
      shortener.clear();

      assert.equal( shortener.count(), 0 );
    });
  });

  describe( '#create', function() {

    it( 'adds url to database', function() {

      shortener.clear();
      shortener.create( 'httt://example.com' );

      assert.equal( shortener.count(), 1 );
    });

    it( 'returns ID to url', function() {
      shortener.clear();
      var id = shortener.create( 'http://example.com' );
      assert.equal( id, 1 );
    });

    it( 'does not create duplicate entries', function() {

      shortener.clear();
      var id1 = shortener.create( 'http://example.com' );
      var id2 = shortener.create( 'http://example.com' );

      assert.equal( id1, id2 );
      assert.equal( shortener.count(), 1 );
    });
  });

  describe( '#lookup', function() {

    it( 'should return null if not found', function() {
      shortener.clear();

      var id = shortener.lookup( 'http://example.com' );

      assert.equal( id, null );
    });

    it( 'should return url when found', function() {
      shortener.clear();

      var id = shortener.create( 'http://example.com' );
      var url = shortener.lookup( id );

      assert.equal( url, 'http://example.com' );
    });

  });

});

