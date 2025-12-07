import {expect, Locator, Page} from "@playwright/test";
import {BasePage} from "./BasePage";

export default class HomePage extends BasePage {

    private pageTitle: Locator;
    private newTodoInput: Locator;
    private listOfTodos: Locator;

    constructor(protected page: Page) {
        super(page);
        this.pageTitle = this.page.getByRole('heading', {name: 'todos', level: 1});
        this.newTodoInput = this.page.locator("input[class='new-todo']")
        this.listOfTodos = this.page.locator("div[class='view']");
    }

    public async generateNewTask(taskValue: string) {
        await this.fillText(this.newTodoInput, taskValue);
        await this.page.keyboard.press('Enter');
    }

    public async getTheNumberOfTodos() {
        return await this.getTheNumberOfCounts(this.listOfTodos);
    }

    public async validateNumberOfTodoTasks(expectedNumberOfTasks: number) {
        await expect(this.listOfTodos).toHaveCount(expectedNumberOfTasks)
    }


}