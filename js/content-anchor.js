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

  const alterdrop = document.querySelector('.fold-4-hide-seek-con1 p')
  alterdrop.style.display = 'none'
}
function expand1(){
  const dropdown = document.querySelector('.fold-4-hide-seek-con1 p')
  dropdown.style.display = 'flex'

  const alterdrop = document.querySelector('.fold-4-hide-seek-con p')
  alterdrop.style.display = 'none'
}
function expand2(){
  const dropdown = document.querySelector('.fold-4-hide-seek-con2 p')
  dropdown.style.display = 'flex'

  const alterdrop = document.querySelector('.fold-4-hide-seek-con1 p')
  alterdrop.style.display = 'none'
}
function expand3(){
  const dropdown = document.querySelector('.fold-4-hide-seek-con3 p')
  dropdown.style.display = 'flex'

  const alterdrop = document.querySelector('.fold-4-hide-seek-con2 p')
  alterdrop.style.display = 'none'
}
function expand4(){
  const dropdown = document.querySelector('.fold-4-hide-seek-con4 p')
  dropdown.style.display = 'flex'

  const alterdrop = document.querySelector('.fold-4-hide-seek-con3 p')
  alterdrop.style.display = 'none'
}