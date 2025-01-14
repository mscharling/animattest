// Back to top botton
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

// Autoplay video on full visible
document.addEventListener("DOMContentLoaded", function() {
    // Select all video elements on the page
    const videos = document.querySelectorAll('video');

    // Function to handle visibility and play/pause behavior
    function handleVideoVisibility(entries, observer) {
        entries.forEach(entry => {
            const video = entry.target;

            // Check if the video is fully visible
            if (entry.isIntersecting) {
                // Mute and play video when fully visible
                video.muted = true;  // Mute the video to allow autoplay
                video.play();
            } else {
                // Pause video when not fully visible
                video.pause();
            }
        });
    }

    // Create the IntersectionObserver to observe when the video is fully visible
    const observer = new IntersectionObserver(handleVideoVisibility, {
        threshold: 1.0  // Only play when the video is 100% visible in the viewport
    });

    // Loop through each video element, pause initially, and start observing
    videos.forEach(video => {
        video.pause();  // Ensure the video is paused initially to prevent default autoplay
        observer.observe(video);  // Observe the video for visibility
    });

    // Add scroll listener to ensure videos respond correctly to scrolling
    window.addEventListener('scroll', () => {
        videos.forEach(video => {
            // Check if the video is fully visible in the viewport (like IntersectionObserver)
            const rect = video.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                // Mute and play the video when fully visible
                video.muted = true;  // Mute the video for autoplay
                video.play();
            } else {
                // Pause the video if it's not fully visible
                video.pause();
            }
        });
    });
});

// Reading plotly plots