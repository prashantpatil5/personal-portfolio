

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-item');

  // Mobile drawer toggle
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close mobile menu on clicking any navigation item
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
});