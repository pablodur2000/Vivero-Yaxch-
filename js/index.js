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

//-------------------Preguntas frecuentes--------------------//

let barsPreguntas = document.querySelectorAll('.container-preguntas-bar-flex');
let contentPreguntas = document.querySelectorAll('.container-bar');
  
    for (let i = 0; i < barsPreguntas.length; i++){
        
        barsPreguntas[i].addEventListener("click", function() {
 
            const isActive = contentPreguntas[i].classList.contains('active-bar');
    
            // Oculta todos los contenedores de barra antes de mostrar el actual
            const allContainerBars = document.querySelectorAll('.container-bar');
            allContainerBars.forEach(container => {         
                container.classList.remove('active-bar');
            });
    
            // Si el contenedor actual no está activo, muéstralo; de lo contrario, ocúltalo
            
            if (!isActive) {
                allContainerBars[i].classList.toggle('active-bar');
            }
        });
    }

/*
const elements = document.getElementsByClassName('container-preguntas-bar');

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', () => {
        const containerBar = elements[i].querySelector('.container-bar');
        const isActive = containerBar.classList.contains('active-bar');

        // Oculta todos los contenedores de barra antes de mostrar el actual
        const allContainerBars = document.querySelectorAll('.container-bar');
        allContainerBars.forEach(container => {
           
            container.classList.remove('active-bar');
            
        });

        // Si el contenedor actual no está activo, muéstralo; de lo contrario, ocúltalo
        
        if (!isActive) {
            containerBar.classList.toggle('active-bar');
            
        }
    });
}
*/

//------------Fin preguntas freceuntes-----------------------//



//-------------------------Movimientos de pagina-------------------------

document.addEventListener("DOMContentLoaded", function() { 
    var titleInicio = document.getElementById("article-inicio-title");
    var textInicio = document.getElementById("article-inicio-text");
    var img1 = document.querySelectorAll('.imagen-1-inicio');
    var img2 = document.querySelectorAll('.imagen-2-inicio');
    var img3 = document.querySelectorAll('.imagen-3-inicio');
    var titleUbicacion = document.getElementById("titulo-ubi");
    var textUbication = document.getElementById("ubicacion-text-id");
    var mapUbication = document.getElementById("container-ubicacion-map");
    var titleContacto = document.getElementById("titulo-contacto-h1");
    var videoContacto = document.querySelectorAll('.video-contacto');
    var textContacto = document.querySelectorAll('.contacto-contenido-p');
    var redesContacto = document.querySelectorAll('.img-contacto');
    var titleTesti = document.getElementById("titulo-testimonios-h1");
    var testi1 = document.getElementById("container-testimonio-1");
    var testi2 = document.getElementById("container-testimonio-2");
    var preguntasFrecBar = document.querySelectorAll('.container-preguntas-bar');

    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;

    titleInicio.style.opacity = '1';

    function checkVisibility(){
                                            //inicio
        var boundingtextInicio = textInicio.getBoundingClientRect();

        if (boundingtextInicio.top >= 0 && boundingtextInicio.top <= windowHeight - 100){
            textInicio.style.opacity = '1';
            textInicio.style.transform = 'translateY(0)';
        }

        var boundingimg1 = img1[0].getBoundingClientRect();

        if (boundingimg1.top >= 0 && boundingimg1.top <= windowHeight -200){
            img1[0].style.opacity = '1';
            img1[0].style.transform = 'translateX(0)';
            img1[0].style.filter = 'brightness(1)'
        }

        var boundingimg2 = img2[0].getBoundingClientRect();

        if (boundingimg2.top >= 0 && boundingimg2.top <= windowHeight -200){
            img2[0].style.opacity = '1';
            img2[0].style.filter = 'brightness(1)'
        }

        var boundingimg3 = img3[0].getBoundingClientRect();

        if (boundingimg3.top >= 0 && boundingimg3.top <= windowHeight -200){
            img3[0].style.opacity = '1';
            img3[0].style.transform = 'translateX(0)';
            img3[0].style.filter = 'brightness(1)'
        }

                                            //Ubicacion
        var boundingtitleUbicacion = titleUbicacion.getBoundingClientRect();

        if (boundingtitleUbicacion.top >= 0 && boundingtitleUbicacion.top <= windowHeight - 200){
            titleUbicacion.style.opacity = '1';
        }

        var boundingtextUbication = textUbication.getBoundingClientRect();

        if (boundingtextUbication.top >= 0 && boundingtextUbication.top <= windowHeight - 200){
            textUbication.style.opacity = '1';
            textUbication.style.transform = 'translateY(0)';
        }

        var boundingmapUbication = mapUbication.getBoundingClientRect();

        if (boundingmapUbication.top >= 0 && boundingmapUbication.top <= windowHeight - 200){
            mapUbication.style.opacity = '1';
        }

                                            //Contacto
        var boundingtitleContacto = titleContacto.getBoundingClientRect();

        if (boundingtitleContacto.top >= 0 && boundingtitleContacto.top <= windowHeight - 200){
            titleContacto.style.opacity = '1';
        }

        var boundingvideoContacto = videoContacto[0].getBoundingClientRect();

        if (boundingvideoContacto.top >= 0 && boundingvideoContacto.top <= windowHeight - 200){
            videoContacto[0].style.opacity = '1';
            videoContacto[0].style.transform = 'translateX(0)';
        }

        var boundingtextContacto = textContacto[0].getBoundingClientRect();

        if (boundingtextContacto.top >= 0 && boundingtextContacto.top <= windowHeight - 200){
            textContacto[0].style.opacity = '1';
            textContacto[0].style.transform = 'translateX(0)';
        }

        setTimeout(function (){  
            var boundingredesContacto = redesContacto[0].getBoundingClientRect();

            if (boundingredesContacto.top >= 0 && boundingredesContacto.top <= windowHeight - 200){
                redesContacto[0].style.opacity = '1';
                redesContacto[0].style.transform = 'translateX(0)';
            }
        }, 1000);


                                        //Preguntas freceuntes
        
        for (var i = 0; i < preguntasFrecBar.length; i++){
            
            var boundingpreguntasFrecBar = preguntasFrecBar[i].getBoundingClientRect();
            if (boundingpreguntasFrecBar.top >= 0 && boundingpreguntasFrecBar.top <= windowHeight - 100){
                console.log("hola");
                preguntasFrecBar[i].style.transform = 'translateY(0)';
                preguntasFrecBar[i].style.opacity = '1';
            }  
        }
          


                                        //Testimonios
        var boundingtitleTesti = titleTesti.getBoundingClientRect();

        if (boundingtitleTesti.top >= 0 && boundingtitleTesti.top <= windowHeight - 200){
            titleTesti.style.opacity = '1';
        }

        var boundingtesti1 = testi1.getBoundingClientRect();

        if (boundingtesti1.top >= 0 && boundingtesti1.top <= windowHeight - 200){
            testi1.style.opacity = '1';
            testi1.style.transform = 'translateX(0)'
        }

        var boundingtesti2 = testi2.getBoundingClientRect();

        if (boundingtesti2.top >= 0 && boundingtesti2.top <= windowHeight - 200){
            testi2.style.opacity = '1';
            testi2.style.transform = 'translateX(0)';
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



//----------------------Fin movimientos de pagina-----------------------















