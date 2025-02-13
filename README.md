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