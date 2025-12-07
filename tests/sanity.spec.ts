import {test} from '@playwright/test';
import ApplicationURL from "../helpers/ApplicationURL";
import HomePage from "../src/pages/HomePage";

test.describe("Sanity tests", () => {

    let homePage: HomePage;

    test.beforeEach(async ({page}) => {
        await page.goto(ApplicationURL.HOME_PAGE_URL);
        homePage = new HomePage(page);
        await homePage.verifyPageUrl(ApplicationURL.HOME_PAGE_URL)
    })

    test("Create 1 todo task", async () => {
        await homePage.generateNewTask("Todo task");
        await homePage.validateNumberOfTodoTasks(1);
    });

    test("Create several todo task", async () => {
        let numberOfTodosToCreated = Math.floor(Math.random() * 10) + 1
        console.log(`Number of todos created = ${numberOfTodosToCreated}`);
        for (let i = 1; i <= numberOfTodosToCreated; i++) {
            await homePage.generateNewTask(`Todo number ${i}`)
        }
        await homePage.validateNumberOfTodoTasks(numberOfTodosToCreated);
    });
})