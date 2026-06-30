class RegistrationPage{
    constructor(page) {
        this.page = page;

        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.email = page.locator('#email');
        this.password = page.locator('#password');
        this.confirmPassword = page.locator('#confirmPassword');

        this.submitButton = page.locator('input[type="submit"]');
    }

    async navigate() {
        await this.page.goto("https://qa-assessment.pages.dev/");
    }

    async fillRegistrationForm(data){
        await this.firstName.fill(data.firstName);
        await this.lastName.fill(data.lastName);
        await this.email.fill(data.email);
        await this.password.fill(data.password);
        await this.confirmPassword.fill(data.password);
    }

    async submit() {
        await this.submitButton.click();
    }
}

module.exports = {RegistrationPage};