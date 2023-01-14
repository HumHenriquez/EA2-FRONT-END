//console.log("Pagina funcionando");
//document.getElementById('Titulo').innerHTML = "TITULO DE PAGINA";


$(document).ready(function(){
    console.log("Pagina funcionando")
    
    //Selecionar elementos HTML
    //     ETIQUETA  ACCION
    //        ID
    /// $('Titulo').html("Texto modificiado por su etiqueta");
    $('h1').html("Texto modificiado por su etiqueta");
    $('#Titulo').html("Texto modificiado por su id 22");
    $('.display-3').html("SOY EL GATO ARABE")


    // Agregar una clase

    $('h1').addClass('text-center text-uppercase');
    $('#p2').addClass('text-center');

    // Quitar clase

    $('#Parrafos').removeClass('display-5');

    // Agregar ELEMENTO

    $('#Parrafos').append('<p>Cuarto Parrafo desde jquery<p>');

    // Quitar ELEMENTO
    //$('#p3').remove();

    $('#p1').css('color', 'blue');
    $('#Titulo').css('color', 'green');
    $('#p2').css('color','green')
    $('#p3').css({color:'blue', background:'green', padding :'20px'})

    
    
    // METODO ATTR() 
    $('#Parrafos').append('<img src="" alt="">');
    $('img').attr( 'src' , 'https://pbs.twimg.com/profile_images/1417260332469395456/yeUcoepz_400x400.jpg' );
    $('img').attr({width: '300px' , height: '300px'})
 
    


    //EVENTOS CON JQUERY
    //Evento click
    //eveto click agregando estilo en css
    //alternativa al evento click





})