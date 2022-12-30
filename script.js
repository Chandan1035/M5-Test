

const form = document.getElementById('contact-form');
const successAlert = document.getElementById('success-alert');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  successAlert.classList.remove('hidden');
});
