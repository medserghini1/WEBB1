// Login form validation

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === '' || password === '') {
            alert('Please fill in all fields');
        } else {
            alert('Login successful!');
            // Here you would typically send the data to a server
        }
    });
});