import { After, Before, setDefaultTimeout} from "@cucumber/cucumber";
import { chromium } from "@playwright/test";

setDefaultTimeout(60000);

Before(async function(){

    this.browser = await chromium.launch({headless:false});

    this.page = await this.browser.newPage();

    await this.page.goto("https://www.facebook.com/");

    console.log("Facebook Opened");

});

After(async function(){

    await this.browser.close();
    console.log("Browser Closed");

});