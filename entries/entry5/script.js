var isSalmon = false; // Variable to track the state of the background color

document.getElementById("colorButton").addEventListener("click", function() {
    // Toggle background color, font family, and border left
    if (isSalmon) {
        document.body.style.backgroundColor = ""; // Default background color
        document.body.style.fontFamily = ""; // Default font family
        // Reset border-left-width and border-top-width for all elements with border-left and border-top properties
        document.querySelectorAll("*").forEach(function(element) {
            var computedStyle = window.getComputedStyle(element);
            if (computedStyle.getPropertyValue('border-left') !== 'none' && computedStyle.getPropertyValue('border-top') !== 'none') {
                element.style.borderLeftWidth = "8px"; // Default border-left-width
                element.style.borderTopWidth = "8px"; // Default border-top-width
            }
        });
    } else {
        document.body.style.backgroundColor = "salmon"; // Salmon pink background color
        document.body.style.fontFamily = "monospace"; // Monospace font family
        // Change border-left-width and border-top-width for all elements with border-left and border-top properties
        document.querySelectorAll("*").forEach(function(element) {
            var computedStyle = window.getComputedStyle(element);
            if (computedStyle.getPropertyValue('border-left') !== 'none' && computedStyle.getPropertyValue('border-top') !== 'none') {
                element.style.borderLeftWidth = "2px"; // Change border-left-width
                element.style.borderTopWidth = "2px"; // Change border-top-width
            }
        });
    }

   
});

