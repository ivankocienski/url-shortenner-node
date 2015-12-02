
var form_submitter = {

  submit: function() {

    var url = $( "form input[name='url']" ).val();

    console.log( "form submitted url=" + url );

    $.ajax({
      type: 'POST',
      url: '/c',
      data: { url: url },

      success: function( data ) {

        var url = data['url'];

        var link = $('p#shortenned a' );

        if( link.length > 0 ) {
          link.attr( 'href', url );
          link.html(url);

        } else {
          
          var html = "<p id='shortenned'>";
          html += "<a href='" + url + "'>" + url + "</a>";
          html += "</p>";

          $('#page').append( html );
        }

      }
    });

    return false;
  }
};

