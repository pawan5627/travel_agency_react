// load-partials.js
const navbarHTML = `
<!-- navbar.html -->
  <header class="sticky-navbar bg-gray-800 text-white py-4 px-8 shadow-lg">
    <div class="flex justify-between items-center">
      <img src="assets/Logo.png" alt="Logo" class="w-auto h-20 cursor-pointer" id="logo"> <!-- Logo Image -->
  <!-- Search Icon (Mobile) -->
  <div class="search-bar">
    <input type="text" id="search-input" placeholder="Search destination..." class="focus:outline-none">
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 16h6M10 12h6M10 8h6M3 20h18"></path>
      </svg>
    </button>    
  </div>
  <div id="search-results" class="absolute top-16 left-0 w-full bg-white border border-gray-300 shadow-lg mt-2 max-h-60 overflow-y-auto z-50 hidden">
      <!-- Results will appear here -->
  </div>

      <ul class="flex space-x-4 hidden md:flex">
        <li><a href="index.html" class="hover:text-gray-300">Home</a></li>
        <li class="relative">
            <a href="Destination.html" class="hover:text-gray-300">Destination</a>
            <ul id="destination-dropdown">
                <li><a href="Cities.html?destination=Lahore" class="block py-2 px-4">Lahore</a></li>
                <li><a href="Cities.html?destination=Islamabad" class="block py-2 px-4">Islamabad</a></li>
                <li><a href="Cities.html?destination=Gilgit" class="block py-2 px-4">Gilgit</a></li>
            </ul>
        </li>
        <li><a href="AboutUs.html" class="hover:text-gray-300">About Us</a></li>
        <li><a href="Contact-Us.html" class="hover:text-gray-300">Contact Us</a></li>
      </ul>
      <button id="menu-button" class="md:hidden text-2xl focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
    <div id="mobile-menu" class="md:hidden bg-gray-800 text-white p-4 hidden">
      <ul>
        <li><a href="index.html" class="block py-2">Home</a></li>
        <li><a href="Destination.html" class="block py-2">destination</a></li>
        <li><a href="AboutUs.html" class="block py-2">About Us</a></li>
        <li><a href="Contact-Us.html" class="block py-2">Contact Us</a></li>
      </ul>
    </div>
  </header>
  
`;
window.addEventListener("scroll", () => {
  const navbar = document.querySelector('.sticky-navbar');
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// Function to load the navbar
// Example: Directly define the HTML for the Navbar

// Insert the Navbar HTML into the DOM
document.getElementById('navbar-placeholder').innerHTML = navbarHTML;

// Example of adding the Footer HTML directly (you can repeat the same pattern for footer)
const footerHTML = `
<!-- footer.html -->
<footer class="secondary-footer">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center">
        <img src="assets/Logo.png" alt="Logo" class="footer-logo">
        <div class="footer-menu">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="Destination.html">Destination</a></li>
            <li><a href="AboutUs.html">About Us</a></li>
            <li><a href="Contact-Us.html">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-menu">
          <ul>
            <li><a href="Cities.html?destination=Lahore">Lahore</a></li>
            <li><a href="Cities.html?destination=Islamabad">Islamabad</a></li>
            <li><a href="Cities.html?destination=Gilgit">Gilgit</a></li>
          </ul>
        </div>
        <div class="footer-contact">
          <p>Contact Us: <strong>info@travelagency.com</strong></p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
    </div>
  </footer>
  
  <footer class="footer text-center text-white py-6">
    <p>&copy; Contour Travel Agency 2024</p>
    <p>Follow Us: 
      <a href="#" class="hover:text-blue-400 text-xl">| 
              <i class="fab fa-facebook-f"></i>
            </a>
            <!-- Instagram Icon -->
            <a href="#" class="hover:text-blue-400 text-xl">| 
              <i class="fab fa-instagram"></i>
            </a>
            <!-- Twitter Icon -->
            <a href="#" class="hover:text-blue-400 text-xl">| 
              <i class="fab fa-twitter"></i>
    </p>
  </footer>
`;

// Insert the Footer HTML into the DOM
document.getElementById('footer-placeholder').innerHTML = footerHTML;
