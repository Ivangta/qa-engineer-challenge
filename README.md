# QA Engineer Challenge

Automation project built with Playwright and JavaScript using the Page Object Model (POM).

## Project Structure
pages/ ->       Page Objects
tests/ ->       Test Suites
helpers/ ->     Helper methods for random and other generation
test-data/ ->   Static test data
/docs ->        Test cases and bug reports

## Test Coverage
Implemented automated tests include: 
- Positive registration
- Mandatory field validation
- Email validation
- Password validation

## Assumptions
#Registration
- The requirements do not specify if a success message or any message should appear after successful registration. For this reason, I note that upon successful registration, no message appears. This has not been reported as a bug, but must be mentioned as a potential issue to the Business Analyst that entered the criteria.
- Email is accepted as valid with interval in the beginning, for example " ray@abv.bg". I do not have access to the ending result of the successful registration. It must be checked that the email is registered for the user without the interval in the beginning. 

## Notes
- Mandatory field validation is implemented using native browser JavaScript dialogs (`alert()`). During automation, the application consistently blocks on the error message, preventing from testing the scenario. 

## How to Run

Run all tests:

```bash
npx playwright test
```

Run a single test:

```bash
npx playwright test tests/registration_email_validation_negative.spec.js
```

Run in headed mode:

```bash
npx playwright test --headed
```

Run in debug mode:

```bash
npx playwright test --debug
```