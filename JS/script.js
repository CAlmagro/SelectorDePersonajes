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
let astralImg = document.getElementById("astral_maps");
let spaceImg = document.getElementById("space_maps");
let jariloImg = document.getElementById("jarilo_maps");
let penaconyImg = document.getElementById("penacony_maps");
let xianzhouImg = document.getElementById("xianzhou_maps");

// astralImg.onclick = function(){
//   chosen_charc.style.backgroundImg = "./media/imagenes/mundos splash art/World_Astral_Express_Splash_Art.png";
// }
