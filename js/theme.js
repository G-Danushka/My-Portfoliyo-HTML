// theme.js - Dark mode functionality
document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("toggle");
  const htmlElement = document.documentElement;

  // Function to set the theme
  function setTheme(isDark) {
    if (isDark) {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  // Check for saved user preference, respect OS preference if nothing saved
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Set initial state based on saved preference or OS preference
  if (savedTheme === "dark" || (savedTheme === null && prefersDark)) {
    toggleSwitch.checked = true;
    setTheme(true);
  } else {
    toggleSwitch.checked = false;
    setTheme(false);
  }

  // Listen for toggle changes
  toggleSwitch.addEventListener("change", function () {
    setTheme(this.checked);
  });
});
