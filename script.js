$( document ).ready(function() {
    
    var sobre = $('#envelope');
    var btn_abrir = $("#open");
    var btn_cerrar = $("#reset");
    
    var btn_1 = document.getElementById('open');
    var btn_2 = document.getElementById('reset');
    var nombre = document.getElementById('nombre');

    sobre.click( function() {
        abrir();
    });

    btn_abrir.click( function() {
        abrir();
    });

    btn_cerrar.click( function() {
        cerrar();
    });

    function abrir() {
        sobre.addClass("open")
           .removeClass("close");
           //$("#open").fadeOut();
           //$("#reset").fadeIn();   
           btn_1.style.display = 'none';
           btn_2.style.display = 'inline';    
           nombre.style.display = 'inline';      
    }
    
    function cerrar() {
        sobre.addClass("close")
           .removeClass("open");
           //$("#reset").fadeOut();
           //$("#open").fadeIn();      
           btn_2.style.display = 'none';
           nombre.style.display = 'none';
           btn_1.style.display = 'inline';     
    }   
});