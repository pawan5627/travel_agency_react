import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const BookingForm = () => {
  const location = useLocation();
  const { destination } = location.state;  // Destructure the destination data from the state

  // State variables to manage form data
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [notes, setNotes] = useState("");
  const [itinerary, setItinerary] = useState(destination.itineraries[0]?.title || "");
  const [dateRange, setDateRange] = useState("");
  const [totalPrice, setTotalPrice] = useState(destination.cost);

  // For popup and error handling
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle booking form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields before submission
    if (!fullName || !dob || !email || !phone || !dateRange) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!validatePhone(phone)) {
      setErrorMessage("Please enter a valid phone number.");
      return;
    }

    // If validation is passed, show success popup
    setErrorMessage("");
    setShowPopup(true);

    // You can add logic here to submit form data to an API or process the booking.
  };

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate phone format (basic)
  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  // Update total price based on the number of adults
  const updateTotalPrice = () => {
    setTotalPrice(adults * destination.cost);
  };

  return (
    <div className="booking-form container mx-auto my-12 p-8 bg-white shadow-xl rounded-xl">
      <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-6">
        Book Your Trip to {destination.name}
      </h2>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-700">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Booking Successful!</h3>
            <p className="text-lg text-gray-700">Thank you for booking your trip to {destination.name}. A confirmation email has been sent to you.</p>
            <button
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div className="text-red-500 text-center mb-6">
          <p>{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name & Date of Birth */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="full-name" className="block text-lg font-medium text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="full-name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full border-2 border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="dob" className="block text-lg font-medium text-gray-700">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
              className="w-full border-2 border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border-2 border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full border-2 border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Select Itinerary */}
        <div>
          <label htmlFor="itinerary" className="block text-lg font-medium text-gray-700">
            Select Itinerary <span className="text-red-500">*</span>
          </label>
          <select
            id="itinerary"
            value={itinerary}
            onChange={(e) => setItinerary(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            {destination.itineraries.map((it, idx) => (
              <option key={idx} value={it.title}>
                {it.title}
              </option>
            ))}
          </select>
        </div>

        {/* Select Date Range */}
        <div>
          <label htmlFor="date-range" className="block text-lg font-medium text-gray-700">
            Select Date Range <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="date-range"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            placeholder="Enter Date Range"
            className="w-full border-2 border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* No. of Adults, Children, Infants */}
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="adults" className="block text-lg font-medium text-gray-700">
              No. of Adults <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="adults"
              value={adults}
              onChange={(e) => {
                setAdults(e.target.value);
                updateTotalPrice();
              }}
              min="1"
              required
              className="w-full border-2 border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="children" className="block text-lg font-medium text-gray-700">
              No. of Children
            </label>
            <input
              type="number"
              id="children"
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              min="0"
              className="w-full border-2 border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="infants" className="block text-lg font-medium text-gray-700">
              No. of Infants
            </label>
            <input
              type="number"
              id="infants"
              value={infants}
              onChange={(e) => setInfants(e.target.value)}
              min="0"
              className="w-full border-2 border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Notes */}
        <div>
          <label htmlFor="notes" className="block text-lg font-medium text-gray-700">
            Any Notes
          </label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
        </div>

        {/* Total Price */}
        <div>
          <label htmlFor="total-price" className="block text-lg font-medium text-gray-700">
            Total Price
          </label>
          <input
            type="text"
            id="total-price"
            value={`$${totalPrice}`}
            disabled
            className="w-full border-2 border-gray-300 rounded-lg p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center mt-8">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
