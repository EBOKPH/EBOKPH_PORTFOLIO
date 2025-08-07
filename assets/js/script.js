function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    const image = document.getElementById("introImage");
    const isDark = document.body.classList.contains("dark-mode");

    image.src = isDark
      ? "images/arts/finaldarkmodeface.png"
      : "images/arts/kobe.png";
  }

