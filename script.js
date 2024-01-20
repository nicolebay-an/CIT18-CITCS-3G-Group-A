document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM content to be fully loaded

    // Get the dark mode toggle button
    var darkModeToggle = document.getElementById("darkModeToggle");

    // Check if the user has a preference for dark mode
    var prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial dark mode state based on user preference
    document.body.classList.toggle('dark-mode', prefersDarkMode);

    // Add a click event listener to the dark mode toggle button
    darkModeToggle.addEventListener("click", function () {
        // Toggle the dark mode class on the body
        document.body.classList.toggle('dark-mode');

        // Save the user's preference in local storage
        var isDarkModeEnabled = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkModeEnabled);
    });

    // Check if the user has a stored preference for dark mode
    var storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode !== null) {
        document.body.classList.toggle('dark-mode', storedDarkMode === 'true');
    }
    document.addEventListener("DOMContentLoaded", function () {
        // Wait for the DOM content to be fully loaded
    
        // Get all the sections
        var sections = document.querySelectorAll('section');
    
        // Add a scroll event listener to trigger the animation
        window.addEventListener('scroll', function () {
            sections.forEach(function (section) {
                if (isElementInViewport(section)) {
                    section.classList.add('in-viewport');
                }
            });
        });
    
        // Function to check if an element is in the viewport
        function isElementInViewport(element) {
            var rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            );
        }
    });
    
});
