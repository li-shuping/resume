const themeButton = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

function updateThemeIcon() {
  if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = "☀️";
    themeButton.setAttribute("aria-label", "Switch to light mode");
    themeButton.setAttribute("title", "Switch to light mode");
  } else {
    themeButton.textContent = "🌙";
    themeButton.setAttribute("aria-label", "Switch to dark mode");
    themeButton.setAttribute("title", "Switch to dark mode");
  }
}

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

updateThemeIcon();

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  updateThemeIcon();
});

const navButtons = document.querySelectorAll(".nav-button");
const tabContents = document.querySelectorAll(".tab-content");

navButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const targetTab = button.dataset.tab;

    navButtons.forEach(function (navButton) {
      navButton.classList.remove("active");
    });

    tabContents.forEach(function (content) {
      content.classList.remove("active");
    });

    button.classList.add("active");
    document.getElementById(targetTab).classList.add("active");
  });
});
