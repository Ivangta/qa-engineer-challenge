const {test, expect} = require('@playwright/test');

test('User registers successfully', async ({ page }) => 
    {
        await page.goto('https://qa-assessment.pages.dev/');
    });

