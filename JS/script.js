$(document).ready(function() {

    let mainImg = document.querySelector(".main_img");

    let agleaImg = document.querySelector(".aglea_chrc");
    $(agleaImg).on({
        'click': function() {
          let src = ($(mainImg).attr('src') == 'media/imagenes/personajes splash art/Character_Aglaea_Splash_Art.webp') 
            // 'https://www.w3docs.com/uploads/media/book_gallery/0001/02/c4ba86c634f0f9c7ea055964c7f7436bab2bb698.png' :
            // 'https://ru.w3docs.com/uploads/media/book_gallery/0001/02/c8d75681dcd87da6f7d8ebfa0cdb40cbb403bed8.png';

          $(mainImg).attr('src', src);
        }
      });
  });