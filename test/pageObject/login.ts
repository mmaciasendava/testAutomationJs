import { By } from "selenium-webdriver";

class Login{
    driver: any;
    loginUrl = 'https://trello.com/login';
    by:any;

    constructor(driver: any) {
        this.driver = driver;
        this.by = this.driver.By;
    }

    get username() { 
        return this.driver.findElement(By.id('user'));
    }
    
    get password() { 
        return this.driver.findElement(By.id('password'));
    }
    
    get submitBtn() { 
        return this.driver.findElement(By.id('login'));
    }
    
    open(){
        return this.driver.get(this.loginUrl);
    }
}
export { Login };