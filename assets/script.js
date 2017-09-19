$( document ).ready( function() {
    $(".svg-container").css( "position", "fixed" );

    $( window ).scroll( function(){
        $( ".svg-container" ).css( "opacity", 1 - $( window ).scrollTop() / 800 );
    });

    $(window).resize( function(){
        $( "#lights" ).load(window.location.href + " #lights" );
        //location.reload();
    });
});