const {test, expect} = require('@playwright/test');
const {RegistrationPage} = require('../pages/RegistrationPage');
const {registrationDataNotIdenticalPasswords} = require('../test-data/registrationData');

test('Validation messages must be present and correct when passwords entered in the Password and Confirm Password fields are not identical', async ({page})=>
{
        let dialogMessage = '';

        page.on('dialog', async dialog => {
            dialogMessage = dialog.message();
            console.log(`Unexpected alert: ${dialogMessage}`);
            await dialog.accept();
        });

        const registrationPage = new RegistrationPage(page);

        await registrationPage.navigate();
        await registrationPage.fillRegistrationFormMandatory(registrationDataNotIdenticalPasswords);
        await registrationPage.submit();

        //Validation error for identical passwords
        expect(dialogMessage).toContain('Passwords do not match');
});