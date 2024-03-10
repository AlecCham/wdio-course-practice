class Blog {
    async open(path = '') {
        await browser.url(`https://practice.sdetunicorns.com/blog`);
    }
}

const blog = new Blog();
export default blog;