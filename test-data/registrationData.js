const { generateRandomEmail,
        generateRandomDateOfBirth,
        generateRandomPhoneNumber,       
        generateRandomLinkedIn,
        generateRandomGitHub
 } = require('../helpers/randomGenerator');

exports.registrationDataMandatory = {
    firstName: "John",
    lastName: "Adams",
    email: generateRandomEmail(),
    password: "P@ssw0rd",
    confirmPassword: "P@ssw0rd"
};

exports.registrationDataAll = {
    firstName: "John",
    lastName: "Adams",
    email: generateRandomEmail(),
    password: "Dato123!",
    confirmPassword: "Dato123!",
    
    gender: 'female',
    dateOfBirth: generateRandomDateOfBirth(),
    phoneNumber: generateRandomPhoneNumber(),
    address: "Burgas, Bulgaria",
    linkedIn: generateRandomLinkedIn(),
    gitHub: generateRandomGitHub()
};

exports.registrationDataNotIdenticalPasswords = {
    firstName: "John",
    lastName: "Adams",
    email: generateRandomEmail(),
    password: "P@ssw0rd123",
    confirmPassword: "P@ssw0rd1234"
};