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

module.exports = {generateRandomString, generateRandomEmail};
