const video = document.getElementById('logo-video');
const splashScreen = document.getElementById('splash-screen');
const mainContent = document.getElementById('main-content');

// Jab video ends, hide the splash screen and display  the main content
video.addEventListener('ended', () => {
    splashScreen.classList.add('fade-out');
    
    setTimeout(() => {
        // Yeh Allow karega scrolling again
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';

        splashScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }, 1000); // Match the timeout with the fade-out duration
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting immediately

    let is_valid_form = true;

    //First it will Clear previous error messages
    document.getElementById('name-error').innerText = '';
    document.getElementById('email-error').innerText = '';
    document.getElementById('message-error').innerText = '';
    document.getElementById('success-message').innerText = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (name === '') {
        document.getElementById('name-error').innerText = 'Please enter your name.';
        is_valid_form = false;
    }
    if (email === '') {
        document.getElementById('email-error').innerText = 'Please enter your email.';
        is_valid_form = false;
    } 
    else if (!pattern.test(email)) {
        document.getElementById('email-error').innerText = 'Please enter a valid email.';
        is_valid_form = false;
    }

    if (is_valid_form) {
        document.getElementById('success-message').innerText = 'Message sent successfully!';
        document.getElementById('contact-form').reset(); // This will clear form fields
    }
});

