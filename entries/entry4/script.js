document.addEventListener("DOMContentLoaded", function() {
    document.body.style.cursor = "none"; 

    document.addEventListener("mousemove", function(event) {
        createTrail(event.clientX, event.clientY);
    });
});

function createTrail(x, y) {
    const trail = document.createElement("div");
    trail.classList.add("trail");
    trail.style.left = x + "px";
    trail.style.top = y + "px";

    document.body.appendChild(trail);

   
    setTimeout(function() {
        trail.remove();
    }, 2000);
}

document.addEventListener("DOMContentLoaded", function() {
    const textToClick = document.getElementById("textToClick");
    const audio = document.getElementById("audio");

    textToClick.addEventListener("click", function() {
        audio.play();
    });
});
