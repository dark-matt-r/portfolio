// Dark Mode Toggle Script

// Get the button.
const darkModeButton = document.getElementById("color-theme-button");
const colorThemeButtonMobile = document.getElementById(
  "color-theme-button-mobile"
);

const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

// Define theme constants.
const darkTheme = "darkTheme";
const lightTheme = "lightTheme";

// Get saved theme from local storage.
let colorTheme = localStorage.getItem("colorTheme");

// Set theme from last visit to site.
if (colorTheme === darkTheme) {
  colorThemeButtonMobile.innerText = "Light Mode";
  document.body.classList.add("dark-mode-colors");
  moonIcon.style.display = "inline";
  sunIcon.style.display = "none";
} else {
  colorThemeButtonMobile.innerText = "Dark Mode";
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

// Add event listener to the button.
colorThemeButtonMobile.addEventListener("click", () => {
  // Get current color theme.
  colorTheme = localStorage.getItem("colorTheme");
  // Switch the theme from light to dark colors.
  if (colorTheme === lightTheme) {
    colorThemeButtonMobile.innerText = "Light Mode";
    document.body.classList.add("dark-mode-colors");
    moonIcon.style.display = "inline";
    sunIcon.style.display = "none";
    localStorage.setItem("colorTheme", darkTheme);
  }
  // Switch the theme from dark to light colors.
  else {
    colorThemeButtonMobile.innerText = "Dark Mode";
    document.body.classList.remove("dark-mode-colors");
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline";
    localStorage.setItem("colorTheme", lightTheme);
  }
});

// Code for opening and closing the mobile navigation drawer.

// Get the hamburger button and the mobile navigation drawer.
const hamburgerButton = document.getElementsByClassName("hamburger-button")[0];
const mobileNavigationDrawer = document.getElementsByClassName(
  "header-navigation-links-mobile"
)[0];
const hamburgerBar1 = document.querySelectorAll(
  ".hamburger-button-bar:nth-child(1)"
)[0];
const hamburgerBar2 = document.querySelectorAll(
  ".hamburger-button-bar:nth-child(2)"
)[0];
const hamburgerBar3 = document.querySelectorAll(
  ".hamburger-button-bar:nth-child(3)"
)[0];
// hamburgerBar1.style.backgroundColor = "orange";
// hamburgerButton.style.backgroundColor = "orange";
// mobileNavigationDrawer.style.backgroundColor = "green";
hamburgerButton.addEventListener("click", function () {
  hamburgerButton.classList.toggle("rotate-hamburger");
  hamburgerBar1.classList.toggle("move-hamburger-bar-1");
  hamburgerBar2.classList.toggle("move-hamburger-bar-2");
  hamburgerBar3.classList.toggle("move-hamburger-bar-3");
  mobileNavigationDrawer.classList.toggle("move-drawer");
});
