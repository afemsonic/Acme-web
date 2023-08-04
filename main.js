const hamburger = document.querySelectorAll('.hamburger');

const navMenu = document.querySelectorAll('.nav-menu');


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('.active');

  navMenu.classList.toggle('.active');
}
)
