document.addEventListener('DOMContentLoaded', () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const destination = urlParams.get('destination');
  const destinationContent = document.getElementById('destination-content');
  const destinationNameElement = document.getElementById('destination-name');

  if (!destinationContent) {
    console.error('Destination content element not found.');
    return;
  }

  // Retrieve destination data from the global destinations array
  const destinationData = destinations.find(dest => dest.name === destination);

  if (destinationData) {
    destinationNameElement.textContent = destinationData.name;
    destinationContent.innerHTML = `
      <div class="destination-header mb-8">
        <img src="${destinationData.image}" alt="${destinationData.name}" class="w-full h-80 object-cover rounded-lg shadow-md">
      </div>
      <div class="destination-info bg-white p-6 rounded-lg shadow-md mb-8">
        <h1 class="text-3xl font-semibold text-gray-800">${destinationData.name}</h1>
        <p class="text-lg text-gray-600">Country: ${destinationData.country}</p>
        <p class="text-lg text-gray-600">Duration: ${destinationData.days} days</p>
        <p class="text-lg text-gray-600">Trip Dates: ${destinationData.startDate} to ${destinationData.endDate}</p>
        <p class="text-xl font-bold text-gray-800">Cost: $${destinationData.cost} per person</p>
      </div>
      
      <div class="itinerary-section mb-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Suggested Itineraries</h2>
        ${destinationData.itineraries.map(itinerary => `
          <div class="itinerary bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 class="text-xl font-semibold text-gray-800">${itinerary.title}</h3>
           <ul class="list-disc pl-5 mt-2">
  ${itinerary.activities.map((activity, index) => {
    const duration = itinerary.activitiesDuration[index] || 'Duration not specified';
    return `
      <li class="flex justify-between text-gray-700">
        <span>${activity}</span>
        <span class="text-gray-500">${duration}</span>
      </li>
    `;
  }).join('')}
</ul>
          </div>
        `).join('')}
      </div>
    `;
  } else {
    destinationContent.innerHTML = `<p class="text-center text-red-500 text-xl">Destination not found!</p>`;
  }
});
