export const checkValidData = (email, password, phoneNo, name) => {
    const errors = [];

    const isEmailValid = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    if (!isEmailValid) errors.push("Invalid Email ID. Example: user@example.com");

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (!isPasswordValid) {
        errors.push("Invalid Password. Must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.");
    }

    const isPhoneNumberValid = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(phoneNo);
    if (!isPhoneNumberValid) {
        errors.push("Invalid Phone Number. Example formats: +1234567890, 123-456-7890.");
    }

    const isNameValid = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/.test(name);
    if (!isNameValid) {
        errors.push("Invalid Name. Ensure it's at least two words with only letters.");
    }

    return errors.length > 0 ? errors.join('\n') : null;
};
