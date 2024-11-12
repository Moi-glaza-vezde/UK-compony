const btn = document.querySelector('.btn-burger__wrapper');
const btnString = document.querySelector('.btn-burger__string');
const nav = document.querySelector('.header__nav');
const blackWindow = document.querySelector('.black-window');
// const navItems = document.querySelectorAll('.');
btn.addEventListener('click', () => {
   btnString.classList.toggle('btn-burger__string--active');

   if (btnString.classList.contains('btn-burger__string--active')) {
      nav.classList.add('header__nav--active');
      blackWindow.style.display = 'block';
      document.querySelector('body').classList.add('not-scroll');
   } else {
      nav.classList.remove('header__nav--active');
      blackWindow.style.display = 'none';
      document.querySelector('body').classList.remove('not-scroll');
   }
});

nav.querySelectorAll('.nav-item').forEach((item) => {
   item.addEventListener('click', () => {
      btnString.classList.remove('btn-burger__string--active');
      nav.classList.remove('header__nav--active');
      blackWindow.style.display = 'none';
      document.querySelector('body').classList.remove('not-scroll');
   });
});
