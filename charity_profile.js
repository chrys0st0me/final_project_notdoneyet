const volunteerButton = document.getElementById('volunteerButton');

// Check if volunteerButton is successfully found in the DOM
if (volunteerButton) {
    volunteerButton.addEventListener('click', function() {
        const contactInfo = prompt('Please enter your contact information:');
        if (contactInfo) {
            alert(`Thank you for volunteering! We will contact you at ${contactInfo}.`);
        }
    });
} else {
    console.error('Volunteer button not found in the DOM.');
}

const dynamicElement = document.querySelector('#dynamicElement');

// Check if dynamicElement is successfully found in the DOM
if (dynamicElement) {
    dynamicElement.textContent = 'Click me for more information!';

    dynamicElement.addEventListener('click', function() {
        alert('You clicked the dynamic element!');
        // Add more dynamic behavior here as needed
    });
} else {
    console.error('Dynamic element not found in the DOM.');
}
Explanation:
