const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  dropdown.style.display = 'none';
});

document.addEventListener('mouseover', (e) => {
  if (e.target.closest('.dropdown')) {
    e.target.closest('.dropdown').style.display = 'block';
  }
});

document.addEventListener('mouseout', (e) => {
  if (e.target.closest('.dropdown')) {
    e.target.closest('.dropdown').style.display = 'none';
  }
});
