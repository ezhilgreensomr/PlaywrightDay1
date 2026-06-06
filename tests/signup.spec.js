// import {test} from "@playwright/test";
// test("sign up - test", async({page})=>{

// import { LoginPage } from "../pages/loginpage";

// //   await page.goto("https://www.facebook.com/");

// //   const email = page.getByRole('textbox',{name: 'Email address or mobile number'});

// //   await email.fill('abc123');

// //   await email.dblclick();

// //   await email.click({button: "right"});

// //   await page.waitForTimeout(5000);

// //   await page.close();

// // });


// import {test} from "@playwright/test";

// test("sign up - test", async({page})=>{

//   await page.goto("https://www.greenstechnologys.com/");
  
//   const courses = page.getByRole('link', {name: 'COURSES',exact: true});

//   await courses.hover();

//   const azure = page.getByRole('link', {name: 'Azure Training', exact: true});

//   await azure.click();

//   await page.waitForTimeout(5000);

//   await page.close();

// });


// import {test} from "@playwright/test";

// test("sign up - test", async({page})=>{

//   await page.goto("https://vinothqaacademy.com/mouse-event/");

//   const element1 = page.locator("#doubleBtn");

//   await element1.dblclick();

//   const element2 = page.locator("#rightBtn");

//   await element2.click({button: 'right'});
  
//   const source = page.locator("#dragItem");

//   const target = page.locator("#dropZone");

//   await source.dragTo(target);

//   await page.waitForTimeout(5000);

//   await page.close();

// });



// import {test} from "@playwright/test";

// test("sign up - test", async({page})=>{

//   await page.goto("https://www.facebook.com/");

//   const username = page.getByRole('textbox', {name: 'Email address or mobile number'});

//   await username.click();

//   await page.keyboard.type('Greens');

  
//   //CONTROL + A
//   // await page.keyboard.down('Control');
//   // await page.keyboard.press('A');
//   // await page.keyboard.up('Control');
//   await page.keyboard.press('Control+A');
//   //CONTROL + C
//   await page.keyboard.down('Control');
//   await page.keyboard.press('A');
//   await page.keyboard.press('C');
//   await page.keyboard.up('Control');

//   //Tab
//   await page.keyboard.press('Tab');

//   //CONTROL + V
//   await page.keyboard.down('Control');
//   await page.keyboard.press('V');
//   await page.keyboard.up('Control');

//   //Enter
//   await page.keyboard.press('Enter');

//   await page.waitForTimeout(5000);

//   await page.close();

// });



// import {test} from "@playwright/test";

// test("sign up - test", async({page})=>{

//   await page.goto("https://www.facebook.com/");

//   // await page.screenshot({path: "C:\\Users\\Lenovo\\Documents\\Custom Office Templates\\fb.png", fullPage: true});

//   const email = page.getByRole("textbox", {name:"Email address or mobile number"});

//   email.screenshot({path: "Username.png"});

//   await page.waitForTimeout(10000);

//   await page.close();

// });


// import {test} from "@playwright/test";

// test("sign up - test", async({page})=>{

//   await page.goto("https://demo.automationtesting.in/Alerts.html");

//   const btn = page.locator("button[onclick='alertbox()']");

//   //eventlistener
//   page.on('dialog', async(dialog)=>{

//    const msg = dialog.message();
//    console.log(msg);

//    await dialog.accept();

//   });

//   await btn.click();

//   await page.waitForTimeout(5000);

//   await page.close();

// });


// import {test} from "@playwright/test";

// test("sign up - test", async({page})=>{

//   await page.goto("https://demo.automationtesting.in/Alerts.html");

//   //CONFIRM ALERT
//   const btn = page.getByRole("link", {name: "Alert with OK & Cancel"});

//   await btn.click();

//   const btn1 = page.locator("button[onclick='confirmbox()']");

//   page.on('dialog', async(dialog)=>{

//     //message()
//     const msg  = dialog.message();
//     console.log(msg);

//     //accept()
//     await dialog.dismiss();

//   });

//   await btn1.click();
//   await page.waitForTimeout(5000);

//   await page.close();

// });



// import {test} from "@playwright/test";

// test("sign up - test", async({page})=>{

//   await page.goto("https://demo.automationtesting.in/Alerts.html");

//   //PROPMT ALERT - OK,CANCEL, TEXTBOX

//   const btn = page.getByRole("link", {name: "Alert with Textbox"});

//   await btn.click();

//   const btn2 = page.locator("button[onclick='promptbox()']");

//   page.on("dialog", async(dialog)=>{

//     //message()
//     const msg = dialog.message();
//     console.log(msg);

//     await dialog.accept("greens");

//   })
//   await btn2.click();

//   await page.waitForTimeout(5000);

//   await page.close();

// });


