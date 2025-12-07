import {expect, Locator, Page} from "@playwright/test";

export default class BasePage {

    constructor(protected page : Page) {

    }

    public async verifyPageUrl(expectedUrl: string) {
        await expect(this.page).toHaveURL(expectedUrl);
    }

    public verifyElementText(element: Locator, expectedText: string) {
        expect(element).toContainText(expectedText);
    }
}