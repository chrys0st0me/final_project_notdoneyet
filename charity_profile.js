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
});

document.addEventListener('DOMContentLoaded', function() {
    // Select the profile container element
    const elementToStyle = document.querySelector('.profile-container');

    // ...is element  found
    if (elementToStyle) {
        // Apply dynamic style lightblue
        elementToStyle.style.backgroundColor = 'lightblue';
        elementToStyle.style.padding = '10px';
    } else {
        console.error('Profile container not found in the DOM.');
    }
});
