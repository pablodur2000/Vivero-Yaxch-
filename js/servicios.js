document.querySelectorAll('.bar').forEach(container_visible => {
    container_visible.addEventListener('click', () =>{
        const content = container_visible.querySelector('.container-bar');
        
        const arrowInactive = container_visible.querySelector('.inactive');
        const arrowActive = container_visible.querySelector('.active');

        content.classList.toggle('container-visible');

        if (content.classList.contains('container-visible')) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            // Si el contenido está oculto, establece la altura máxima a 0 para colapsarlo
            content.style.maxHeight = 0;
        }

        arrowInactive.classList.toggle('inactive-click');

        arrowActive.classList.toggle('active-click');
    })
});

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

//-------------------------Movimientos de pagina-------------------------

document.addEventListener("DOMContentLoaded", function() { 
    var barFlex = document.querySelectorAll('.bar');
    

    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;


    function checkVisibility(){
                         
        for (let i = 0; i < barFlex.length; i++){
            var boundingbarFlex = barFlex[i].getBoundingClientRect();

            if (boundingbarFlex.top >= 0 && boundingbarFlex.top <= windowHeight){
                barFlex[i].style.opacity = '1';
                barFlex[i].style.transform = 'translateY(0)';
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


