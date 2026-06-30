# Test Case 01 - User registers successfully with mandatory fields

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

# Test Case 02 - User registers successfully with mandatory and optional fields

# Precondition: Page must be opened

**Steps:**
1. Enter First Name
2. Enter Last Name
3. Enter valid Email
4. Enter correct Password
5. Enter the correct Password again
6. Choose Gender
7. Choose Date of Birth
6. Click Submit button

**Expected Result:**
- User profile is created successfully without validation error messages

# Test Case 02 - Password fields hide password correctly

# Precondition: Page must be opened

**Steps:**
1. Enter text in Password field
2. Enter text in Confirm Password field

**Expected Result:**
- Password fields hide the text with symbols

# Test Case 03 - Validation messages must be correct when a mandatory field is missing

# Precondition: Page must be opened

**Steps:**
1. Enter First Name
2. Click Submit
3. See validation [messageOne]
4. Enter Last Name
5. Click Submit
6. See validation [messageTwo]
5. Enter valid Email
6. Click Submit
7. See validation [messageThree]
5. Enter valid Password
6. Click Submit
7. See validation [messageFour]

**Expected Result:**
- The messages must be the following as shown in the table below: 
*messageOne* -> "Last Name must be filled out"
*messageOne* -> "Email must be filled out"
*messageThree* -> "Password must be filled out"
*messageFour* -> "Confirm Password must be filled out"

# Test Case 04 - Validation messages must be present and correct when passwords entered in the Password and Confirm Password fields are not identical

# Precondition: Page must be opened

**Steps:**
1. Enter First Name
2. Enter Last Name
3. Enter valid Email
4. Enter Password 
5. Enter identical password in Confirm Password field as the one in Password field
6. Click Submit

**Expected Result:**
- Validation error message appears "Passwords do not match"

# Test Case 05 - Validate that incorrect email formats are not accepted as valid

# Precondition: Page must be opened

**Steps:**
1. Enter First Name
2. Enter Last Name
3. Enter invalid Email
4. Enter Password 
5. Enter identical password in Confirm Password field as the one in Password field
6. Click Submit

**Expected Result:**
- Validation email error message appears
