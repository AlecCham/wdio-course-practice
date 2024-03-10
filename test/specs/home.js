import homePage from "../pages/home-page.js";
import navComp from "../pages/components/nav-comp.js";
import { count } from "console";

describe('Home', () => {
    before(async () => {
        console.log("This will be executed for test setup")
        await homePage.open('');

    })
    beforeEach(async () => {
        console.log("This runs before each test.")
        await homePage.open('');

    })
    after(async () => {
        console.log("Executed after test run once")

    })

    afterEach(async () => {
        console.log("Executed after each test ")
    })
    it('Open URL & assert title', async () => {
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    });

    it('About page full URL assertion', async () => {
        await homePage.open('/about');
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/');
    });

    it('Get Started is clicked from home page', async () => {
        await homePage.btnGetStarted.click();
        await expect(browser).toHaveUrlContaining("#get-started");
        browser.pause();
    })

    it('Logo is clicked from Get Started page', async () => {
        await homePage.btnGetStarted.click();
        await expect(browser).toHaveUrlContaining("#get-started");
        await homePage.locatorLogo.click();
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/');
    })

    it('Finding heading element text and assert it', async () => {
        await expect(homePage.textHeading).toHaveText('Think different. Make different.')

    })

});