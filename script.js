// Gallery Upload (Placeholder Logic)
document.addEventListener('DOMContentLoaded', function() {
  const uploadInput = document.getElementById('galleryUpload');
  const galleryGrid = document.getElementById('galleryGrid');
  const uploadLabel = document.querySelector('.upload-label');

  if (uploadInput && galleryGrid && uploadLabel) {
    uploadLabel.addEventListener('click', () => uploadInput.click());
    uploadInput.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          const img = document.createElement('img');
          img.src = evt.target.result;
          img.alt = 'Uploaded Image';
          galleryGrid.appendChild(img);
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Smooth scroll for nav links
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // (Optional) Mobile nav toggle logic can be added here if a hamburger menu is implemented
  // Hamburger menu toggle for mobile
  const hamburger = document.getElementById('hamburger-menu');
  const navLinks = document.getElementById('navbar-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
}); 