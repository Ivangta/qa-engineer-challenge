const {test, expect} = require('@playwright/test');
const {RegistrationPage} = require('../pages/RegistrationPage');

test('Password fields hide password correctly', async ({page})=>
{
    const registrationPage = new RegistrationPage(page);

    await registrationPage.navigate();

    await expect(registrationPage.password).toHaveAttribute('type', 'password');

    await expect(registrationPage.confirmPassword).toHaveAttribute('type', 'password');
});