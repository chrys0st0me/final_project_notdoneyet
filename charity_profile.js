
It seems like your JavaScript code is missing the part where you handle the volunteer button and the dynamic element. Here's how you can modify your JavaScript code to include those functionalities:

javascript
Copy code
document.addEventListener('DOMContentLoaded', function() {
    // Event listener "Volunteer Now" button
    const volunteerButton = document.getElementById('volunteerButton');
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

    // Event listener for dynamic element (clickable paragraph)
    const dynamicElement = document.querySelector('#dynamicElement');
    if (dynamicElement) {
        dynamicElement.textContent = 'Click me for more information!';
        dynamicElement.addEventListener('click', function() {
            alert('You clicked the dynamic element!');
        });
    } else {
        console.error('Dynamic element not found in the DOM.');
    }

    // Select the profile container element
    const elementToStyle = document.querySelector('.profile-container');

    // Apply dynamic style lightblue
    if (elementToStyle) {
        elementToStyle.style.backgroundColor = 'lightblue';
        elementToStyle.style.padding = '10px';
    } else {
        console.error('Profile container not found in the DOM.');
    }
});
