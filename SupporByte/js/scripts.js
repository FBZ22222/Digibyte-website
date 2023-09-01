
// #########
// carrusel
$(document).ready(function() {
    // esto es para probar que existe el evento
    // Agregar un oyente para el evento slid.bs.carousel
    // $('.carousel').on('slid.bs.carousel', function(event) {
    //   const activeSlideIndex = event.to;
    //   console.log('El evento slid.bs.carousel se disparó.');
    //   console.log('Índice de la diapositiva activa:', activeSlideIndex);
    // });
    // esto es para probar que existe el evento

    // cambio de imagen
    $('.carousel').on('slid.bs.carousel', function (event) {
        const activeSlideIndex = event.to;
        const suptecImg = document.querySelector('.suptec__img');
    
        // Cambiar la imagen en función del índice de diapositiva
        if (activeSlideIndex === 0) {
          suptecImg.style.opacity = '0';
          setTimeout(function() {
            suptecImg.src = '/img/icono-mision.png';
            suptecImg.style.opacity = '1';
          }, 250); // Espera menos de medio segundo antes de cambiar la imagen y mostrarla
        } else if (activeSlideIndex === 1) {
          suptecImg.style.opacity = '0';
          setTimeout(function() {
            suptecImg.src = '/img/icono-vision.png';
            suptecImg.style.opacity = '1';
          }, 250);
        } else if (activeSlideIndex === 2) {
          suptecImg.style.opacity = '0';
          setTimeout(function() {
            suptecImg.src = '/img/icono-mision.png';
            suptecImg.style.opacity = '1';
          }, 250);
        }
      });

    // prueba
    // prueba

  });

  

// ##########