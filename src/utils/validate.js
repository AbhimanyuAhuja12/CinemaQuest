// export const checkValidData = (email, password, phoneNo, name, isSignInForm) => {
//     const errors = [];

//     // Email Validation
//     const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
//     if (!isEmailValid) {
//         errors.push("Invalid Email ID. Example: user@example.com");
//     }

//     // Password Validation
//     const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
//     if (!isPasswordValid) {
//         errors.push("Invalid Password. Must contain at least 8 characters, including at least one letter and one number.");
//     }

//     // Only check phone number if it's a sign-up form
//     if (!isSignInForm) {
//         const isPhoneNumberValid = /^(\+?\d{1,4}[\s.-]?)?(\(?\d{2,5}\)?[\s.-]?)?[\d\s.-]{5,15}$/.test(phoneNo);
//         if (!isPhoneNumberValid) {
//             errors.push("Invalid Phone Number. Example formats: +1234567890, 123-456-7890.");
//         }
//     }

//     // Only check name if it's a sign-up form
//     if (!isSignInForm) {
//         const isNameValid = /^[a-zA-Z\s]{2,}$/.test(name);
//         if (!isNameValid) {
//             errors.push("Invalid Name. Ensure it's at least two words with only letters.");
//         }
//     }

//     return errors.length > 0 ? errors.join('\n') : null;
// };


export const checkValidData = (email, password) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
      email
    );
    const isPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";
  
    return null;
  };
