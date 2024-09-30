document.addEventListener("DOMContentLoaded", function() {
    // Select the 'Back to top' button by its ID
    var backToTopButton = document.querySelector('#pst-back-to-top');
    
    if (backToTopButton) {
        // Find the child nodes and loop through to find the text node after the <svg> element
        backToTopButton.childNodes.forEach(function(node) {
            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() === "Back to top") {
                // Replace the text content
                node.textContent = " Tilbage til toppen";  // Change this to your desired text
            }
        });
    }
});