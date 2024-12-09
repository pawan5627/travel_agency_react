import { useEffect } from 'react';
import React, { useState } from 'react';
import '../Styles/style_destination.css';
const Filter = ({ destinations, onFilter }) => {

  const [filters, setFilters] = useState({
    country: 'all',
    priceRange: 0,
    startDate: '',
    endDate: '',
  });

  // Handle filter changes and trigger the filtering immediately
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    
    // Update the filters state
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Function to filter destinations based on selected filters
  const FilterDestinations = () => {
    let filteredDestinations = destinations;


    // Filter by country
    if (filters.country !== 'all') {
      filteredDestinations = filteredDestinations.filter(destination => destination.country === filters.country);
    }

    // Filter by price range
    filteredDestinations = filteredDestinations.filter(destination => destination.cost <= filters.priceRange);

    // Filter by date range
    if (filters.startDate && filters.endDate) {
      filteredDestinations = filteredDestinations.filter(destination => {
        const start = new Date(destination.startDate);
        const end = new Date(destination.endDate);
        const filterStart = new Date(filters.startDate);
        const filterEnd = new Date(filters.endDate);
        return (start >= filterStart && end <= filterEnd);
      });
    }

    // Pass filtered destinations to parent component
    onFilter(filteredDestinations);

  };

  // Use useEffect to run the filter logic immediately when filters change
  useEffect(() => {
    FilterDestinations();
  }, [filters]);


  return (
    <div className="filter-container">
      {/* Country Filter */}
      <div className="filter-group mb-4">
        <label htmlFor="country" className="block text-sm font-semibold">Country</label>
        <select
          id="country"
          name="country"
          value={filters.country}
          onChange={handleFilterChange}
          className="select-filter w-full p-3 mt-2 bg-gray-700 border border-gray-600 text-white rounded-lg"
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
        <label htmlFor="price-range" className="block text-sm font-semibold">Price Range</label>
        <div className="relative">
            <input type="range" id="price-range"  name="priceRange" min="0" value={filters.priceRange} max="1000"  onChange={handleFilterChange} className="w-full mt-2" />
            
            <div className="flex justify-between text-sm mt-2">
                <span id="min-price" className="text-white">$0</span>
                <span id="current-price" className="text-blue-400 font-semibold">${filters.priceRange}</span>
                <span id="max-price" className="text-white">$1000</span>
                
            </div>
      </div>
      </div>

      {/* Date Range Filter */}
      <div className="filter-group mb-4">
        <label htmlFor="date-start">Start Date</label>
        <input
          type="date"
          id="date-start"
          name="startDate"
          value={filters.startDate}
          onChange={handleFilterChange}
          className="date-filter w-full p-3 mt-2 bg-gray-700 border border-gray-600 text-white rounded-lg mb-2"
        />
      </div>
      <div className="filter-group">
        <label htmlFor="date-end">End Date</label>
        <input
          type="date"
          id="date-end"
          name="endDate"
          value={filters.endDate}
          onChange={handleFilterChange}
          className="date-filter w-full p-3 mt-2 bg-gray-700 border border-gray-600 text-white rounded-lg"
        />
      </div>

      
    </div>
  );
};

export default Filter;
