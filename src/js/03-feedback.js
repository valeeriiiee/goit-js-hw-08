import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

// Function to save form state to localStorage
const saveFormState = throttle(() => {
  const formData = {
    email: form.email.value,
    message: form.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

// Function to load form state from localStorage
const loadFormState = () => {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const formData = JSON.parse(storedData);
    form.email.value = formData.email;
    form.message.value = formData.message;
  }
};

// Function to handle form submission
const handleSubmit = (event) => {
  event.preventDefault();
  
  // Retrieve form data
  const formData = {
    email: form.email.value,
    message: form.message.value,
  };

  // Clear localStorage and form fields
  localStorage.removeItem('feedback-form-state');
  form.reset();

  // Display form data in console
  console.log('Form data submitted:', formData);
};

// Event listeners
form.addEventListener('input', saveFormState);
window.addEventListener('DOMContentLoaded', loadFormState);
form.addEventListener('submit', handleSubmit);

