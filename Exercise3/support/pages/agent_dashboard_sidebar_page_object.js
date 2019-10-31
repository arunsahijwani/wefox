var utils = require('../utils');

var agentDashboardSidebarPage = {

    //Page object Elements
    myContractsLink: $('[t-selector="sidebar-contracts-link"]'),
    profileLink: $('[t-selector="sidebar-account-link"]'),



    //Functions
    /**
     * Method to click on the My Contracts link from the agent sidebar
     * @return {promise}
     * */
    clickMyContracts: function() {
        utils.waitFor(this.myContractsLink, "myContractsLink does not appear");
        return this.myContractsLink.click();
    },
};

module.exports = agentDashboardSidebarPage;