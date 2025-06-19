// script.js

// Initialize AOS library
AOS.init({
  duration: 1000,
  once: true,
});

// Example form handler
function handleForm(e) {
  e.preventDefault();
  alert("Thank you! Your message has been received.");
  e.target.reset(); // clear form fields
}


