document.addEventListener('DOMContentLoaded', () => { 
  const slider = document.getElementById('slider');
  let currentIndex = 0;

  window.nextSlide = function() {
    currentIndex = (currentIndex + 1) % slider.childElementCount;
    showSlide(currentIndex);
  }

  window.prevSlide = function() {
    currentIndex = (currentIndex - 1 + slider.childElementCount) % slider.childElementCount;
    showSlide(currentIndex);
  }

  function showSlide(index) {
    currentIndex = index;
    const percentage = -index * 100;
    slider.style.transform = `translateX(${percentage}%)`;
  }

  // Mostrar la primera imagen al cargar la página
  showSlide(currentIndex);
});
