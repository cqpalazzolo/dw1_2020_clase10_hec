var estado_menu = "afuera";


$( document ).ready(function() {
     
$( "#btn_menu" ).on( "click", function(e) {
    e.preventDefault();
    var pos;
    if(estado_menu == "afuera"){
        pos = "0px";
        estado_menu = "adentro";
    }else{
        pos = "-200px";
        estado_menu = "afuera";
    }


    $( "#menu" ).animate({
         right: pos
      }, 300, function() {
        // Animation complete.
    });


});







});