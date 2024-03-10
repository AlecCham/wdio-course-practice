describe('Iframe tests', () => {
    it("Iframe test switch to logo verification", async () => {
    await browser.url('/iframe-sample')
    await $(`//a[@class='custom-logo-link']`);
    let iframe = await $(`#advanced_iframe`);
    
    await browser.switchToFrame(iframe);

    await expect($(`.hfe-site-logo`)).toExist();
    await browser.switchToParentFrame();
    await expect($(`.zak-page-header__title`)).toHaveText("IFrame Sample");
})
})