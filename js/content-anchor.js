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

  const alterdrop0 = document.querySelector('.fold-4-hide-seek-con1 p', '.fold-4-hide-seek-con2 p', '.fold-4-hide-seek-con3 p', '.fold-4-hide-seek-con4 p')
  alterdrop0.style.display = 'none'
}
function expand1(){
  const dropdown = document.querySelector('.fold-4-hide-seek-con1 p')
  dropdown.style.display = 'flex'

  const alterdrop0 = document.querySelector('.fold-4-hide-seek-con p', '.fold-4-hide-seek-con2 p', '.fold-4-hide-seek-con3 p', '.fold-4-hide-seek-con4 p')
  alterdrop0.style.display = 'none'
}
function expand2(){
  const dropdown = document.querySelector('.fold-4-hide-seek-con2 p')
  dropdown.style.display = 'flex'

  const alterdrop0 = document.querySelector('.fold-4-hide-seek-con p', '.fold-4-hide-seek-con1 p', '.fold-4-hide-seek-con3 p', '.fold-4-hide-seek-con4 p')
  alterdrop0.style.display = 'none'
}
function expand3(){
  const dropdown = document.querySelector('.fold-4-hide-seek-con3 p')
  dropdown.style.display = 'flex'

  const alterdrop0 = document.querySelector('.fold-4-hide-seek-con p', '.fold-4-hide-seek-con1 p', '.fold-4-hide-seek-con2 p', '.fold-4-hide-seek-con4 p')
  alterdrop0.style.display = 'none'
}
function expand4(){
  const dropdown = document.querySelector('.fold-4-hide-seek-con4 p')
  dropdown.style.display = 'flex'

  const alterdrop0 = document.querySelector('.fold-4-hide-seek-con p', '.fold-4-hide-seek-con1 p', '.fold-4-hide-seek-con2 p', '.fold-4-hide-seek-con3 p')
  alterdrop0.style.display = 'none'
}

/* f2-5-cc carousal */
function carousel() {
  const carouselItems = carouselContainer.querySelectorAll('.f2-5-cc-1, .f2-5-cc-2, .f2-5-cc-3');
  const btnLeft = document.getElementById('.f2-5-svg-btn-left');
  const btnRight = document.getElementById('.f2-5-svg-btn-right');

  let currentIndex = 0;

  function showItem(index) {
    carouselItems.forEach((item, i) => {
      if (i === index) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  btnLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showItem(currentIndex);
  });

  btnRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showItem(currentIndex);
  });

  showItem(currentIndex); // Show the initial item
}

carousel();