// contact.js

// Function to validate the contact form
function validateForm() {
    // Basic email validation
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
        emailInput.setCustomValidity('Please enter a valid email address.');
        return false;
    }

    // Assuming you want to check if the name contains only alphabets
    const nameInput = document.getElementById('name');
    const nameRegex = /^[A-Za-z]+$/;

    if (!nameRegex.test(nameInput.value)) {
        nameInput.setCustomValidity('Please enter a valid name containing only alphabets.');
        return false;
    }

    // If validation passes, show the thank you message
    showThankYouMessage();

    // Prevent the form from submitting (default behavior)
    return false;
}


// Function to display the thank you message
function showThankYouMessage() {
    const contactForm = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const userName = document.getElementById('userName');

    userName.textContent = document.getElementById('name').value;

    contactForm.style.display = 'none'; // Hide the contact form
    thankYouMessage.style.display ='block'; 