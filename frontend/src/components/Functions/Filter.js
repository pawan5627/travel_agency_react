import React, { useState } from 'react';
import '../Styles/style_destination.css';
const Filter = ({ destinations, onFilter }) => {
  const [country, setCountry] = useState('all');
  const [priceRange, setPriceRange] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Function to handle filtering
  const filterDestinations = () => {
    let filteredDestinations = destinations;

    // Filter by country
    if (country !== 'all') {
      filteredDestinations = filteredDestinations.filter(destination => destination.country === country);
    }

    // Filter by price range
    filteredDestinations = filteredDestinations.filter(destination => destination.cost <= priceRange);

    // Filter by date range
    if (startDate && endDate) {
      filteredDestinations = filteredDestinations.filter(destination => {
        const start = new Date(destination.startDate);
        const end = new Date(destination.endDate);
        const filterStart = new Date(startDate);
        const filterEnd = new Date(endDate);
        return (start >= filterStart && end <= filterEnd);
      });
    }

    // Pass filtered destinations to parent component
    onFilter(filteredDestinations);
  };

  return (
    <div className="filter-container">
      {/* Country Filter */}
      <div className="filter-group mb-4">
        <label htmlFor="country" class="block text-sm font-semibold">Country</label>
        <select
          id="country"
          class="w-full p-3 mt-2 bg-gray-700 border border-gray-600 text-white rounded-lg"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="select-filter"
        >
          <option value="all">All</option>
          {/* Add options for countries dynamically or statically */}
          <option value="USA">USA</option>
          <option value="France">France</option>
          <option value="Pakistan">Pakistan</option>
          {/* Add other countries */}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="filter-group mb-8">
        <label htmlFor="price-range" class="block text-sm font-semibold">Price Range</label>
        <div class="relative">
            <input type="range" id="price-range" min="0" value={priceRange} max="1000"  onChange={(e) => setPriceRange(e.target.value)} class="w-full mt-2" />
            
            <div class="flex justify-between text-sm mt-2">
                <span id="min-price" class="text-white">$0</span>
                <span id="current-price" class="text-blue-400 font-semibold">${priceRange}</span>
                <span id="max-price" class="text-white">$1000</span>
                
            </div>
      </div>
      </div>

      {/* Date Range Filter */}
      <div className="filter-group mb-4">
        <label htmlFor="date-start">Start Date</label>
        <input
          type="date"
          id="date-start"

          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="date-filter w-full p-3 mt-2 bg-gray-700 border border-gray-600 text-white rounded-lg mb-2"
        />
      </div>
      <div className="filter-group">
        <label htmlFor="date-end">End Date</label>
        <input
          type="date"
          id="date-end"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="date-filter w-full p-3 mt-2 bg-gray-700 border border-gray-600 text-white rounded-lg"
        />
      </div>

      {/* Apply Filter Button */}
      <button onClick={filterDestinations} className="apply-filter-btn">
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
