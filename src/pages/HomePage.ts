import {Locator, Page} from "@playwright/test";
import BasePage from "./BasePage";

export default class HomePage extends BasePage {

    private pageTitle: Locator;

    constructor(protected page: Page) {
        super(page);
        this.pageTitle = this.page.getByRole('heading', { name: 'todos', level: 1 });
    }

    public async generateNewTask(taskValue: string) {

    }
}