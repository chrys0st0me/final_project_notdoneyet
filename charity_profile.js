const volunteerButton = document.getElementById('volunteerButton');
volunteerButton.addEventListener('click', function() {
    // Code to prompt a form for users to input their contact information
    // Example: Show a modal or prompt for user input
    // You can use window.prompt(), create HTML elements dynamically, or show a modal
    // Here's a basic example using window.prompt():
    const contactInfo = prompt('Please enter your contact information:');
    if (contactInfo) {
        alert(`Thank you for volunteering! We will contact you at ${contactInfo}.`);
    }
});

const dynamicElement = document.querySelector('#dynamicElement');

// Example: Change text content of the element
dynamicElement.textContent = 'Click me for more information!';

// Example: Add event listener to the element
dynamicElement.addEventListener('click', function() {
    alert('You clicked the dynamic element!');
    // Add more dynamic behavior here as needed
});
