
/* global browser */
var waitingTime = 30000;
module.exports = {
    waitFor: waitFor,
    waitForNotPresent: waitForNotPresent,
    waitForDisplayed: waitForDisplayed,
};

/*This function is used to simplify the explicit waits. It takes as parameter
 the element we want to wait for, how much time we want to wait for it
 and the custom message we want to print if the element is not found.
 Time and error messages are optional.*/

function waitFor (element, errorMessage){
    var EC = protractor.ExpectedConditions;
    if (errorMessage === null ){
        return browser.wait(EC.elementToBeClickable(element), waitingTime,
            'The element searched is not visible after waiting 20 seconds');
    }
    else{
        return browser.wait(EC.elementToBeClickable(element),
            waitingTime, errorMessage);
    }
}

/**
 * @desc Wait until an element is displayed on screen
 * @param : {ElementFinder} The element which needs to be displayed.
 * @param : {String} The optional custom error that can be passed.
 * @return : {Promise}
 */
function waitForDisplayed(element, errorMessage) {
    var time = 3000;
    if (errorMessage === null ){
        return browser.driver.wait(function() {
            return element.isDisplayed().then(function(displayed) {
                return displayed;
            })
        },time,'The element searched is not displayed after waiting 20 seconds');
    }
    else{
        return browser.driver.wait(function() {
            return element.isDisplayed().then(function(displayed) {
                return displayed;
            })
        },time, errorMessage);
    }


/**
 * @desc Wait until an element is not displayed on screen
 * @param : {ElementFinder} The element which needs to be hidden.
 * @param : {String} The optional custom error that can be passed.
 * @return : {Promise}
 */
}
function waitForNotPresent (element, errorMessage){
    var EC = protractor.ExpectedConditions;
    if (errorMessage === null ){
        return browser.driver.wait(function() {
            return element.isPresent().then(function(present) {
                return !present;
            })
        },waitingTime,'The element searched is not visible after waiting 20 seconds');
    }
    else{
        return browser.driver.wait(function() {
            return element.isPresent().then(function(present) {
                return !present;
            })
        }, waitingTime, errorMessage);
    }
}
