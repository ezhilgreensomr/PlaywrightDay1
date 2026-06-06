const{When,Given,Then} = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
const { LoginPage } = require("../pages/loginpage");
let browser;
let page;
let l;

// Given("User is on Facebook Login Page", async function(){

//     browser = await chromium.launch({headless: false});

//     page = await browser.newPage();

//     await page.goto("https://www.facebook.com/");

// });

When("User Enters Invalid Username and Password", async function(){

    l = new LoginPage(this.page);

    await l.enterUsername("abc123@gmail.com");

    await l.enterPassword("abc123");

});

When("User Enters Valid Username and Password", async function(){

    l = new LoginPage(this.page);

     await l.enterUsername("greens@gmail.com");

     await l.enterPassword("greens123");

});

Then("User Should Navigates to Home Page", async function(){

    console.log("Home Page");
})

When("User Clicks On the Login Button", async function(){

    await l.clickLoginBtn();

})

Then("User Validates the Error message after the login", async function(){

    console.log("Error Message");

})
