# QA Engineer Challenge

Automation project built with Playwright.

## Assumptions
#Registration
- The requirements do not specify if a success message or any message should appear after successful registration. For this reason, I note that upon successful registration, no message appears. This has not been reported as a bug, but must be mentioned as a potential issue to the Business Analyst that entered the criteria.
- Email is accepted as valid with interval in the beginning, for example " ray@abv.bg". I do not have access to the ending result of the successful registration. It must be checked that the email is registered for the user without the interval in the beginning. 