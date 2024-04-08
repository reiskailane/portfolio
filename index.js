document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        document.querySelector('header').classList.add('header-solid');
      } else {
        document.querySelector('header').classList.remove('header-solid');
      }
    });
  });