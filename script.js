document.getElementById('startButton').addEventListener('click', function() {
    const startMenu = document.getElementById('startMenu');
    
    // Toggle start menu visibility
    if (startMenu.style.display === 'none' || startMenu.style.display === '') {
        startMenu.style.display = 'flex'; // Show the Start Menu (flex to accommodate the gradient bar)
    } else {
        startMenu.style.display = 'none'; // Hide the Start Menu
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the Close button, Cancel button, and the Welcome window
    const closeButton = document.querySelector('button[aria-label="Close"]');
    const cancelButton = document.getElementById('cancelButton');
    const welcomeWindow = document.getElementById('aboutMeWindow');

    // Get the "About Me" desktop icon
    const aboutMeIcon = document.querySelector('.desktop-icon.my-computer');

    // Add event listener to the Close button to hide the window
    closeButton.addEventListener("click", function() {
        welcomeWindow.style.display = "none";
        document.getElementById('aboutMeTaskbarIcon').style.display = 'none';
    });

    // Add event listener to the "Cancel" button to hide the window
    cancelButton.addEventListener("click", function() {
        welcomeWindow.style.display = "none";
        document.getElementById('aboutMeTaskbarIcon').style.display = 'none';
    });

    // Add event listener to the "About Me" icon to show the window again
    aboutMeIcon.addEventListener("click", function() {
        welcomeWindow.style.display = "block"; // Reopen the window
        document.getElementById('aboutMeTaskbarIcon').style.display = 'flex';
    });

    // Show the "About Me" window by default and center it
    welcomeWindow.style.display = "block";
    document.getElementById('aboutMeTaskbarIcon').style.display = 'flex';
    centerWindow(welcomeWindow);
});

function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock on page load
updateClock();

// Drag and Drop functionality for windows
function makeDraggable(windowElement) {
    const titleBar = windowElement.querySelector('.title-bar');
    let isDragging = false;
    let offsetX, offsetY;

    titleBar.addEventListener('mousedown', function(e) {
        isDragging = true;
        offsetX = e.clientX - windowElement.offsetLeft;
        offsetY = e.clientY - windowElement.offsetTop;
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            windowElement.style.left = `${e.clientX - offsetX}px`;
            windowElement.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
    });
}

// Center the window on the screen
function centerWindow(windowElement) {
    const windowWidth = windowElement.offsetWidth;
    const windowHeight = windowElement.offsetHeight;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const left = (screenWidth - windowWidth) / 2;
    const top = (screenHeight - windowHeight) / 2;

    windowElement.style.left = `${left}px`;
    windowElement.style.top = `${top}px`;
}

// Apply drag and drop to the "About Me" window
const aboutMeWindow = document.getElementById('aboutMeWindow');
makeDraggable(aboutMeWindow);