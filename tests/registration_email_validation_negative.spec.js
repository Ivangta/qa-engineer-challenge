const {test, expect} = require('@playwright/test');
const {RegistrationPage} = require('../pages/RegistrationPage');
const {validationEmailDataMandatory} = require('../test-data/validationData');

test('Validate that incorrect email formats are not accepted as valid', async ({ page }) => 
    {
        const registrationPage = new RegistrationPage(page);

        await registrationPage.navigate();
        await registrationPage.fillRegistrationFormMandatory(validationEmailDataMandatory);
        await registrationPage.submit();

        const validationMessage = await registrationPage.getEmailValidationMessage();

        expect(validationMessage).not.toBe('');
    });