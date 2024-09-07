export const checkValidData = (email, password, phoneNo, name, isSignInForm) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  // Only validate name and phone number if it's the sign-up form
  if (!isSignInForm) {
    const isNameValid = /^[A-Za-z\s]{2,}$/.test(name); // At least 2 characters, alphabets and spaces only
    const isPhoneNoValid = /^\d{10}$/.test(phoneNo); // Exactly 10 digits

    if (!isNameValid) return "Name is not valid";
    if (!isPhoneNoValid) return "Phone number is not valid";
  }

  return null;
};
