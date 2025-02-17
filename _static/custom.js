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
    // 1) Only run auto-play logic on larger screens
    if (window.innerWidth < 768) {
      return; // Do nothing on small screens (phones)
    }
  
    // 2) IntersectionObserver callback
    function handleVideoVisibility(entries) {
      entries.forEach(entry => {
        const video = entry.target;
        const fullyVisible = entry.isIntersecting && entry.intersectionRatio === 1;
  
        if (fullyVisible) {
          // If the user hasn't manually paused, auto‐play the video
          if (video.dataset.userPaused !== "true") {
            video.dataset.autoPlaying = "true"; // Mark that *we* are causing the play
            video.muted = true;                // Mute for auto‐play policies
            video.play();
          }
        } else {
          // If not fully visible, force a pause
          video.dataset.autoPausing = "true"; // Mark that *we* are causing the pause
          video.pause();
        }
      });
    }
  
    // Create the IntersectionObserver (play/pause only when 100% visible)
    const observer = new IntersectionObserver(handleVideoVisibility, {
      threshold: 1.0
    });
  
    // 3) Select all videos and initialize
    const videos = document.querySelectorAll("video");
    videos.forEach(video => {
      // Start in paused state
      video.pause();
      // Assume user has not paused yet
      video.dataset.userPaused = "false";
  
      // 4) Distinguish auto‐pause vs. user‐pause
      video.addEventListener("pause", () => {
        // If we set 'autoPausing', then this pause was triggered by the observer
        if (video.dataset.autoPausing === "true") {
          video.dataset.autoPausing = "";
        } else {
          // Otherwise, the user pressed pause => do not auto‐play again
          video.dataset.userPaused = "true";
        }
      });
  
      // 5) Distinguish auto‐play vs. user‐play
      video.addEventListener("play", () => {
        // If we set 'autoPlaying', then this play was triggered by the observer
        if (video.dataset.autoPlaying === "true") {
          video.dataset.autoPlaying = "";
        } else {
          // Otherwise, the user pressed play => userPaused should become false
          video.dataset.userPaused = "false";
        }
      });
  
      // Finally, observe each video
      observer.observe(video);
    });
  });
  
// Reading plotly plots