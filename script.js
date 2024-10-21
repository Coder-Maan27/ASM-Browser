document.getElementById('goButton').addEventListener('click', function() {
    const urlInput = document.getElementById('urlInput').value;
    const iframe = document.getElementById('gameFrame');

    // Validate the URL input
    if (urlInput) {
        // Add 'https://' if missing
        const url = urlInput.startsWith('http://') || urlInput.startsWith('https://') ? urlInput : 'https://' + urlInput;
        iframe.src = url;
        
        // Optional error handling
        iframe.onerror = function() {
            alert('Failed to load the specified URL. Please check the URL and try again.');
        };
    } else {
        alert('Please enter a URL or game name.');
    }
});

// Optional: Allow Enter key to trigger the 'Go' button
document.getElementById('urlInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('goButton').click();
    }
});

// Fullscreen functionality
document.getElementById('fullscreenButton').addEventListener('click', function() {
    const iframe = document.getElementById('gameFrame');
    
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { // IE/Edge
        iframe.msRequestFullscreen();
    }
});

// Exit fullscreen on click
document.addEventListener('fullscreenchange', exitFullscreen);
document.addEventListener('mozfullscreenchange', exitFullscreen);
document.addEventListener('webkitfullscreenchange', exitFullscreen);
document.addEventListener('msfullscreenchange', exitFullscreen);

function exitFullscreen() {
    const iframe = document.getElementById('gameFrame');
    if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        // In fullscreen mode, you can add any specific styles or functionalities here if needed
    } else {
        // Exiting fullscreen, reset any styles or functionalities here if needed
    }
}