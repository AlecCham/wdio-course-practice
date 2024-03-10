import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Convert the URL to a path suitable for the operating system
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('Upload files', () => {
    it('Upload to visible button and file submit option', async () => {
        try {
            await browser.url("http://the-internet.herokuapp.com/upload");

            // Store test file path
            const filePath = join(__dirname, '../data/home.png');

            // Assuming 'input[type="file"]' is the selector for the file input field
            const fileInput = await browser.$('input[type="file"]');
            await fileInput.setValue(filePath);
            //await browser.pause(1000); // Consider using explicit waits

            // Assuming there's a submit button for the form
            const submitButton = await $('#file-submit');
            //await browser.pause(1000); // Consider using explicit waits
            await submitButton.click();
            //await browser.pause(1000); // Consider using explicit waits
            await $(`#uploaded-files`).waitForDisplayed();
            //let message = await $(`h3`);
            await expect($(`h3`)).toHaveText("File Uploaded!");
            console.log(await "Success")
            //await browser.pause(1000); // Consider using explicit waits
            // Add assertions here to verify upload success
        } catch (error) {
            console.error('Test failed Success', error);
        }
    });
    it('Upload to hidden ', async () => {
        await browser.url('/cart/')
        // Store test file path
        const filePath = join(__dirname, '../data/home.png');
        //override classs using js
        await browser.execute("document.querySelector('#upfile_1').className = '';")
        // Assuming 'input[type="file"]' is the selector for the file input field
        const fileInput = await $('#upfile_1');
        await fileInput.setValue(filePath);
        await browser.pause(1000); // Consider using explicit waits
        const submitButton = await $('#upload_1');
        await submitButton.click();
        await browser.pause(1000); // Consider using explicit waits
        await $(`#wfu_messageblock_header_1_label_1`).waitForDisplayed();
        await expect( $(`#wfu_messageblock_header_1_label_1`)).toHaveTextContaining("uploaded successfully");
        console.log(await "Success")
    })
});
