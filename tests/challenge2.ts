import { Home } from "./home/home";
require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require('chai').assert;
var By = webdriver.By;
var until = webdriver.until;

describe('challenge 1 suite', function (){
    this.timeout(20000);
    let driver;
    let homePage: Home;

    beforeEach(async function(){
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();        
        homePage = new Home(driver, webdriver.By, webdriver.until);
        await driver.get(homePage.targetUrl); 
    });

    afterEach(function(){
        return driver.quit();    
    });    
    
    it("Check if the button is disabled when the page load", async function() {  
        let button = await homePage.getButtonSubmit();
        assert.isFalse(await button.isEnabled());        
    });    

    it('add a new email', async function (){
        await homePage.getInputEmail().sendKeys("macias@gmail.com");
        await homePage.getButtonSubmit().click();
        let div = await homePage.driver.wait(until.elementLocated(homePage.getSuccessAlert()), 10000);
        return assert.include(await div.getText(), 'Thank you! We saved your email address with the following id:', 'Success');
    });
});