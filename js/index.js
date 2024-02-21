//------------------------Menu------------------------
document.getElementById("icon-menu").addEventListener("click", mostrarMenu);

function mostrarMenu(){
    document.getElementById("show-menu").classList.toggle('show-lateral');
    document.getElementById("icon-menu").classList.toggle('icon-menu-select');
}


var enlacesMenu = document.querySelectorAll(".desplazar");

enlacesMenu.forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        var menu = document.getElementById("show-menu");
        var iconMenu = document.getElementById("icon-menu");

        menu.classList.remove('show-lateral');
        iconMenu.classList.remove('icon-menu-select');
    });
});
//---------------------------------------------------------

//-------------------scroll smooth-------------------
$(document).ready(function(){
    var ir_a = $(".desplazar");  //Declaramos variable ir_a y le decimos que su valor es la clase .desplazar

    ir_a.click(function(event){   //cuando se haga click a ir_a, se ejecutará la funcion con evento 
        event.preventDefault();    //previene configuraciones default

        $("body, html").animate({   //.animate es de jquery
            scrollTop: $(this.hash).offset().top,  // 
        },800);

    })

    

});
//---------------------------------------------------------

//-------------------Scroll up buttom-------------------

document.getElementById("button-up").addEventListener("click", scrollUp); //obtenemos elemento por id, añadimos evento de click. cuando se da click se ejecuta la funcion scrollUp

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;  //Obtiene el scroll del documento element

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);  //prepara la funcion como animacion
        window.scrollTo(0, currentScroll - (currentScroll/10));   //currentScroll - (currentScroll/10) define la velocidad de la animacion
    }
}

buttonUp = document.getElementById("button-up");

window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;   //guarda en scroll, la posicicon del scroll actual

    if (scroll > 600){
        buttonUp.style.transform = "scale(1)"
    }else{
        buttonUp.style.transform = "scale(0)"
    }
}
//---------------------------------------------------------


//














