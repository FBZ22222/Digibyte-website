// realiza el scroll de manera adecuada 
function scrollToSection(sectionId, offset) {
    const section = document.getElementById(sectionId);
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionPosition - offset,
      behavior: 'smooth'
    });
  }

//transicion quienes somos
  document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".qs__text");
    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;
        const textOffsetTop = textElement.offsetTop;
        const windowHeight = window.innerHeight;
        
        if (scrollPosition > textOffsetTop - windowHeight + 100) {
            textElement.style.opacity = "1";
            textElement.style.transform = "translateY(0)";
        }
    });
});


// seccion service
// Función para activar la animación al hacer scroll

function checkScroll() {

const boxes = document.querySelectorAll('.services__box');

boxes.forEach(box => {

  const boxTop = box.getBoundingClientRect().top;

  const windowHeight = window.innerHeight;



  if (boxTop < windowHeight - 100) {

      box.style.animation = 'fadeIn 2s ease-in-out forwards';

  }

});

}

// Listener para activar la función al hacer scroll

window.addEventListener('scroll', checkScroll);

// #################################

//cambio de color navbar
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar--set'); // Ajusta el selector según la clase de tu navbar
    var carouselSection = document.getElementById('carrusel'); // Reemplaza "carousel-section" con el ID de tu sección de carrusel
    var threshold = carouselSection.offsetHeight - 100; // Altura de la sección de carrusel

    if (window.pageYOffset > threshold) {
        navbar.classList.add('navbar--colored');
    } else {
        navbar.classList.remove('navbar--colored');
    }
});

//animacion quienes somos img
window.addEventListener('scroll', function () {
    var image = document.querySelector('.qs__fade-slide');
    var windowHeight = window.innerHeight;
    var imageTop = image.getBoundingClientRect().top;

    if (imageTop <= windowHeight / 2) {
        image.classList.add('qs__slide-in');
    }
});


// Función para activar la animación al hacer scroll
function checkScroll() {
  const boxes = document.querySelectorAll('.services__box');
  boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (boxTop < windowHeight - 100) {
          box.style.animation = 'fadeIn 2s ease-in-out forwards';
      }
  });
}

// Listener para activar la función al hacer scroll
window.addEventListener('scroll', checkScroll);










