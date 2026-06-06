import { BasePage } from "./BasePage.js";

//page class 
export class LoginPage extends BasePage{

    constructor(page){

        super(page);
        this.page = page;
    }
    username(){
        let email = this.page.locator("[name='email']");

        return email;
    }
    password(){

        let pass = this.page.locator("[name='pass']");
        return pass;
    }
    loginbtn(){

        let loginbtn = this.page.locator("//span[text()='Log in']");
        return loginbtn;
    }

    async enterUsername(username){

       await this.enterText(this.username(),username);
    }

    async enterPassword(password){

        await this.enterText(this.password(),password);

    }
    async clickLoginBtn(){

        await this.btnClick(this.loginbtn());
    }

    async goToLoginpage(){

        await this.page.goto("https://www.facebook.com/");
    }

    async login(username,password){

        // await this.username().fill(username);
        // await this.password().fill(password);
        // await this.loginbtn().click();

        await this.enterText(this.username(),username);
        await this.enterText(this.password(), password);
        await this.btnClick(this.loginbtn());
    }
}