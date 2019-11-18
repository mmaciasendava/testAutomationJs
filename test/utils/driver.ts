require('chromedriver');
import { Builder } from 'selenium-webdriver';

class DriverJs{
    driver;    
    static driverJs: any;
    constructor(){
        this.driver = new Builder()
        //.withCapabilities({ 'pageLoadStrategy': 'eager' })
        .forBrowser('chrome')
        .build();
    }

    get driverJs(){
        return this.driver;
    }

}
export { DriverJs };