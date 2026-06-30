const { generateRandomEmail } = require('../helpers/randomGenerator');

exports.registrationData = {
    firstName: "John",
    lastName: "Adams",
    email: generateRandomEmail(),
    password: "Dato123!",
    confirmPassword: "Dato123!"
};