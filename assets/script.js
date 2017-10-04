$( document ).ready( function() {
    //$(".svg-container").css( "position", "fixed" );
    //$(".svg-container").css( "background", "#00006c" );
    //$("#hero").css( "color", "#f5f1f1" );

    $( window ).scroll( function(){
        //console.log(1 - $( window ).scrollTop() / 300);
        $( ".svg-container" ).css( "opacity", 1 - $( window ).scrollTop() / 300 );

        /*if () {
          $( ".svg-container" ).hide();
        }*/
    });

    $(window).resize( function(){
        $( "#lights" ).load(window.location.href + " #lights" );
        //location.reload();
    });
});