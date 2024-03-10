import { faker } from '@faker-js/faker';

describe("Contact", () => {
    it('Fill all the inputs fields, submit and assert the success message', async () => {
        await browser.url("/contact");
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/contact/');
        
        // Corrected Faker method usage
        await $(`.contact-name input`).setValue(faker.name.fullName()); // Correct method for full name
        await $(`.contact-email input`).setValue(faker.internet.email()); // Correct as is
        //await $(`.contact-phone input`).setValue(String(faker.phone.number('##########'))); // Correct method for phone number
        //await $(`.contact-phone input`).setValue(faker.phone.number('##########') + ''); // Correct method for phone number
        //await $(`.contact-phone input`).setValue(`${faker.phone.number('##########')}`); // Correct method for phone number
        await $(`.contact-phone input`).setValue(faker.phone.number('##########')); // Correct method for phone number
        await $(`.contact-message textarea`).addValue(faker.lorem.paragraphs(2)); // Correct as is
        browser.pause(1000)
        await $(`button[type=submit]`).click();
        
        // Wait for the success message
        let successAlert = await $(`.everest-forms-notice--success`);
        
        // Using getText() to retrieve the alert text
        let alertText = await successAlert.getText(); 
        console.log("Alert text: " + alertText);

        // Assert the success message
        await expect(successAlert).toHaveTextContaining("Thanks for contacting us! We will be in touch with you shortly");
    });
});
