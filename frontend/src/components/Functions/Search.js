// Get references to the elements
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

// Function to handle input in the search bar
searchInput.addEventListener("input", function() {
  const searchTerm = searchInput.value.toLowerCase();
  let foundResults = false;

  // Clear previous search results
  searchResults.innerHTML = '';

  // Show the search results dropdown if there's input
  if (searchTerm !== "") {
    searchResults.style.display = "block";  // Show the dropdown
  } else {
    searchResults.style.display = "none";   // Hide the dropdown when input is empty
  }


  if (destinations.length > 0) {
    destinations.forEach(destination => {
      // Check if the destination has a data-name attribute
      const destinationName = destination.name;

      // Proceed only if data-name is valid
      if (destinationName) {
        const lowerCaseDestinationName = destinationName.toLowerCase();

        // If the destination matches the search term
        if (lowerCaseDestinationName.includes(searchTerm)) {
          foundResults = true;

          // Create a new list item for the matched destination
          const resultItem = document.createElement("li");
          resultItem.textContent = destinationName;
          resultItem.classList.add("search-result-item", "p-2", "cursor-pointer", "hover:bg-gray-200");

          // Redirect to the destination page when clicked
          resultItem.addEventListener("click", function() {
            window.location.href = destination.link;
          });

          // Append the result item to the search results container
          searchResults.appendChild(resultItem);
        }
      }
    });
  }

  // If no results are found, show a 'No results found' message
  if (!foundResults && searchTerm !== "") {
    const noResults = document.createElement("li");
    noResults.textContent = "No destinations found.";
    noResults.classList.add("p-2", "text-gray-500");
    searchResults.appendChild(noResults);
  }
});

// Optional: Close the search results when clicking outside the search bar
document.addEventListener("click", function(event) {
  if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
    searchResults.innerHTML = ''; // Close the dropdown
    searchResults.style.display = "none"; // Hide the search results
  }
});
