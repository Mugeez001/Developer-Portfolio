const navbarToggle = document.getElementsByClassName('navbar__toggle')[0]
const navbarLink = document.getElementsByClassName('navbar__link')[0]

navbarToggle.addEventListener('click', () => {
  navbarLink.classList.toggle('active')
})