class Home {
    targetUrl = 'https://library-app.firebaseapp.com/';
    driver:any;
    by:any;
    until:any;
    
    constructor(driver, by, until){
        this.driver = driver;
        this.by = by;
        this.until = until;
    }

    getButtonSubmit(){
        return this.driver.findElement(this.by.className("btn-block")); 
    }

    getInputEmail(){        
        return this.driver.findElement(this.by.className("ember-text-field")); 
    }

    getSuccessAlert(){
        return this.by.css(".alert-success"); 
    }
}
export { Home };