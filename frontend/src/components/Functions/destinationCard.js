// Function to render destinations
const renderDestinations = (destinations) => {
  const container = document.getElementById('destination-cards-container');
  container.innerHTML = ''; // Clear previous content
  
  destinations.forEach(destination => {
    const card = `
      <div class="destination-card bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
        <img src="${destination.image}" alt="${destination.name}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-semibold">${destination.name}</h3>
          <p class="text-sm text-gray-600">${destination.days} days trip</p>
          <p class="text-sm text-gray-600">Start Date: ${destination.startDate}</p>
          <p class="text-sm text-gray-600">End Date: ${destination.endDate}</p>
          <p class="text-lg font-bold text-gray-900">Cost: $${destination.cost} / person</p>
          <a href="Cities.html?destination=${destination.name}" class="block text-center mt-4 py-2 px-4 bg-blue-600 text-white rounded-md">View Details</a>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
};

// Call renderDestinations to initially populate the cards
renderDestinations(destinations);
