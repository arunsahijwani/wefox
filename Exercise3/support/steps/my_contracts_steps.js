var myContractsPage = require('../pages/my_contracts_page_object.js');


module.exports = function(){

    this.When(/^I check if contracts exist$/, function (nextStep) {
        myContractsPage.verifyContractExistence().then(function(){
            nextStep();
        });
    });

};