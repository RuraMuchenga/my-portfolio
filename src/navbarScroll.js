// navbarScroll.js

function handleScroll() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
      navbar.classList.add('nav-faded');
    } else {
      navbar.classList.remove('nav-faded');
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  
  // Clean up the event listener on component unmount
  export function removeScrollListener() {
    window.removeEventListener('scroll', handleScroll);
  }
  