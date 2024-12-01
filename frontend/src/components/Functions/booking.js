// Fetch destination data and populate form fields
const destinationsData = destinations; // Assuming 'destinationsData' is the array from DestinationData.js

// Populate destinationsData dropdown
const destinationsDataelect = document.getElementById('destination');
const defaultOption = document.createElement('option');
defaultOption.textContent = 'Select Destination';
defaultOption.value = '';
destinationsDataelect.appendChild(defaultOption);
destinationsData.forEach(destination => {
  const option = document.createElement('option');
  option.value = destination.name;
  option.textContent = destination.name;
  destinationsDataelect.appendChild(option);
});

// Update itineraries based on selected destination
const itinerarySelect = document.getElementById('itinerary');
destinationsDataelect.addEventListener('change', function() {
  const selectedDestination = destinationsData.find(dest => dest.name === this.value);
  itinerarySelect.innerHTML = ''; // Clear previous itineraries
  
  if (selectedDestination) {
    selectedDestination.itineraries.forEach(itinerary => {
      const option = document.createElement('option');
      option.value = itinerary.title;
      option.textContent = itinerary.title;
      itinerarySelect.appendChild(option);
    });
  }
});

// Update Date Range when destination is selected
destinationsDataelect.addEventListener('change', function() {
const selectedDestination = destinationsData.find(dest => dest.name === this.value);

  const dateRangeSelect = document.getElementById('date-range');
  dateRangeSelect.innerHTML = ''; // Clear any existing options
  const defaultOption = document.createElement('option');
  defaultOption.textContent = 'Select a Date Range';
  defaultOption.value = '';
  dateRangeSelect.appendChild(defaultOption);
  if (selectedDestination) {
    // Add a default "Select a Date Range" option

    const option = document.createElement('option');
    option.value = `${selectedDestination.startDate}-${selectedDestination.endDate}`;
    option.textContent = `${selectedDestination.startDate} to ${selectedDestination.endDate}`;
    dateRangeSelect.appendChild(option);
    // Add options for each date range
    
  }
});

// Calculate Total Price
function calculateTotalPrice() {
  const destination = destinationsData.find(dest => dest.name === destinationsDataelect.value);
  if (!destination) return;

  const adults = parseInt(document.getElementById('adults').value) || 1;
  const children = parseInt(document.getElementById('children').value) || 0;
  const infants = parseInt(document.getElementById('infants').value) || 0;
  
  const pricePerAdult = destination.cost;
  const childDiscount = 60;
  
  let totalPrice = (adults * pricePerAdult) + (children * (pricePerAdult - childDiscount)) + (infants * 0);
  document.getElementById('total-price').value = `$${totalPrice}`;
}

// Attach event listeners for price calculation and form validation
document.getElementById('adults').addEventListener('input', calculateTotalPrice);
document.getElementById('children').addEventListener('input', calculateTotalPrice);
document.getElementById('infants').addEventListener('input', calculateTotalPrice);

// Validate form on submit
document.getElementById('booking-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission
  
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  
  // Validate email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Validate phone number
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    alert('Please enter a valid phone number.');
    return;
  }

  // Form is valid, show confirmation
  document.getElementById('confirmation-message').classList.remove('hidden');
});

// Close confirmation message
document.getElementById('close-confirmation').addEventListener('click', function() {
  document.getElementById('confirmation-message').classList.add('hidden');
  document.getElementById('booking-form').reset();
  calculateTotalPrice(); // Reset total price calculation
});
