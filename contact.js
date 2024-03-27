// Function to validate the contact form
function validateForm() {
    // Basic email validation
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
        emailInput.setCustomValidity('Please enter a valid email address.');
        alert("Enter a valid email address in the form of email@domain.com")
        return false;
    }

    // Assuming you want to check if the name contains only alphabets
    const nameInput = document.getElementById('name');
    const nameRegex = /^[A-Za-z]+$/;

    if (!nameRegex.test(nameInput.value)) {
        nameInput.setCustomValidity('Please enter a valid name containing only alphabets.');
        alert("Name must be alphabets only with no numbers")
        return false;
    }

    // If validation passes, show the thank you message
    showThankYouMessage();

    // Prevent the form from submitting (default behavior)
    return false;
}

// Function to display the thank you message
function showThankYouMessage() {
    const thanksDiv = document.getElementById("thankYouMessage")
    thanksDiv.style.display = 'block'; // Show the thank you message
}


