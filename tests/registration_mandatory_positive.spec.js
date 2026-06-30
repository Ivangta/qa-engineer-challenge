const {test, expect} = require('@playwright/test');
const {RegistrationPage} = require('../pages/RegistrationPage');
const {registrationDataMandatory} = require('../test-data/registrationData');

test('User registers successfully', async ({ page }) => 
    {
        let dialogError = false;
        let dialogMessage = '';

        page.on('dialog', async dialog => {
            dialogError = true;
            dialogMessage = dialog.message();
            console.log(`Unexpected alert: ${dialogMessage}`);
            await dialog.accept();
        });

        const registrationPage = new RegistrationPage(page);

        await registrationPage.navigate();
        await registrationPage.fillRegistrationFormMandatory(registrationDataMandatory);
        await registrationPage.submit();

        //No alert or validation error should be present
        expect(dialogError,`Unexpected alert appeared: "${dialogMessage}"`).toBeFalsy();
    });

