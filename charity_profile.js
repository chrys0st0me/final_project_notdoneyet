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


document.addEventListener('DOMContentLoaded', function() {
    // Define origins and destinations
    const origins = [
        { lat: 55.93, lng: -3.118 }, // Edinburgh, UK
        'Greenwich, England' // Address-based origin
    ];
    
    const destinations = [
        'Stockholm, Sweden', // Address-based destination
        { lat: 50.087, lng: 14.421 } // Prague, Czechia
    ];

    // Create DistanceMatrixService instance
    const service = new google.maps.DistanceMatrixService();

    // Make Distance Matrix API request
    service.getDistanceMatrix(
        {
            origins: origins,
            destinations: destinations,
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
        },
        function(response, status) {
            if (status !== 'OK') {
                console.error('Distance Matrix request failed:', status);
                return;
            }

            // Handle successful response
            const resultsContainer = document.getElementById('results-container');
            resultsContainer.innerHTML = ''; // Clear previous content

            response.rows.forEach((row, i) => {
                const originAddress = response.originAddresses[i];
                row.elements.forEach((element, j) => {
                    const destinationAddress = response.destinationAddresses[j];
                    const distanceText = element.distance.text;
                    const durationText = element.duration.text;

                    // Display distance and duration in the results container
                    const resultElement = document.createElement('div');
                    resultElement.innerHTML = `<strong>${originAddress}</strong> to <strong>${destinationAddress}</strong>: ${distanceText}, ${durationText}`;
                    resultsContainer.appendChild(resultElement);
                });
            });
        }
    );
});
    const dataContainer = document.getElementById('data-container');
    dataContainer.textContent = message;
}

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


document.addEventListener('DOMContentLoaded', function() {
    // Define origins and destinations
    const origins = [
        { lat: 55.93, lng: -3.118 }, // Edinburgh, UK
        'Greenwich, England' // Address-based origin
    ];
    
    const destinations = [
        'Stockholm, Sweden', // Address-based destination
        { lat: 50.087, lng: 14.421 } // Prague, Czechia
    ];

    // Create DistanceMatrixService instance
    const service = new google.maps.DistanceMatrixService();

    // Make Distance Matrix API request
    service.getDistanceMatrix(
        {
            origins: origins,
            destinations: destinations,
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
        },
        function(response, status) {
            if (status !== 'OK') {
                console.error('Distance Matrix request failed:', status);
                return;
            }

            // Handle successful response
            const resultsContainer = document.getElementById('results-container');
            resultsContainer.innerHTML = ''; // Clear previous content

            response.rows.forEach((row, i) => {
                const originAddress = response.originAddresses[i];
                row.elements.forEach((element, j) => {
                    const destinationAddress = response.destinationAddresses[j];
                    const distanceText = element.distance.text;
                    const durationText = element.duration.text;

                    // Display distance and duration in the results container
                    const resultElement = document.createElement('div');
                    resultElement.innerHTML = `<strong>${originAddress}</strong> to <strong>${destinationAddress}</strong>: ${distanceText}, ${durationText}`;
                    resultsContainer.appendChild(resultElement);
                });
            });
        }
    );
});
    const dataContainer = document.getElementById('data-container');
    dataContainer.textContent = message;
}
