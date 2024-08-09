$(document).ready(function(){

    //efecto para que aparezcan de 1 en 1 los elementos
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });
        $(this).animate({
            top: '0'
        }, 1500+ (index * 500));

    });

    //Efecto Header
    if($(window).width() > 800 ){
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });
        $('header .textos').animate({
            opacity: 1,
            marginTop: -52
        }, 2000);
    }
    
    //scroll elementos menu

    let acercaDe = $('#acerca-de').offset().top, //metodo que mide el margen top
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 580
        }, 500);
    });

    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        }, 500);
    });

    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria - 200
        }, 500);
    });

    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion 
        }, 500);
    });
});