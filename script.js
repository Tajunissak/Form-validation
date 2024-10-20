const nameInput = document.getElementById("name");
const emailInput = document.querySelector(".mail");
const passwordInput = document.querySelector(".pass");

const nameError = document.getElementById("error");
const emailError = document.getElementById("emailerror");
const passwordError = document.getElementById("passerror");

function validateName() {
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name cannot be empty";
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
}

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validatePassword() {
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}

// Handle form submission
document.querySelector(".Reg-forms").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent actual form submission

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (isNameValid && isEmailValid && isPasswordValid) {
    alert("Form submitted successfully!");
    // Here, you can submit the form or handle further logic
  } else {
    alert("Please correct the errors before submitting.");
  }
});
