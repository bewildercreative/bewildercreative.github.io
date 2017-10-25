window.onload = function(){ 
  $(".svg-container").css( "position", "fixed" );
  $( "nav" ).css( "display", "none" );

  $(window).resize( function(){
      $( "#lights" ).load(window.location.href + " #lights" );
      //location.reload();
  });
}

$( document ).ready( function() {
  //$("#hero").css( "background-color", "rgba( 0, 0, 118, 1 )" );
  //$("#hero").css( "background-color", "linear-gradient( rgba( 0, 0, 118, 1 ), rgba( 224, 211, 209, 1 ) )" );
  //$("#hero").css( "color", "#f5f1f1" );

  $( window ).scroll( function(){
      //console.log(1 - $( window ).scrollTop() / 300);
      $( ".svg-container" ).css( "opacity", 1 - $( window ).scrollTop() / 300 );

      //$( "#hero" ).css( "background-color", "rgba( 0, 0, 118, " + ( 1 - $( window ).scrollTop() / 300 ) + " )" );

      //console.log("rgba( 0, 0, 118, " + ( 1 - $( window ).scrollTop() / 300 ) + " )");

      if ( ( 1 - $( window ).scrollTop() / 200 ) <= 0 ) {
        $( ".svg-container" ).hide();
      } else {
        $( ".svg-container" ).show();
      }

      if ( $( window ).scrollTop() == 0 ) {
        $( "nav" ).fadeOut();
      } else {
        $( "nav" ).fadeIn();
      }
  });

    // Select all links with hashes
  $('a[href*="#"]').click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000 ); 
      }
    }
  });
});