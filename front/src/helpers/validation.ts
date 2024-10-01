// Validamos el campo name
export const validateName = (name: string) => {
  if (name.length < 3) {
    return "Must be at least 3 characters";
  }
  if (name.length > 25) {
    return "Must be no more than 25 characters";
  }
  if (!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]+$/.test(name)) {
    return "Must contain only letters, spaces, and accented characters";
  }
  return "";
};

// Validamos el campo address
export const validateAddress = (address: string) => {
  if (address.length < 3) {
    return "Must be at least 3 characters";
  }
  if (!/^[a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ\s,.'-]+$/.test(address)) {
    return "Invalid characters in address";
  }
  return "";
};

// Validamos el campo email
export const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Must be a valid email";

// Validamos el campo phone
export const validatePhone = (phone: string) =>
  /^\d{1,20}$/.test(phone) ? "" : "Must be a valid phone number";

// Validamos el campo password
export const validatePassword = (password: string) => {
  if (password.length < 5) {
    return "Must be at least 5 characters";
  }
  if (password.length > 25) {
    return "Must be no more than 25 characters";
  }
  if (!/^[a-zA-Z0-9ñÑ]+$/.test(password)) {
    return "Must contain only letters and numbers";
  }
  return "";
};

// Validamos el campo password2
export const validatePassword2 = (password: string, password2: string) =>
  password2 !== password ? "Passwords do not match" : "";
