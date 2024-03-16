//------------------------Menu------------------------
document.getElementById("_menu").addEventListener("click", mostrarMenu);

function mostrarMenu(){
    var blurEffect = document.getElementById("div-efecto-blur-all");
    // Obtener los estilos computados del elemento
    var estilosComputados = window.getComputedStyle(blurEffect);
    // Verificar si el filtro está aplicado
    var filtroAplicado = estilosComputados.getPropertyValue("filter");

    document.getElementById("show-menu").classList.toggle('show-lateral');
    document.getElementById("_menu").classList.toggle('_menu-select');

    if (filtroAplicado === 'blur(0px)') {
        blurEffect.style.filter = 'blur(3px) brightness(0.8)';
    } else {
        blurEffect.style.filter = 'blur(0px)';
    }
}


var enlacesMenu = document.querySelectorAll(".desplazar");

enlacesMenu.forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        var blurEffect = document.getElementById("div-efecto-blur-all");
        var menu = document.getElementById("show-menu");
        var iconMenu = document.getElementById("_menu");

        menu.classList.remove('show-lateral');
        iconMenu.classList.remove('_menu-select');
        blurEffect.style.filter = 'blur(0px)';
    
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

//----------------Slider cover-------------------------

let slider = document.querySelector(".cover-slider-container");
let sliderIndividual = document.querySelectorAll(".cover-slider-content")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 2500;
let reverse = false;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
});

setInterval(function(){
    slides();
}, intervalo);

function slides(){

    if (contador < 3 && !reverse){
        slider.style.transform = "translate(" + (-width * contador)+"px)";
        slider.style.transition = "transform 1.5s ease"
        contador++;
        
    }else{
        reverse = true
        
    }

    if (contador > 0 && reverse){
        contador--;
        slider.style.transform = "translate(" + (-width * contador)+"px)";
        slider.style.transition = "transform 1.5s ease"
    }else{
        reverse = false;
    }

}

//-----------------Fin Slider cover---------------------


//------------------------Movimientos pagina---------------------

document.addEventListener("DOMContentLoaded", function() { 
    var imgHortaliza = document.querySelectorAll('.img-hortaliza');
    var imgConsejos = document.querySelectorAll('.img-consejos');

    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;


    function checkVisibility(){
                         
        for (let i = 0; i < imgHortaliza.length; i++){
            var boundingimgHortaliza = imgHortaliza[i].getBoundingClientRect();

            if (boundingimgHortaliza.top >= 0 && boundingimgHortaliza.top <= windowHeight - 100){
                imgHortaliza[i].style.opacity = '1';
                imgHortaliza[i].style.transform = 'translateX(0)';
            }
    
        }

        for (let i = 0; i < imgConsejos.length; i++){
            var boundingimgConsejos = imgConsejos[i].getBoundingClientRect();

            if (boundingimgConsejos.top >= 0 && boundingimgConsejos.top <= windowHeight - 100){
                imgConsejos[i].style.opacity = '1';
                imgConsejos[i].style.transform = 'translateX(0)';
                imgConsejos[i].style.filter = 'brightness(1)'
            }
    
        }

    }
    
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', function() {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        checkVisibility();
     }); // Vuelve a verificar la visibilidad al cambiar el tamaño de la ventana
    checkVisibility();  

});

