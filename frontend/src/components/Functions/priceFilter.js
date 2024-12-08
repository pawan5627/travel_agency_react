// Get the price range input and price display elements
const priceRange = document.getElementById('price-range');
const currentPrice = document.getElementById('current-price');

// Function to update the displayed price
function updatePrice() {
    const price = priceRange.value;
    currentPrice.textContent = `$${price}`;
}

// Initialize the current price display
updatePrice();

// Event listener to update price dynamically as the user moves the range slider
priceRange.addEventListener('input', updatePrice);
