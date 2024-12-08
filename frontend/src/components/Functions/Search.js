// Functions/Search.js
import { useState } from 'react';

const useSearch = (destinations) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleSearchInput = (searchTerm) => {
    if (searchTerm.trim() === "") {
      setIsDropdownVisible(false);
      setSearchResults([]);
      return;
    }
    

    const filteredDestinations = destinations.filter(destination =>
      destination.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredDestinations);
    setIsDropdownVisible(filteredDestinations.length > 0);
  };

  return { searchResults, isDropdownVisible, handleSearchInput };
};

export default useSearch;
