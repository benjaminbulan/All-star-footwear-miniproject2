// Elements
const navbar = document.getElementById('navbar');

// Change Color
const changeColor = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.background = 'linear-gradient(to right, rgb(102, 125, 182), rgb(0, 130, 200), rgb(0, 130, 200), rgb(102, 125, 182))';
    navbar.style.padding = '10px 0px';
  } else {
    navbar.style.background = 'transparent';
    navbar.style.padding = '20px 0px';
  }
}

// Events
window.onscroll = () => changeColor();