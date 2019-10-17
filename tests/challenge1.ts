require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require('chai').assert;
var By = webdriver.By;
var urlSite = "https://library-app.firebaseapp.com/";
var until = webdriver.until;

describe('challenge 1 suite', function (){
    this.timeout(20000);
    var driver;

    beforeEach(async function(){
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome())
        .build();       
        await driver.get(urlSite); 
    });

    afterEach(function(){
        return driver.quit(); 
    });

    it("Check if the button is disabled when the page load", async function() {        
        let button = await driver.findElement(By.className("btn-block"));
        assert.isFalse(await button.isEnabled());        
    });
    
    it("Understanding the async behavior", async function (){        
        let element = await driver.findElement(By.className("btn-block"));
        console.log(element);
        driver.findElement(By.className("btn-block")).then(function(){
            console.log("una promesa cumplida");
        });        
        console.log("sin promesa");        
        console.log("con tiempo");
    });

    it("The title is 'Library'", async function() {
        return assert.equal(await driver.getTitle(), "LibraryApp - Ember 3.0 Tutorial");        
    });

    it('add a new email', async function (){
        await driver.findElement(By.className('ember-text-field')).sendKeys("macias@gmail.com");
        await driver.findElement(By.className("btn-block")).click();
        let div = await driver.wait(until.elementLocated(By.css('.alert-success')), 10000);       
        return assert.include(await div.getText(), 'Thank you! We saved your email address with the following id:', 'Success');                    
    });

    it("The title is 'Google' with await", async function() {
        var title = await driver.getTitle();
        return assert.equal(title, "LibraryApp - Ember 3.0 Tutorial");
    });

    it("Print the menu", async function() {
        let menu = await driver.findElements(By.css('nav li'));
        return menu.map(function(item){
            item.getText().then(function(txtItem){
                console.log(txtItem);
            });
        });
    });
});