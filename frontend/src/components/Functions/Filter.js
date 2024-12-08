import React, { useState } from 'react';

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
      <div className="filter-group">
        <label htmlFor="country">Country</label>
        <select
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="select-filter"
        >
          <option value="all">All</option>
          {/* Add options for countries dynamically or statically */}
          <option value="USA">USA</option>
          <option value="France">France</option>
          {/* Add other countries */}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="filter-group">
        <label htmlFor="price-range">Price Range</label>
        <input
          type="range"
          id="price-range"
          value={priceRange}
          min="0"
          max="10000"
          onChange={(e) => setPriceRange(e.target.value)}
          className="range-filter"
        />
        <span id="current-price">${priceRange}</span>
      </div>

      {/* Date Range Filter */}
      <div className="filter-group">
        <label htmlFor="date-start">Start Date</label>
        <input
          type="date"
          id="date-start"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="date-filter"
        />
      </div>
      <div className="filter-group">
        <label htmlFor="date-end">End Date</label>
        <input
          type="date"
          id="date-end"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="date-filter"
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
