import {expect, Locator, Page, test} from "@playwright/test";

export abstract class BasePage {

    protected constructor(protected page : Page) {
    }

    public async verifyPageUrl(expectedUrl: string) {
        await expect(this.page).toHaveURL(expectedUrl);
    }

    protected async clickElement(element: Locator) {
        await test.step(`Clicking the ${element}`, async () => {
            await element.click();
        })
    }

    protected async fillText(element: Locator, textToFill: string) {
        await test.step(`Filling ${textToFill} into the ${element} element`, async () => {
            await element.fill(textToFill);
        })
    }

    protected async verifyElementText(element: Locator, expectedText: string) {
        await test.step(`Verify ${element} contains text as the expected '${expectedText}'`, async () => {
            await expect(element).toContainText(expectedText);
        })
    }

    protected async getTheNumberOfCounts(element: Locator) {
        let count = 0;

        await test.step(`Get the number of elements in locator ${element}`, async () => {
            count = await element.count();
        });

        return count;
    }
}