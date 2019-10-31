var utils = require('../utils');
var jp = require('jsonpath');
var userData = require('../data/userData.json');

var loginPage = {

    //Page object Elements
    usernameInput: element(by.id('user_name')),
    passwordInput: element(by.id('password')),
    loginButton: $('[t-selector="login-submit"]'),


    //Functions
    /**
     * @desc Completes login form with valid credentials then clicks the Log in button
     * @param {String} user
     * @return {promise}
     */
    insertCredentials: function(user){
        utils.waitFor(this.usernameInput, "usernameInput does not appear so you are not on the login page");
        //extract data
        var username, password;
        username = jp.value(userData, '$.*[?(@.id==="'+ user +'")]..username');
        password = jp.value(userData, '$.*[?(@.id==="'+ user +'")]..password');

        // keys in username and password
        loginPage.usernameInput.sendKeys(username);
        return loginPage.passwordInput.sendKeys(password);
    },
    /**
     * @desc Click on the Log in button to login
     * @return {promise}
     */
    clickLoginButton: function(){
        return loginPage.loginButton.click();
    }

};

module.exports=loginPage;
