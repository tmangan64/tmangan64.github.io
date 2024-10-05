document.getElementById("startButton").addEventListener("click", function() {
    var startMenu = document.getElementById("startMenu");
    if (startMenu.style.display === "none") {
        startMenu.style.display = "block";
    } else {
        startMenu.style.display = "none";
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
