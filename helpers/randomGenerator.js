function generateRandomString(length = 10) {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
}

function generateRandomEmail(){
    return `${generateRandomString(10)}@test.com`;
}

function generateRandomDateOfBirth(){
    const start = new Date(1950, 0, 1);
    const end = new Date(2005, 11, 31);

    const randomDate = new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime()));

    const year = randomDate.getFullYear();
    const month = String(randomDate.getMonth() + 1).padStart(2, '0');
    const day = String(randomDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`; // yyyy-mm-dd
}

function generateRandomPhoneNumber(){
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
}

function generateRandomLinkedIn(){
    const random = Math.random().toString(36).substring(2, 10);
    return `https://www.linkedin.com/in/${random}`;
}

function generateRandomGitHub(){
    const random = Math.random().toString(36).substring(2, 10);
    return `https://github.com/${random}`;
}

module.exports = 
{
    generateRandomString, 
    generateRandomEmail, 
    generateRandomDateOfBirth,
    generateRandomPhoneNumber,
    generateRandomLinkedIn,
    generateRandomGitHub
};
