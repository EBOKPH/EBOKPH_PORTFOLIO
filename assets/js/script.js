function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

  function openLightbox(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "flex";
  }

  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }

  const images = document.querySelectorAll('.carousel-images img');
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  // Auto-rotate every 3 seconds (optional)
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 3000);


