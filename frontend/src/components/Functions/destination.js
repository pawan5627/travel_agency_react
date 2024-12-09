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
      <div classname="destination-header mb-8">
        <img src="${destinationData.image}" alt="${destinationData.name}" classname="w-full h-80 object-cover rounded-lg shadow-md">
      </div>
      <div classname="destination-info bg-white p-6 rounded-lg shadow-md mb-8">
        <h1 classname="text-3xl font-semibold text-gray-800">${destinationData.name}</h1>
        <p classname="text-lg text-gray-600">Country: ${destinationData.country}</p>
        <p classname="text-lg text-gray-600">Duration: ${destinationData.days} days</p>
        <p classname="text-lg text-gray-600">Trip Dates: ${destinationData.startDate} to ${destinationData.endDate}</p>
        <p classname="text-xl font-bold text-gray-800">Cost: $${destinationData.cost} per person</p>
      </div>
      
      <div classname="itinerary-section mb-8">
        <h2 classname="text-2xl font-bold text-gray-800 mb-4">Suggested Itineraries</h2>
        ${destinationData.itineraries.map(itinerary => `
          <div classname="itinerary bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 classname="text-xl font-semibold text-gray-800">${itinerary.title}</h3>
           <ul classname="list-disc pl-5 mt-2">
  ${itinerary.activities.map((activity, index) => {
    const duration = itinerary.activitiesDuration[index] || 'Duration not specified';
    return `
      <li classname="flex justify-between text-gray-700">
        <span>${activity}</span>
        <span classname="text-gray-500">${duration}</span>
      </li>
    `;
  }).join('')}
</ul>
          </div>
        `).join('')}
      </div>
    `;
  } else {
    destinationContent.innerHTML = `<p classname="text-center text-red-500 text-xl">Destination not found!</p>`;
  }
});
