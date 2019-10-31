var userDashboardSidebarPage = require('../pages/user_dashboard_sidebar_page_object.js');
var homePage = require('../pages/home_page_object.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;


module.exports = function(){

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
        expect(homePage.mainElement.isPresent()).to.eventually.be.true.and.notify(nextStep);

    });

});
