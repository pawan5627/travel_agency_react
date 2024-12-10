import React from 'react';
import { useLocation } from 'react-router-dom';
import destinations from '../components/Functions/destinationData';
import '../components/Styles/style_destination.css'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
const DestinationDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const destinationName = new URLSearchParams(location.search).get('destination');
  const destination = destinations.find(
    (dest) => dest.name.toLowerCase() === destinationName.toLowerCase()
  );
  

  if (!destination) {
    return <p>Destination not found.</p>;
  }
 

  const handleBookNowClick = () => {
    // Pass the destination data to the booking page
    navigate('/booking', { state: { destination } });
  };
  return (
    <div className="destination-details bg-gray-50 p-8">
      {/* Destination Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-700">{destination.name}</h1>
        <p className="text-xl text-gray-500 mt-4">{destination.country}</p>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-4xl mx-auto mb-8">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-96 object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Description Section */}
      <div className="text-center mb-12">
        <p className="text-lg text-gray-700">{destination.description}</p>
        <div className="mt-6 text-xl font-semibold">
          <p><strong>Duration:</strong> {destination.days} days</p>
          <p><strong>Cost:</strong> ${destination.cost} per person</p>
        </div>
      </div>

      {/* Itinerary Section */}
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Itineraries</h2>
      <div className="itinerary-list grid md:grid-cols-2 gap-8">
        {destination.itineraries.map((itinerary, index) => (
          <div key={index} className="itinerary bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">{itinerary.title}</h3>
            <ul className="text-gray-700">
              {itinerary.activities.map((activity, idx) => (
                <li key={idx} className="mb-2">
                  {activity} - <span className="text-gray-500">{itinerary.activitiesDuration[idx]}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={handleBookNowClick}
          className="block w-full py-3 px-6 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DestinationDetails;
