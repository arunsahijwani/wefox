var userDashboardSidebarPage = require('./user_dashboard_sidebar_page_object.js');
var utils = require('../utils');

var myContractsPage = {

    //Page object Elements
    contractListEmptyLabel: $('[v-selector="list-empty"]'),


    //Functions
    /**
     * Method to verify if a contract for the user exists
     * @return {promise}
     * */
    verifyContractExistence: function() {
        utils.waitForDisplayed(this.contractListEmptyLabel, 'contractListEmptyLabel does not appear as contracts exist');
        return userDashboardSidebarPage.myContractsLink.click();
    },

};

module.exports=myContractsPage;