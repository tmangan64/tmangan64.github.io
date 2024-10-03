document.getElementById("startButton").addEventListener("click", function() {
    var startMenu = document.getElementById("startMenu");
    if (startMenu.style.display === "none") {
        startMenu.style.display = "block";
    } else {
        startMenu.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function() {
  // Get the Close button and the Welcome window
  const closeButton = document.querySelector('button[aria-label="Close"]');
  const welcomeWindow = document.querySelector('.window');

  // Get the "About Me" desktop icon
  const aboutMeIcon = document.querySelector('.desktop-icon.my-computer');

  // Add event listener to the Close button to hide the window
  closeButton.addEventListener("click", function() {
    welcomeWindow.style.display = "none";
  });

  // Add event listener to the "About Me" icon to show the window again
  aboutMeIcon.addEventListener("click", function() {
    welcomeWindow.style.display = "block"; // Reopen the window
  });
});
