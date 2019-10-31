var loginPage = require('../pages/login_page_object.js');
var utils = require ('../utils.js');


module.exports = function(){

    this.Given(/^I am on the Wefox login page/, function (nextStep){
        browser.ignoreSynchronization = true;
        browser.get("https://my.wefox.de/login");
        loginPage.loginButton.isPresent().then(function () {
            nextStep();
        });

    });

    this.When(/^I login with "([^"]*)" credentials$/, function (user, nextStep) {
        loginPage.insertCredentials(user);
        loginPage.clickLoginButton().then(function(){
            nextStep();
        });
    });
};
