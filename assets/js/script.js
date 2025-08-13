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
  const buffer = 200;

  // Click highlight
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Scroll highlight with buffer + last section handling
  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (
        // Use buffer for all sections except the last one
        (pageYOffset >= sectionTop - buffer &&
          pageYOffset < sectionTop + sectionHeight + buffer &&
          index !== sections.length - 1) ||
        // Special handling for last section (auto-highlight at bottom)
        (index === sections.length - 1 &&
          pageYOffset + window.innerHeight >= document.body.scrollHeight)
      ) {
        current = section.getAttribute("id");
      }
    });

    // Apply active class to nav link
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});
