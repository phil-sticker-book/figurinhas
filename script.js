// Add event listeners to all card containers
document.querySelectorAll('.card-container').forEach(card => {
    
    // 1. Flip the card when clicked
    card.addEventListener('click', function() {
        // Toggle the class that CSS uses to trigger the 180deg turn
        this.classList.toggle('is-flipped');
    });

    // 2. Prevent the close button click from unflipping immediately
    // Find the close button inside this specific card
    const closeBtn = card.querySelector('.close-btn');
    closeBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Stop the click from reaching the main .card-container
        // Manually remove the flipped class (effectively closing it)
        card.classList.remove('is-flipped');
    });
});
