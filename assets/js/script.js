function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    const image = document.getElementById("introImage");
    const isDark = document.body.classList.contains("dark-mode");

    image.src = isDark
      ? "images/arts/finaldarkmodeface.png"
      : "images/arts/kobe.png";
  }

// revolving galery

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


