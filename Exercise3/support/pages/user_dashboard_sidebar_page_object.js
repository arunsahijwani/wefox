var userDashboardSidebarPage = require('./user_dashboard_sidebar_page_object.js');
var utils = require('../utils');

var userDashboardSidebarPage = {

    //Page object Elements
    myContractsLink: $('[t-selector="sidebar-contracts-link"]'),
    profileLink: $('[t-selector="sidebar-account-link"]'),
    logoutLink: $('[t-selector="sidebar-logout-link"]'),
    dashboardLink: $('[t-selector="sidebar-dashboard-link"]'),
    agentImage: element(by.tagName('img')),

    //Functions
    /**
     * Method to verify if the agent image is loaded
     * @return {promise}
     * */
    verifyAgentImageLoaded: function() {
        utils.waitFor(this.agentImage, "agentImage does not appear");
        return userDashboardSidebarPage.myContractsLink.click();
    },

    /**
     * Method to clicking on the My Contracts link from the user dashboard sidebar
     * @return {promise}
     * */
    clickMyContracts: function() {
        utils.waitFor(this.myContractsLink, "myContractsLink does not appear");
        return this.myContractsLink.click();
    },

    /**
     * Method to click on the Profile link from the user dashboard sidebar
     * @return {promise}
     * */
    clickProfile: function() {
        utils.waitFor(this.profileLink, "profileLink does not appear");
        return this.profileLink.click();
    },

    /**
     * Method to click on the Logout link from the user dashboard sidebar
     * @return {promise}
     * */
    clickLogout: function() {
        utils.waitFor(this.logoutLink, "logoutLink does not appear");
        return this.logoutLink.click();
    }
};

module.exports = userDashboardSidebarPage;