const {test, expect} = require('@playwright/test');
const {RegistrationPage} = require('../pages/RegistrationPage');

test('Validation message must be correct when a mandatory First Name field is missing', async ({ page }) => 
    {
        const registrationPage = new RegistrationPage(page);

        await registrationPage.navigate();

        let message = await registrationPage.submitAndReceiveDialogMessage();

        expect(message).toBe('First name must be filled out');
    });

//Note on the test: 
//The application uses native JavaScript alert() dialogs for validation. 
//The message appears and then you have to click "OK" button to accept it.
// However, the browser remains blocked on click, resulting in a timeout before the dialog can be processed.
// In a similar way, tests for the remaining validation error messages fail for the same reason. 
// If the issue can be resolved, multiple such tests can be used for the remaining mandatory fields.