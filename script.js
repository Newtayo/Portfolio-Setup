const dropDown = document.querySelector('.dropdown')
const mobileMenu = document.querySelector('.mobileMenu')

var immage = document.querySelector('.immage');
dropDown.addEventListener('click', () => {

  dropDown.classList.toggle('active')
  mobileMenu.classList.toggle('active')
  immage.classList.toggle('active')
  
})
