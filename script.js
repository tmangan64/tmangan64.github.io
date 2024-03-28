document.getElementById("startButton").addEventListener("click", function() {
    var startMenu = document.getElementById("startMenu");
    if (startMenu.style.display === "none") {
        startMenu.style.display = "block";
    } else {
        startMenu.style.display = "none";
    }
});
