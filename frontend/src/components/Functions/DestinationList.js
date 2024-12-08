import React from 'react';
import DestinationCard from './destinationCard';

const DestinationsList = ({ destinations }) => {
  return (
    <div className="destinations-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {destinations.length > 0 ? (
        destinations.map((destination, index) => (
          <DestinationCard key={index} destination={destination} />
        ))
      ) : (
        <p className="text-center text-gray-500">No destinations found.</p>
      )}
    </div>
  );
};

export default DestinationsList;
