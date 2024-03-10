import navComp from "../pages/components/nav-comp.js";

class HomePage {
    async open(path = '') {
        await browser.url(`https://practice.sdetunicorns.com/${path}`);
    }

    get btnGetStarted() {
        return $(`#get-started`);
    }

    get locatorLogo() {
        return $(`//div[@class="site-branding"]`);
    }

    get textHeading() {
        return $(`.elementor-widget-container h1`);
    }

    get navComp() {
        return navComp;
    }
}

const homePage = new HomePage();
export default homePage;