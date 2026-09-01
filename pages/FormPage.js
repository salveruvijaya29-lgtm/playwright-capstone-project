export class FormPage {
    constructor(page) {
        this.page = page;
        this.contactName = page.locator('#validationCustom01');
        this.contactNumber = page.locator('[name="contactnumber"]');
        this.pickupDate = page.locator('[name="pickupdate"]');
        this.payment = page.locator('#validationCustom04');
        this.submitButton = page.locator('button[type="submit"]');
        this.validFeedback = page.locator('.valid-feedback').first();
    }

    async goto() {
        await this.page.goto('https://practice.expandtesting.com/form-validation');
    }

    async fillForm({ contactName, contactNumber, pickupDate, payment }) {
        await this.contactName.fill(contactName);
        await this.contactNumber.fill(contactNumber);
        await this.pickupDate.fill(pickupDate);
        await this.payment.selectOption(payment);
    }

    async submit() {
        await this.submitButton.click();
    }
}
