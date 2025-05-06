const toggleButton = document.querySelector('.toggle-handler');
const backDrop = document.querySelector('.backdrop');
const mainNav = document.querySelector('.side-bar');

toggleButton.addEventListener('click', () => {
  if (mainNav.style.display === 'block') {
    mainNav.style.display = 'none';
    backDrop.style.display = 'none';
  }
  else {
    backDrop.style.display = 'block';
    mainNav.style.display = 'block';
  }
})

backDrop.addEventListener('click', () => {
  backDrop.style.display = 'none';
  mainNav.style.display = 'none';
})