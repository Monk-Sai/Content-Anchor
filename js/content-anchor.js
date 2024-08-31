function showNavHeader(){
  const sidebar = document.querySelector('.nav-ul-mobile')
  sidebar.style.display = 'flex'
}
function hideNavHeader(){
  const sidebar = document.querySelector('.nav-ul-mobile')
  sidebar.style.display = 'none'
}

function expand(){
  const dropdown = document.querySelector('.fold-4-hide-seek-con p')
  dropdown.style.display = 'flex'

  const alterdrop0 = document.querySelector('.fold-4-hide-seek-con1 p')
  alterdrop0.style.display = 'none'

  const alterdrop1 = document.querySelector('.fold-4-hide-seek-con2 p')
  alterdrop1.style.display = 'none'

  const alterdrop2 = document.querySelector('.fold-4-hide-seek-con3 p')
  alterdrop2.style.display = 'none'

  const alterdrop3 = document.querySelector('.fold-4-hide-seek-con4 p')
  alterdrop3.style.display = 'none'
}
function expand1(){
  const dropdown = document.querySelector('.fold-4-hide-seek-con1 p')
  dropdown.style.display = 'flex'

  const alterdrop0 = document.querySelector('.fold-4-hide-seek-con p')
  alterdrop0.style.display = 'none'

  const alterdrop1 = document.querySelector('.fold-4-hide-seek-con2 p')
  alterdrop1.style.display = 'none'

  const alterdrop2 = document.querySelector('.fold-4-hide-seek-con3 p')
  alterdrop2.style.display = 'none'

  const alterdrop3 = document.querySelector('.fold-4-hide-seek-con4 p')
  alterdrop3.style.display = 'none'
}
function expand2(){
  const dropdown = document.querySelector('.fold-4-hide-seek-con2 p')
  dropdown.style.display = 'flex'

  const alterdrop0 = document.querySelector('.fold-4-hide-seek-con p')
  alterdrop0.style.display = 'none'

  const alterdrop1 = document.querySelector('.fold-4-hide-seek-con1 p')
  alterdrop1.style.display = 'none'

  const alterdrop2 = document.querySelector('.fold-4-hide-seek-con3 p')
  alterdrop2.style.display = 'none'

  const alterdrop3 = document.querySelector('.fold-4-hide-seek-con4 p')
  alterdrop3.style.display = 'none'
}
function expand3(){
  const dropdown = document.querySelector('.fold-4-hide-seek-con3 p')
  dropdown.style.display = 'flex'

  const alterdrop0 = document.querySelector('.fold-4-hide-seek-con p')
  alterdrop0.style.display = 'none'

  const alterdrop1 = document.querySelector('.fold-4-hide-seek-con1 p')
  alterdrop1.style.display = 'none'

  const alterdrop2 = document.querySelector('.fold-4-hide-seek-con2 p')
  alterdrop2.style.display = 'none'

  const alterdrop3 = document.querySelector('.fold-4-hide-seek-con4 p')
  alterdrop3.style.display = 'none'
}
function expand4(){
  const dropdown = document.querySelector('.fold-4-hide-seek-con4 p')
  dropdown.style.display = 'flex'

  const alterdrop0 = document.querySelector('.fold-4-hide-seek-con p')
  alterdrop0.style.display = 'none'

  const alterdrop1 = document.querySelector('.fold-4-hide-seek-con1 p')
  alterdrop1.style.display = 'none'

  const alterdrop2 = document.querySelector('.fold-4-hide-seek-con2 p')
  alterdrop2.style.display = 'none'

  const alterdrop3 = document.querySelector('.fold-4-hide-seek-con3 p')
  alterdrop3.style.display = 'none'
}

/* f2-5-cc carousal */
document.addEventListener('DOMContentLoaded', () => {
  carousel();
});

function carousel() {
  const carouselItems = document.querySelectorAll('.f2-5-cc-1, .f2-5-cc-2, .f2-5-cc-3');
  const btnLeft = document.querySelector('.f2-5-svg-btn-left');
  const btnRight = document.querySelector('.f2-5-svg-btn-right');
  let currentIndex = 0;

  if (!btnLeft || !btnRight || carouselItems.length === 0) {
    console.error('Carousel elements are missing');
    return;
  }

  function updateCarousel(index) {
    carouselItems.forEach((item, i) => {
      item.style.display = i === index ? 'block' : 'none';
    });
  }

  btnLeft.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
    updateCarousel(currentIndex);
  });

  btnRight.addEventListener('click', () => {
    currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
    updateCarousel(currentIndex);
  });

  // Initialize the carousel by showing the first item
  updateCarousel(currentIndex);
}