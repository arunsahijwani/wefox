var profilePage = require('../pages/profile_page_object.js');


module.exports = function(){

    this.When(/^I click on the personal details box$/, function (nextStep) {
        profilePage.clickPersonalDetails().then(function(){
            nextStep();
        });
    });
};