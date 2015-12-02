
var url_db = null;

function make_db() {
  if( url_db ) return; 

  url_db = Array(); 
}

exports.count = function() {
  make_db();
  return url_db.length;
};

exports.clear = function() {
  url_db = Array();
};

exports.create = function( url ) { 
  make_db(); 

  for( var i = 0; i < exports.count(); i++ ) {
    if( url == url_db[i] ) {
      return i + 1;
    }
  }

  url_db.push( url );
  return exports.count();
};

exports.lookup = function( id ) {
  return url_db[id - 1];
};

