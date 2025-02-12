# SelectorDePersonajes
 Ejercicio obligatorio


Empiezo el css!
Estoy con el menú
Hay que cambiar los colores
va poco a poco


CSS DEMO------------------------------------------------------
Se ha creado otro archivo para facilitar el trabajo a la vez, habrá que juntarlo y hacer limpieza de código al final.

No consigo que la parte de los mapas haga lo mismo que la de los presonajes así que he decorado primero la de los personajes para poder avanzar y no quedarme atascada.

PROBLEMA: la zona de los mapas no hace el wrap igual que los personajes incluso cuando se le ponen las mismas características


JS DEMO ------------------------------------------------------
PROBLEMA: da eeror de que no encuentra el archivo de imagen que debe usar, hay que mirar si la función está mal o es la forma de bscar el archivo.

// Botón de navegación anterior
const prevButton = document.createElement('button');
prevButton.classList.add('prev');
prevButton.innerText = '<';
document.getElementById('slideshow_maps').appendChild(prevButton);

// Botón de navegación siguiente
const nextButton = document.createElement('button');
nextButton.classList.add('next');
nextButton.innerText = '>';
document.getElementById('slideshow_maps').appendChild(nextButton);

Este código es el que daba problema.

Para la barra

/* Ajustamos el área visible del contenedor del carrusel */
#slideshow_maps {
    overflow-x: scroll; /* Permite desplazamiento horizontal */
    scroll-snap-type: x mandatory; /* Hace que el scroll se detenga en cada imagen */
    scrollbar-width: thin; /* Barra más fina */
    scrollbar-color: var(--color8) var(--color3); /* Colores de la barra */
    width: auto; /* No cambiar el tamaño del contenedor */
    max-width: 600px; /* Limitar la longitud de la barra de desplazamiento */
}

/* Personaliza la barra de desplazamiento en webkit (Chrome, Safari, Edge) */
#slideshow_maps::-webkit-scrollbar {
    height: 8px; /* Hacer la barra horizontal más fina */
}

/* Personaliza la pista de la barra de desplazamiento */
#slideshow_maps::-webkit-scrollbar-track {
    background-color: var(--color3);
    border-radius: 10px;
}

/* Personaliza el "dedo" de la barra de desplazamiento */
#slideshow_maps::-webkit-scrollbar-thumb {
    background-color: var(--color8);
    border-radius: 10px;
    min-width: 40px; /* Hacer el "dedo" más pequeño */
}

/* Efecto hover sobre el "dedo" */
#slideshow_maps::-webkit-scrollbar-thumb:hover {
    background-color: var(--color2);
}