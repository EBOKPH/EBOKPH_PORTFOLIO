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
