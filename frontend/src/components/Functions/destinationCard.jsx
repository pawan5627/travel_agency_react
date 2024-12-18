import React from 'react';
import { Link } from "react-router-dom";
const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{destination.name}</h3>
        <p className="text-sm text-gray-600">{destination.days} days trip</p>
        <p className="text-sm text-gray-600">Start Date: {destination.startDate}</p>
        <p className="text-sm text-gray-600">End Date: {destination.endDate}</p>
        <p className="text-lg font-bold text-gray-900">Cost: ${destination.cost} / person</p>
        <p className="text-sm text-gray-700 mt-2">{destination.description}</p>
        <Link 
          to={`/destination-details?destination=${destination.name.toLowerCase()}`} 
          className="block text-center mt-4 py-2 px-4 bg-blue-600 text-white rounded-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
