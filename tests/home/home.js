"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Home = /** @class */ (function () {
    function Home(driver, by, until) {
        this.targetUrl = 'https://library-app.firebaseapp.com/';
        this.driver = driver;
        this.by = by;
        this.until = until;
    }
    Home.prototype.getButtonSubmit = function () {
        return this.driver.findElement(this.by.className("btn-block"));
    };
    Home.prototype.getInputEmail = function () {
        return this.driver.findElement(this.by.className("ember-text-field"));
    };
    Home.prototype.getSuccessAlert = function () {
        return this.by.css(".alert-success");
    };
    return Home;
}());
exports.Home = Home;
//# sourceMappingURL=home.js.map