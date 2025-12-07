import {test} from '@playwright/test';
import ApplicationURL from "../helpers/ApplicationURL";
import HomePage from "../src/pages/HomePage";

test.describe("Negative scenarios", () => {

    let homePage: HomePage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);

        await page.goto(ApplicationURL.HOME_PAGE_URL);
        await homePage.verifyPageUrl(ApplicationURL.HOME_PAGE_URL)
        await homePage.validatePageTitle("todos")
    })

    test("Try to add a todo task with blank spaces as value", async () => {
        await homePage.generateNewTask("");
        await homePage.validateNumberOfTodoTasks(0);
    });
})