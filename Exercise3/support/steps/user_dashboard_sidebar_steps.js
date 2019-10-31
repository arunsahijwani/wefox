var userDashboardSidebarPage = require('../pages/user_dashboard_sidebar_page_object.js');
var homePage = require('../pages/home_page_object.js');
var utils = require('../utils');
var chai = require('chai');
chai.use(require('chai-as-promised'));
var should = chai.should();


module.exports = function(){

    this.When(/^I verify that the agent image is loaded$/, function (nextStep) {
        userDashboardSidebarPage.verifyAgentImageLoaded().then(function(){
            nextStep();
        });
    });

    this.When(/^I click on the my contracts section$/, function (nextStep) {
        userDashboardSidebarPage.clickMyContracts().then(function(){
            nextStep();
        });
    });

    this.When(/^I click on the profile section$/, function (nextStep) {
        userDashboardSidebarPage.clickProfile().then(function(){
            nextStep();
        });
    });

    this.When(/^I click on logout$/, function (nextStep) {
        userDashboardSidebarPage.clickLogout().then(function(){
            nextStep();
        });
    });

    this.Then(/^I am redirected to the Wefox homepage$/, function (nextStep) {
        browser.sleep(8000);
        homePage.mainMenu.isPresent().should.eventually
            .equal(true).and.notify(nextStep);
    });
};

