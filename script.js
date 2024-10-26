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
  const welcomeWindow = document.querySelector('.window');

  // Get the "About Me" desktop icon
  const aboutMeIcon = document.querySelector('.desktop-icon.my-computer');

  // Add event listener to the Close button to hide the window
  closeButton.addEventListener("click", function() {
    welcomeWindow.style.display = "none";
  });

  // Add event listener to the "Cancel" button to hide the window
  cancelButton.addEventListener("click", function() {
    welcomeWindow.style.display = "none";
  });

  // Add event listener to the "About Me" icon to show the window again
  aboutMeIcon.addEventListener("click", function() {
    welcomeWindow.style.display = "block"; // Reopen the window
  });
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

// Variables to reference the About Me window and taskbar icon
const aboutMeWindow = document.querySelector('.window[title="About Me"]');
const aboutMeTaskbarIcon = document.getElementById('aboutMeTaskbarIcon');
const closeButton = document.querySelector('.title-bar-controls button[aria-label="Close"]');
const aboutMeIcon = document.querySelector('.desktop-icon.my-computer');

// Open About Me window and show taskbar icon
aboutMeIcon.addEventListener('click', function() {
    aboutMeWindow.style.display = 'block';
    aboutMeTaskbarIcon.style.display = 'flex'; // Show the taskbar icon
});

// Close About Me window and hide taskbar icon
closeButton.addEventListener('click', function() {
    aboutMeWindow.style.display = 'none';
    aboutMeTaskbarIcon.style.display = 'none'; // Hide the taskbar icon
});

// Cancel button in the About Me window also closes the window and hides the taskbar icon
const cancelButton = document.querySelector('.window-body button[aria-label="Cancel"]');
cancelButton.addEventListener('click', function() {
    aboutMeWindow.style.display = 'none';
    aboutMeTaskbarIcon.style.display = 'none'; // Hide the taskbar icon
});
