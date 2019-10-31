var personalDetailsPage = require('../pages/personal_details_page_object.js');


module.exports = function(){

    this.When(/^I export personal details data to JSON file$/, function (nextStep) {
       personalDetailsPage.storingData().then(function(){
           nextStep();
        });
    });

};