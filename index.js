const navList = document.getElementById('nav-list');
const openButton = document.getElementById('nav-button');
const closeButton = document.getElementById('nav-button-close');

openButton.addEventListener('click', () => {
  navList.classList.add('visible');
  closeButton.classList.add('visible');
  openButton.style.display = 'none';
});

closeButton.addEventListener('click', () => {
  navList.classList.remove('visible');
  closeButton.classList.remove('visible');
  openButton.style.display = 'block';
});