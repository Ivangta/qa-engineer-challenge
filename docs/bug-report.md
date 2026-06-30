# Bug Report

## Bug 01 - Registration fails when all mandatory fields are populated, but Linkedin field is left empty

## Severity - High

## Priority - High

## Environment
- Browser: Chrome, Edge, Firefox

# Precondition: Page must be opened
**Steps:**
1. Enter First Name
2. Enter Last Name
3. Enter valid Email
4. Enter correct Password
5. Enter the correct Password again
6. Click Submit button

**Expected Result:**
- User profile is created successfully without validation error messages

**Actual Result:**
- Validation error message is shown "LinkedIn must be filled out"

## Bug 02 - Confirm Password field shows password when entering it

## Severity - High

## Priority - High

## Environment
- Browser: Chrome, Edge, Firefox

# Precondition: Page must be opened
**Steps:**
1. Enter text in Password field
2. Enter text in Confirm Password field

**Expected Result:**
- Password fields hide the text with symbols

**Actual Result:**
- Confirm Password field shows password when entering it and does not show symbols as in Password field

## Bug 03 - Address field and Date of Birth field are named incorrectly with a spelling error

## Severity - Low

## Priority - Low

## Environment
- Browser: Chrome, Edge, Firefox

**Steps:**
1. Open page https://qa-assessment.pages.dev/

**Expected Result:**
- Date of Birth field must be named as: "Date of Birth (optional):"
- Address field must be named as: "Address (optional):"

**Actual Result:**
- Date of Birth field is named as: "Date ofBirth (optional):"
- Address field is named as: "Address (optioal):"

## Bug 04 - Validation error message is displayed for previous required field, instead of the current missing field

## Severity - Medium

## Priority - High

## Environment
- Browser: Chrome, Edge, Firefox

# Precondition: Page must be opened
**Steps:**
1. Enter First Name
2. Click Submit
3. See validation [messageOne]
4. Enter Last Name
5. Enter valid Email
6. Click Submit
7. See validation [messageTwo]

**Expected Result:**
- The messages must be the following as shown in the table below: 
*messageOne* -> "Last Name must be filled out"
*messageTwo* -> "Password must be filled out"

**Actual Result:**
- The messages are currently the following as shown in the table below: 
*messageOne* -> "First Name must be filled out"
*messageTwo* -> "Confirm password must be filled out"

## Bug 05 - Invalid email format is accepted as valid

## Severity - Low

## Priority - Low

## Environment
- Browser: Chrome, Edge, Firefox

# Precondition: Page must be opened
**Steps:**
1. Enter First Name
2. Enter Last Name
3. Enter invalid Email "john..smith@example.com"
4. Enter correct Password
5. Enter the correct Password again
6. Click Submit button

**Expected Result:**
- Invalid email format validation error message appears, because of the two dots "." present in the text before the "@"

**Actual Result:**
- Validation error message does not appear and registration is successful