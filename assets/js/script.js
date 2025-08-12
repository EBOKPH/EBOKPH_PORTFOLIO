function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const image = document.getElementById("introImage");
  const isDark = document.body.classList.contains("dark-mode");

  if (isDark) {
    image.src = "images/arts/finaldarkmodeface.png";
  } else {
    image.src = "images/arts/kobe.png";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links li a");
  const sections = document.querySelectorAll("section[id]");

  // Click highlight
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Scroll highlight
  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 60; // adjust for navbar height
      const sectionHeight = section.clientHeight;
      if (
        pageYOffset >= sectionTop &&
        pageYOffset < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});
