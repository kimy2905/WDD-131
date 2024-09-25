// Select the dropdown element (theme selector)
let themeSelector = document.querySelector('#theme-selector');

// Function to change the theme
function changeTheme() {
    // Get the value of the selected option
    let selectedTheme = themeSelector.value; //light or dark

    // Get the body element and logo element
    const body = document.querySelector('body');
    const logo = document.querySelector('.footer-logo');

    // Check if the selected theme is "dark"
    if (selectedTheme === 'dark') {
        // Add the dark class to the body
        body.classList.add('dark');
        // Change the logo source to the white logo
        logo.src = 'byui-dark.png'; // Update this with the correct path to your white logo
    } else {
        // Remove the dark class from the body
        body.classList.remove('dark');
        // Change the logo source to the blue logo
        logo.src = 'mission-blue-logo.webp'; // Update this with the correct path to your blue logo
    }
}

// Add event listener to the theme selector
themeSelector.addEventListener("change",changeTheme);