// import {test} from "@playwright/test";

// test("sign up - test", async({page})=>{

//   await page.goto("https://www.ironspider.ca/forms/dropdowns.htm");

//   const singleSelect = page.locator("select[name='coffee']");

//   //value
//   // await singleSelect.selectOption({value: 'regular'});

//   //visibleText
//   //  await singleSelect.selectOption({label: 'Black'});

//   //value
//   await singleSelect.selectOption("black");


//   await page.waitForTimeout(5000);

//   await page.close();

// });


// import {test} from "@playwright/test";

// test("sign up - test", async({page})=>{

//   await page.goto("https://www.ironspider.ca/forms/dropdowns.htm");

//   const multiSelect = page.locator("select[name='coffee2']");

//   //value
//   // await multiSelect.selectOption([

//   //   {value: "skim"},
//   //   {value: "sugar"}

//   // ]);

//   // //label - visible text
//   // await multiSelect.selectOption([

//   //   {label: "Milk (2%)"},
//   //   {label: "Honey"}

//   // ]);

//   //value 
//   await multiSelect.selectOption(["skim","sugar"]);

//   //deselect
//   await multiSelect.selectOption([]);
  
//   await page.waitForTimeout(5000);

//   await page.close();

// });




// import {test} from "@playwright/test";

// test("sign up - test", async({page,context})=>{

//   await page.goto("https://demo.automationtesting.in/Windows.html");

//   await page.getByRole('link', {name: 'Open Seperate Multiple Windows'}).click();

//   let [tab1] = await Promise.all([

//     context.waitForEvent('page'),
//     page.getByRole('button',{name: 'click'}).click()

//   ]);
   
//   let tab2 = await context.waitForEvent('page');

//   let tab1Title =await tab1.title();
//   console.log(tab1Title);

//    let tab2Title =await tab2.title();
//   console.log(tab2Title);

//   await tab1.locator('#email').fill("greens");
//   await tab2.getByRole('button', {name: 'About'}).click();

//   await page.waitForTimeout(5000);

// });

// import {test} from "@playwright/test";

// test("sign up - test", async({page,context})=>{

//   await page.goto("https://www.qa-practice.com/elements/checkbox/mult_checkbox");

//   let checkbox1 = page.getByRole('checkbox',{name: 'One'});
  
//   await checkbox1.check();
//   await checkbox1.uncheck();

//   await page.waitForTimeout(5000);

// });


// import {test} from "@playwright/test";

// test("sign up - test", async({page,context})=>{

//   await page.goto("https://www.facebook.com/");

//   let password = page.locator("input[name='pass']");
//   await password.focus();
//   await page.waitForTimeout(5000);

// });



// import {test,expect} from "@playwright/test";

// test("sign up - test", async({page})=>{

//   await page.goto("https://vinothqaacademy.com/iframe/");

//   let frame = page.frameLocator("[name = 'employeetable']");

//   let field1 = frame.getByRole("textbox", {name: "Name"});

//   await field1.fill("Hari");


//   let frame2 = page.frameLocator("[name = 'registeruser']");

//   let firstname = frame2.getByRole("textbox", {name: "First Name *"});

//   await firstname.fill("Arun");


//   await page.waitForTimeout(5000);
// });


// import {test,expect} from "@playwright/test";

// test("sign up - test", async({page})=>{

//   await page.goto("https://www.facebook.com/");
  
//   let email = page.getByRole("textbox", {name: "Email address or mobile number"});

//   await expect(email).toBeVisible();

//   // await expect(email).toBeHidden();

//   await email.fill("abc123@gmail.com");

//   await expect(email).toHaveValue("abc123@gmail.com");

//   let pass = page.getByRole("textbox", {name: "Password"});

//   await expect(pass).toBeVisible();

//   await pass.fill("abc123");

//   // let login = page.getByText("Log in", {exact: true});
//   let login = page.locator("//span[text()='Log in']");

//   await expect(login).toBeEnabled();

//   await login.click();
  
//   await page.waitForTimeout(5000);
// });



// // Row Count
// import {test,expect} from "@playwright/test";

// test("sign up - test", async({page})=>{

//   await page.goto("https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html", {timeout:60000, waitUntil: "domcontentloaded"});

//   let tRows = page.locator("#customers tr");

//   let rowCount = await tRows.count();

//   console.log("RowCount: "+rowCount);
  
//   await page.waitForTimeout(5000);
// });


// //column count
// import {test,expect} from "@playwright/test";

// test("sign up - test", async({page})=>{

//   await page.goto("https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html", {timeout:60000, waitUntil: "domcontentloaded"});

//   let tColumns = page.locator("#customers th");

//   let columnCount = await tColumns.count();

//   console.log(columnCount);
  
//   await page.waitForTimeout(5000);
// });


