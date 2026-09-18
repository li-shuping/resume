const toggleButton = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

function updateThemeIcon() {
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️";
    toggleButton.setAttribute("aria-label", "Switch to light mode");
    toggleButton.setAttribute("title", "Switch to light mode");
  } else {
    toggleButton.textContent = "🌙";
    toggleButton.setAttribute("aria-label", "Switch to dark mode");
    toggleButton.setAttribute("title", "Switch to dark mode");
  }
}

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

updateThemeIcon();

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  updateThemeIcon();
});
