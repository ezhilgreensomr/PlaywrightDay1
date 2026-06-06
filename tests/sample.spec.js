// import {test} from "@playwright/test"


// test("instagram - valid user", async({page})=>{

//   await page.goto("https://www.instagram.com/");

//   const username = page.locator("//input[@type='text']");

//   await username.fill("abc@gmai.com");

//   const password = page.locator("//input[@name='pass']");

//   await password.fill("abc123");

//   await page.locator("//span[text()='Log in']").click();

//   await page.waitForTimeout(5000);

//   await page.close();

// });



test("instagram - valid user", async({page})=>{

  await page.goto("https://www.instagram.com/");

  await page.getByLabel('Mobile number, username or email').fill("abc@gmail.com");

  await page.getByLabel('Password').fill("abc123");

  await page.getByRole('button', {name: 'Log In', exact: true}).click();

  await page.waitForTimeout(5000);

  await page.close();

  console.log("Greens");

});