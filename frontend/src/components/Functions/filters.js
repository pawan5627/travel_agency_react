
  
  // Filter logic
  const filterDestinations = () => {
    const countryFilter = document.getElementById('country').value;
    const priceRange = document.getElementById('price-range').value;
    const startDate = document.getElementById('date-start').value;
    const endDate = document.getElementById('date-end').value;
  
    let filteredDestinations = destinations;
  
    // Filter by country
    if (countryFilter !== 'all') {
      filteredDestinations = filteredDestinations.filter(destination => destination.country === countryFilter);
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
  
    // Render the filtered destinations
    renderDestinations(filteredDestinations);
  };
  
  // Add event listeners to filters
  document.getElementById('country').addEventListener('change', filterDestinations);
  document.getElementById('price-range').addEventListener('input', filterDestinations);
  document.getElementById('date-start').addEventListener('change', filterDestinations);
  document.getElementById('date-end').addEventListener('change', filterDestinations);
  
  