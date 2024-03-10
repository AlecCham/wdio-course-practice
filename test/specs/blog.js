describe("Blog count of length", () => {

    it("Get the list of all Recent Posts & assert the length of each list item > 1 & assert the total count = 4", async () => {
        await browser.url("/blog");
        // Get the Recent Post List Elements
        const recentPostsList  = await $$(`#recent-posts-3 ul li`);
        const blogList = [];
        // Loop through the list and assert the text length is greater than 10
        for (const item of recentPostsList) {
            const text = await item.getText();
            await blogList.push(text);
            await expect(text.length).toBeGreaterThan(10);
        }

        console.log("blog list is 3: " + blogList)

        // Assert the total length of the list is 5
        await expect(recentPostsList).toHaveLength(5);
    });
});