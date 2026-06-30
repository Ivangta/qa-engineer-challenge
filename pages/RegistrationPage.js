class RegistrationPage{
    constructor(page) {
        this.page = page;

        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.email = page.locator('#email');
        this.password = page.locator('#password');
        this.confirmPassword = page.locator('#confirmPassword');

        this.genderMale = page.locator('#male');
        this.genderFemale = page.locator('#female');
        this.genderPreferNotToSay = page.locator('#preferNotToSay');

        this.dateOfBirth = page.locator('#dob');
        this.phoneNumber = page.locator('#phone');
        this.address = page.locator('#address');
        this.linkedin = page.locator('#linkedIn');
        this.github = page.locator('#github');

        this.submitButton = page.locator('input[type="submit"]');
    }

    async navigate() {
        await this.page.goto("https://qa-assessment.pages.dev/");
    }

    async fillRegistrationFormMandatory(data){
        await this.firstName.fill(data.firstName);
        await this.lastName.fill(data.lastName);
        await this.email.fill(data.email);
        await this.password.fill(data.password);
        await this.confirmPassword.fill(data.confirmPassword);
    }

        async fillRegistrationFormAll(data){
        await this.fillRegistrationFormMandatory(data);

        switch (data.gender) {
            case 'male':
                await this.genderMale.check();
                break;
        
            case 'female':
                await this.genderFemale.check();
                break;

            case 'preferNotToSay':
                await this.genderPreferNotToSay.check();
                break;
        }
        await this.dateOfBirth.fill(data.dateOfBirth);
        await this.phoneNumber.fill(data.phoneNumber);
        await this.address.fill(data.address);
        await this.linkedin.fill(data.linkedIn);
        await this.github.fill(data.gitHub);
    }

    async submit() {
        await this.submitButton.click();
    }
}

module.exports = {RegistrationPage};