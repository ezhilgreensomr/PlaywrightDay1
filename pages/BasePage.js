export class BasePage{
    constructor(page){

        this.page = page;
    }
    //fill()
    async enterText(locator,text){

        await locator.fill(text);
    }
    //click()
    async btnClick(locator){

        await locator.click();
    }
    //screenshot()
    async takeScreenshot(location){

        await this.page.screenshot({path:location, fullpage: true});
    }

    //waitForTimeout()
    async waitForSeconds(seconds){

        await this.page.waitForTimeout(seconds * 1000);
    }
}