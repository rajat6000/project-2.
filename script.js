 const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const submitBtn = document.getElementById('submit-btn');

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  // You can customize the password validation rules here
  return password.length >= 8;
}

function validateForm() {
  let isValid = true;

  if (!validateEmail(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  if (!validatePassword(passwordInput.value)) {
    passwordError.textContent = 'Password must be at least 8 characters long';
    isValid = false;
  } else {
    passwordError.textContent = '';
  }

  return isValid;
}

submitBtn.addEventListener('click', (event) => {
  if (!validateForm()) {
    event.preventDefault();
  }
});
