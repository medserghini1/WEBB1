// Login form validation

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        loginMessage.textContent = '';
        loginMessage.style.color = '';

        if (!username || !password) {
            loginMessage.textContent = 'Please fill in both username and password.';
            loginMessage.style.color = '#d14343';
            return;
        }

        loginMessage.textContent = 'Login successful. Redirecting...';
        loginMessage.style.color = '#0f8554';
        // Replace with real authentication logic when connected to a backend.
    });
});