const dropDown = document.querySelector('.dropdown')
const mobileMenu = document.querySelector('.mobileMenu')
dropDown.addEventListener('click', () => {
  dropDown.classList.toggle('active')
  mobileMenu.classList.toggle('active')
})
