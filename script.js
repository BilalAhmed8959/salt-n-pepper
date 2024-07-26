
 document.addEventListener('DOMContentLoaded', () => {
     const slides = document.querySelector('.slides');
     const slideCount = document.querySelectorAll('.slide').length;
     const indicators = document.querySelectorAll('.indicator');
     let currentIndex = 0;

     function updateSlider() {
         slides.style.transform = `translateX(-${currentIndex * 100}%)`;
         indicators.forEach((indicator, index) => {
             indicator.classList.toggle('active', index === currentIndex);
         });
     }

     document.querySelector('.next').addEventListener('click', () => {
         currentIndex = (currentIndex + 1) % slideCount;
         updateSlider();
     });

     document.querySelector('.prev').addEventListener('click', () => {
         currentIndex = (currentIndex - 1 + slideCount) % slideCount;
         updateSlider();
     });
 
     indicators.forEach(indicator => {
         indicator.addEventListener('click', () => {
             currentIndex = parseInt(indicator.dataset.index);
             updateSlider();
         });
     });

    updateSlider();
});
