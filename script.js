// Variables
let counter = 0;
const counterDisplay = document.getElementById('counterDisplay');
const heartsContainer = document.getElementById('heartsContainer');
const explodeSound = new Audio('path/to/silly-sound-effect.mp3'); // Path to sound file

// Function to create heart explosion
function explodeHearts(event) {
    counter++;
    counterDisplay.textContent = counter; // Update tally counter

    // Play sound effect
    explodeSound.currentTime = 0; // Reset sound time
    explodeSound.play();

    // Create explosion effect
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.position = 'absolute';
    heart.style.left = `${event.clientX}px`;
    heart.style.top = `${event.clientY}px`;
    heartsContainer.appendChild(heart);
    
    // Animation logic
    const animationDuration = 1; // seconds
    heart.style.transition = `transform ${animationDuration}s`;
    heart.style.transform = 'scale(2) opacity(0)';
    
    // Remove heart after animation
    setTimeout(() => {
        heartsContainer.removeChild(heart);
    }, animationDuration * 1000);
}

// Event listener on the landing page element
document.getElementById('landingPage').addEventListener('click', explodeHearts);

// Navigation to "YES" page logic
document.getElementById('yesButton').addEventListener('click', function() {
    window.location.href = 'yes.html'; // Replace 'yes.html' with your actual yes page
});
