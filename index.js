// Simple JavaScript for the website

document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded');
    
    // Example: Add click event to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    });
});