const slider = document.getElementById('slider');
let currentIndex = 0;

function showSlide(index) {
  currentIndex = index;
  const percentage = -index * 100;
  slider.style.transform = `translateX(${percentage}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slider.childElementCount;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slider.childElementCount) % slider.childElementCount;
  showSlide(currentIndex);
}

// Mostrar la primera imagen al cargar la página
showSlide(currentIndex);
