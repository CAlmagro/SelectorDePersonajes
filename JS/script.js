// $(document).ready(function() {

//     let mainImg = document.querySelector(".main_img");

//     let agleaImg = document.querySelector(".aglea_chrc");
//     $(agleaImg).on({
//         'click': function() {
//           let src = ($(mainImg).attr('src') == 'media/imagenes/personajes splash art/Character_Aglaea_Splash_Art.webp') 
//             // 'https://www.w3docs.com/uploads/media/book_gallery/0001/02/c4ba86c634f0f9c7ea055964c7f7436bab2bb698.png' :
//             // 'https://ru.w3docs.com/uploads/media/book_gallery/0001/02/c8d75681dcd87da6f7d8ebfa0cdb40cbb403bed8.png';

//           $(mainImg).attr('src', src);
//         }
//       });
//   });

// Selector de Personajes   
let aglaeaImg = document.getElementById("aglea_chrc");
let gepardImg = document.getElementById("gepard_chrc");
let himekoImg = document.getElementById("himeko_chrc");
let jingYuanImg = document.getElementById("jingYuan_chrc");
let robinImg = document.getElementById("robin_chrc");
let theHertaImg = document.getElementById("theHerta_chrc");

aglaeaImg.onclick = function(){
    main_img.src = "./media/imagenes/personajes splash art/Character_Aglaea_Splash_Art.webp";
}

gepardImg.onclick = function(){
  main_img.src = "./media/imagenes/personajes splash art/Character_Gepard_Splash_Art.webp";
}

himekoImg.onclick = function(){
  main_img.src = "./media/imagenes/personajes splash art/Character_Himeko_Splash_Art.webp";
}

jingYuanImg.onclick = function(){
  main_img.src = "./media/imagenes/personajes splash art/Character_Jing_Yuan_Splash_Art.webp";
}

robinImg.onclick = function(){
  main_img.src = "./media/imagenes/personajes splash art/Character_Robin_Splash_Art.webp";
}

theHertaImg.onclick = function(){
  main_img.src = "./media/imagenes/personajes splash art/Character_The_Herta_Splash_Art.webp";
}

// Selector de Mapas  

let currentIndex = 0;
const mapsContainer = document.querySelector('#slideshow_maps');
const maps = document.querySelectorAll('#slideshow_maps .map');
const totalMaps = maps.length;

// Función para actualizar el índice y desplazar el carrusel
function moveToIndex(index) {
    const width = maps[0].offsetWidth + 20; // Ancho de la imagen + el espacio entre ellas
    mapsContainer.scrollTo({
        left: index * width, 
        behavior: 'smooth' // Desplazamiento suave
    });
}

// Función para mostrar la imagen actual
function updateCarrusel() {
    moveToIndex(currentIndex);
}

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

// Función para cambiar a la imagen anterior
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalMaps - 1 : currentIndex - 1;
    updateCarrusel();
});

// Función para cambiar a la imagen siguiente
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === totalMaps - 1) ? 0 : currentIndex + 1;
    updateCarrusel();
});

// Inicializar carrusel
updateCarrusel();



// let astralImg = document.getElementById("astral_maps");
// let spaceImg = document.getElementById("space_maps");
// let jariloImg = document.getElementById("jarilo_maps");
// let penaconyImg = document.getElementById("penacony_maps");
// let xianzhouImg = document.getElementById("xianzhou_maps");

// astralImg.onclick = function(){
//   // body.style.backgroundImage = "./media/imagenes/mundos splash art/World_Astral_Express_Splash_Art.png";

  
// }

// $(document).ready(function() {
//   $('.chosen_map').css("background-image", 'url("./media/imagenes/mundos splash art/World_Astral_Express_Splash_Art.png")');
//   console.log("hdvbsdrbg");
// });


