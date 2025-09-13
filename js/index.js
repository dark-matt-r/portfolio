// Dark Mode Toggle Script

// Get the button.
const darkModeButton = document.getElementById("color-theme-button");

const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

// Define theme constants.
const darkTheme = "darkTheme";
const lightTheme = "lightTheme";

// Get saved theme from local storage.
let colorTheme = localStorage.getItem("colorTheme");

// Set theme from last visit to site.
if (colorTheme === darkTheme) {
  document.body.classList.add("dark-mode-colors");
  moonIcon.style.display = "inline";
  sunIcon.style.display = "none";
} else {
  document.body.classList.remove("dark-mode-colors");
  moonIcon.style.display = "none";
  sunIcon.style.display = "inline";
  // localStorage.setItem("colorTheme", lightTheme);
}

// Add event listener to the button.
darkModeButton.addEventListener("click", () => {
  // Get current color theme.
  colorTheme = localStorage.getItem("colorTheme");
  // Switch the theme from light to dark colors.
  if (colorTheme === lightTheme) {
    document.body.classList.add("dark-mode-colors");
    moonIcon.style.display = "inline";
    sunIcon.style.display = "none";
    localStorage.setItem("colorTheme", darkTheme);
  }
  // Switch the theme from dark to light colors.
  else {
    document.body.classList.remove("dark-mode-colors");
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline";
    localStorage.setItem("colorTheme", lightTheme);
  }
});