// //Full Table Print
// import {test,expect} from "@playwright/test";

// test("sign up - test", async({page})=>{

//   await page.goto("https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html", {timeout:60000, waitUntil: "domcontentloaded"});

//   let tColumns = page.locator("#customers");

//   let datas = await tColumns.textContent();

//   console.log(datas);
  
//   await page.waitForTimeout(5000);
// });

// //Specific Row
// import {test,expect} from "@playwright/test";

// test("sign up - test", async({page})=>{

//   await page.goto("https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html", {timeout:60000, waitUntil: "domcontentloaded"});

//   let tRow = page.locator("#customers tr:nth-child(2)");

//   let data = await tRow.textContent();

//   console.log(data);

//   await page.waitForTimeout(5000);
// });


// //Specific Data
// import {test,expect} from "@playwright/test";

// test("sign up - test", async({page})=>{

//   await page.goto("https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html", {timeout:60000, waitUntil: "domcontentloaded"});

//   let tRow = page.locator("#customers tr:nth-child(2) td:nth-child(1)");

//   let data = await tRow.textContent();

//   console.log(data);

//   await page.waitForTimeout(5000);
// });



// //print table rows
// import {test,expect} from "@playwright/test";

// test("sign up - test", async({page})=>{

//   await page.goto("https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html", {timeout:60000, waitUntil: "domcontentloaded"});

//   let tRows = page.locator("#customers tr");

//   let count = await tRows.count();  //7

//   for(let i=0; i<count; i++){

//     let row = await  tRows.nth(i).textContent();
//     console.log(row);

//   }
//   console.log(data);

//   await page.waitForTimeout(5000);
// });














// import {test,expect} from "@playwright/test";
// import { LoginPage } from "../pages/loginpage";

// test("sign up - test1", async({page})=>{

//   await page.goto("https://www.facebook.com/");

//   let loginPage = new LoginPage(page);
 
//   let user = loginPage.username();

//   await user.fill("abc123@gmail.com");

//   let pass = loginPage.password();

//   await pass.fill("abc123");

//   let login = loginPage.loginbtn();

//   await login.click();

//   await page.waitForTimeout(5000);
// });








// import {test,expect} from "@playwright/test";
// import { LoginPage } from "../pages/loginpage";

// test("sign up - test1", async({page})=>{

//   let loginPage = new LoginPage(page);
 
//   loginPage.goToLoginpage();
//   // loginPage.enterUsername("abc123@gmail.com");

//   // loginPage.enterPassword("abc123");

//   // loginPage.clickLoginBtn();

//   loginPage.login("abc123@gmail.com", "abc123");

//   await page.waitForTimeout(5000);
// });



// import {test} from "@playwright/test";
// import { LoginPage } from "../pages/loginpage";


// const XLSX = require('xlsx');

// const workbook = XLSX.readFile("C:\\Users\\Lenovo\\Documents\\clone\\PlaywrightDay1\\testdata\\TestDatas1.xlsx");

// const workbookSheet = workbook.Sheets['Sheet1'];

// const testdata = XLSX.utils.sheet_to_json(workbookSheet);

// console.log(testdata);

// for(let data of testdata){

// test(`login-test-${data.username}`, async({page})=>{

//   await page.goto("https://www.facebook.com/");

//   await page.locator("[name='email']").fill(data.username);

//   await page.locator("[name='pass']").fill(data.password);

//   // let loginPage = new LoginPage(page);
 
//   // loginPage.goToLoginpage();

//   // loginPage.login(data.username, data.password);
//   await page.waitForTimeout(5000);
// });

// }



// import {test} from "@playwright/test";
// test("sign up - test", async({page})=>{

//   await page.goto("https://www.facebook.com/");

//   // const email = page.getByRole('textbox',{name: 'Email address or mobile number'});

//   // await email.fill('abc123');

//   // await email.dblclick();

//   // await email.click({button: "right"});

//   let l = new LoginPage(page);

//   await l.login("abc123","abc");

//   await l.takeScreenshot("Screenshot/login.png");

//   await l.waitForSec(5);

//   await page.close();

// });





import {test} from "@playwright/test";
import { LoginPage } from "../pages/loginpage.js";

test("sign up - test", async({page})=>{

  await page.goto("https://www.facebook.com/");

  let l = new LoginPage(page);

  // let email = l.username();
  
  // await l.enterText(email,"abc123@gmail.com");

  // let pass = l.password();

  // await l.enterText(pass, "abc123");

  // let btn = l.loginbtn();

  // await l.btnClick(btn);

  await l.login("abc123","abc");

  await l.waitForSeconds(6);

  await l.takeScreenshot("screenshots/loginpage1.png");

  await l.waitForSeconds(6);

  // await page.waitForTimeout(5000);

  await page.close();

});