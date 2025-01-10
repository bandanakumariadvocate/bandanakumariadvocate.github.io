// Select the button
const toggle = document.getElementById('theme-toggle');

// Add a click event listener to the button
toggle.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');
});