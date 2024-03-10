import homePage from "../pages/home-page.js";
import allureReporter from '@wdio/allure-reporter'

describe('Navigation Menu', () => {
    before(() => {
        // Adding feature and severity here ensures they're associated with the suite
        allureReporter.addFeature("Navigation present");
        allureReporter.addSeverity("critical");
    });

    it('Get the text of all menu items & assert them', async () => {
        await homePage.open();
        const expectedLinks = homePage.navComp.expectedMenuStrings;
        browser.waitUntil(() => {
          return browser.getTitle() === 'Expected Title';
        }, 5000, 'Expected title did not appear in 5 seconds');
       
        const actualLinks = await [];        
        const navLinks = await homePage.navComp.listNavMenu;

        for (const link of navLinks) {
            actualLinks.push(await link.getText());
        }
        await expect(expectedLinks).toEqual(actualLinks);
    });
});
