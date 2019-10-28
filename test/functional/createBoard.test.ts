import { DriverJs } from "../utils/driver";
const { By, until } = require('selenium-webdriver');
import { Board } from "../pageObject/board";
import { Login } from "../pageObject/login";
import faker from 'faker';

describe('Create a new board in Trello', function () {
    jest.setTimeout(30000);
    let login; 
    let driver;    

    beforeAll(async function(){
        driver = new DriverJs().driverJs;
        login = new Login(driver);
    });

    afterAll(function(){
        driver.quit();
    });

    it('Create a new board and verify it', async () => {
        const board = new Board();
        let titleBoard = faker.company.companyName();
        let newBoard = await board.newBoard(titleBoard);
        let idBoard = await newBoard.json();
        console.log("New board created: " + idBoard.id);
        expect(newBoard.ok).toBe(true);
        board.setTitleBoard = titleBoard;

        console.log("Search the new board in Front End");        
        await login.open();
        await login.username.sendKeys(globalThis.user);
        await login.password.sendKeys(globalThis.password);
        await login.submitBtn.click();        
        let title = await driver.wait(until.elementLocated(By.xpath(board.gettitleBoard)));
        let result = await title.isDisplayed().then((response: any) =>{
            return response;
        });
        expect(result).toBe(true);
        
        console.log("Delete the board created");
        let deleteBoard = await board.deleteBoard(idBoard.id);        
        expect(deleteBoard.status).toBe(200);
    });
});