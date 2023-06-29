var slideIndex = 0;

showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  var slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";

  // Reinicia o temporizador a cada vez que o slide é trocado
  clearInterval(timer);
  timer = setInterval(function() {
    changeSlide(1);
  }, 5000); // 5 segundos (5000 milissegundos)
}

// Inicia o temporizador inicial
var timer = setInterval(function() {
  changeSlide(1);
}, 5000); // 5 segundos (5000 milissegundos)