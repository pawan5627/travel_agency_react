document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting

    // Reset all error messages
    document.getElementById("name-error").classList.add("hidden");
    document.getElementById("email-error").classList.add("hidden");
    document.getElementById("message-error").classList.add("hidden");
    document.getElementById("success-message").classList.add("hidden");
    document.getElementById("error-message").classList.add("hidden");

    let isValid = true;

    // Name Validation
    const name = document.getElementById("name").value.trim();
    if (name === "") {
      document.getElementById("name-error").classList.remove("hidden");
      isValid = false;
    }

    // Email Validation
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
      document.getElementById("email-error").classList.remove("hidden");
      isValid = false;
    }

    // Message Validation
    const message = document.getElementById("message").value.trim();
    if (message === "") {
      document.getElementById("message-error").classList.remove("hidden");
      isValid = false;
    }

    if (isValid) {
      // Show success message
      document.getElementById("success-message").classList.remove("hidden");
      document.getElementById("form-message").classList.remove("hidden");
    } else {
      // Show error message
      document.getElementById("error-message").classList.remove("hidden");
      document.getElementById("form-message").classList.remove("hidden");
    }
  });