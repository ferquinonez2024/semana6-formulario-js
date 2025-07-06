const form = document.getElementById("registroForm");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const edad = document.getElementById("edad");
const submitBtn = document.getElementById("submitBtn");

const nombreError = document.getElementById("nombreError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const edadError = document.getElementById("edadError");

function validarNombre() {
  if (nombre.value.trim().length >= 3) {
    nombreError.textContent = "";
    return true;
  } else {
    nombreError.textContent = "El nombre debe tener al menos 3 caracteres.";
    return false;
  }
}

function validarEmail() {
  const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (regex.test(email.value)) {
    emailError.textContent = "";
    return true;
  } else {
    emailError.textContent = "Correo no válido.";
    return false;
  }
}

function validarPassword() {
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
  if (password.value.length >= 8 && regex.test(password.value)) {
    passwordError.textContent = "";
    return true;
  } else {
    passwordError.textContent =
      "La contraseña debe tener mínimo 8 caracteres, un número y un carácter especial.";
    return false;
  }
}

function validarConfirmPassword() {
  if (confirmPassword.value === password.value && confirmPassword.value !== "") {
    confirmPasswordError.textContent = "";
    return true;
  } else {
    confirmPasswordError.textContent = "Las contraseñas no coinciden.";
    return false;
  }
}

function validarEdad() {
  if (parseInt(edad.value) >= 18) {
    edadError.textContent = "";
    return true;
  } else {
    edadError.textContent = "Debes tener al menos 18 años.";
    return false;
  }
}

function validarFormulario() {
  const validaciones = [
    validarNombre(),
    validarEmail(),
    validarPassword(),
    validarConfirmPassword(),
    validarEdad(),
  ];
  submitBtn.disabled = !validaciones.every(Boolean);
}

[nombre, email, password, confirmPassword, edad].forEach((input) => {
  input.addEventListener("input", validarFormulario);
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Formulario enviado con éxito 🎉");
  form.reset();
  submitBtn.disabled = true;
});
