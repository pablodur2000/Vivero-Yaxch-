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
})