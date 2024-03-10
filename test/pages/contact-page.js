class Contact {
    async open(path = '') {
        await browser.url(`https://practice.sdetunicorns.com/contact`);
    }

}


const contact = new Contact();
export default contact;