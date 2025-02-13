

//on hover

let buttons = document.querySelectorAll("#slideshow_characters div img");

$(buttons).on('mouseover', function(){
    $(this).css({"transform": "scale(1.4)", "box-shadow": "0px 0px 10px var(--color1)", "background-color": "var(--color9)", "border-color": "var(--color7)"});
});

$(buttons).on('mouseleave', function(){
  $(this).css({"transform": "scale(1)", "box-shadow": "none", "background-color": "var(--color7)", "border-color": "var(--color4)"});
});

let astralImg = document.getElementById("astral_maps");

$(document).ready(function(){
  console.log(astralImg);
  
});

// Selector de Personajes   
let aglaeaImg = document.getElementById("aglea_chrc");
let gepardImg = document.getElementById("gepard_chrc");
let himekoImg = document.getElementById("himeko_chrc");
let jingYuanImg = document.getElementById("jingYuan_chrc");
let robinImg = document.getElementById("robin_chrc");
let theHertaImg = document.getElementById("theHerta_chrc");
let DanhengILImg = document.getElementById("DanhengIL_chrc");
let SundayImg = document.getElementById("Sunday_chrc");
let MydeiImg = document.getElementById("Mydei_chrc");
let KafkaImg = document.getElementById("Kafka_chrc");
let ArgentiImg = document.getElementById("Argenti_chrc");
let AcheronImg = document.getElementById("Acheron_chrc");
let AventurineImg = document.getElementById("Aventurine_chrc");
let DrRatioImg = document.getElementById("DrRatio_chrc");
let FireflyImg = document.getElementById("Firefly_chrc");

var hpNum = document.getElementById('hp_num');
var atkNum = document.getElementById('atk_num');

var hpBarra = document.getElementById('hp-barra');
var atkBarra = document.getElementById('atk-barra');

hpBarra.style.width = 60 + "%";
atkBarra.style.width = 90 + "%";

aglaeaImg.onclick = function(){
    main_img.src = "./media/imagenes/personajes splash art/Character_Aglaea_Splash_Art.webp";
    hpNum.innerText = '1242';
    hpBarra.style.width = 60 + "%";
    atkNum.innerText = '699';
    atkBarra.style.width = 90 + "%";
    
}

gepardImg.onclick = function(){
  main_img.src = "./media/imagenes/personajes splash art/Character_Gepard_Splash_Art.webp";
  hpNum.innerText = '1397';
  hpBarra.style.width = 90 + "%";
  atkNum.innerText = '543';
  atkBarra.style.width = 30 + "%";
}

himekoImg.onclick = function(){
  main_img.src = "./media/imagenes/personajes splash art/Character_Himeko_Splash_Art.webp";
  hpNum.innerText = '1048';
  hpBarra.style.width = 30 + "%";
  atkNum.innerText = '757';
  atkBarra.style.width = 95 + "%";
}

jingYuanImg.onclick = function(){
  main_img.src = "./media/imagenes/personajes splash art/Character_Jing_Yuan_Splash_Art.webp";
  hpNum.innerText = '1164';
  hpBarra.style.width = 40 + "%";
  atkNum.innerText = '699';
  atkBarra.style.width = 85 + "%";
}

robinImg.onclick = function(){
  main_img.src = "./media/imagenes/personajes splash art/Character_Robin_Splash_Art.webp";
  hpNum.innerText = '1281';
  hpBarra.style.width = 50 + "%";
  atkNum.innerText = '640';
  atkBarra.style.width = 50 + "%";
}

theHertaImg.onclick = function(){
  main_img.src = "./media/imagenes/personajes splash art/Character_The_Herta_Splash_Art.webp";
  hpNum.innerText = '1164';
  hpBarra.style.width = 40 + "%";
  atkNum.innerText = '679';
  atkBarra.style.width = 80 + "%";
}

DanhengILImg.onclick = function(){
  main_img.src = "./media/imagenes/personajes splash art/Character_DanhengIL_Splash_Art.webp";
  hpNum.innerText = '1242';
  hpBarra.style.width = 55 + "%";
  atkNum.innerText = '699';
  atkBarra.style.width = 85 + "%";
}

SundayImg.onclick = function(){
  main_img.src = "./media/imagenes/personajes splash art/Character_Sunday_Splash_Art.webp";
  hpNum.innerText = '1242';
  hpBarra.style.width = 55 + "%";
  atkNum.innerText = '640';
  atkBarra.style.width = 50 + "%";
}

MydeiImg.onclick = function(){
  main_img.src = "./media/imagenes/personajes splash art/Character_Mydei_Splash_Art.webp";
  hpNum.innerText = '1552';
  hpBarra.style.width = 100 + "%";
  atkNum.innerText = '427';
  atkBarra.style.width = 20 + "%";
}

KafkaImg.onclick = function(){
  main_img.src = "./media/imagenes/personajes splash art/Character_Kafka_Splash_Art.webp";
  hpNum.innerText = '1087';
  hpBarra.style.width = 20 + "%";
  atkNum.innerText = '679';
  atkBarra.style.width = 80 + "%";
}

ArgentiImg.onclick = function(){
  main_img.src = "./media/imagenes/personajes splash art/Character_Argenti_Splash_Art.webp";
  hpNum.innerText = '1048';
  hpBarra.style.width = 25 + "%";
  atkNum.innerText = '737';
  atkBarra.style.width = 95 + "%";
}

AcheronImg.onclick = function(){
  main_img.src = "./media/imagenes/personajes splash art/Character_Acheron_Splash_Art.webp";
  hpNum.innerText = '1125';
  hpBarra.style.width = 40 + "%";
  atkNum.innerText = '699';
  atkBarra.style.width = 85 + "%";
}

AventurineImg.onclick = function(){
  main_img.src = "./media/imagenes/personajes splash art/Character_Aventurine_Splash_Art.webp";
  hpNum.innerText = '1203';
  hpBarra.style.width = 50 + "%";
  atkNum.innerText = '446';
  atkBarra.style.width = 25 + "%";
}

DrRatioImg.onclick = function(){
  main_img.src = "./media/imagenes/personajes splash art/Character_Dr.Ratio_Splash_Art.webp";
  hpNum.innerText = '1048';
  hpBarra.style.width = 25 + "%";
  atkNum.innerText = '776';
  atkBarra.style.width = 100 + "%";
}

FireflyImg.onclick = function(){
  main_img.src = "./media/imagenes/personajes splash art/Character_Firefly_Splash_Art.webp";
  hpNum.innerText = '815';
  hpBarra.style.width = 10 + "%";
  atkNum.innerText = '524';
  atkBarra.style.width = 30 + "%";
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


//Mapa selecionado

let spaceImg = document.getElementById("space_maps");
let jariloImg = document.getElementById("jarilo_maps");
let penaconyImg = document.getElementById("penacony_maps");
let xianzhouImg = document.getElementById("xianzhou_maps");

$("#astral_maps").on("click", function(){
  main_map.scr = "./media/imagenes/mundos splash art/World_Astral_Express_Splash_Art.png";
  console.log("hola");
  
});







