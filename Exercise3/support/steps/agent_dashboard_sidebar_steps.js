var agentDashboardSidebarPage = require('../pages/agent_dashboard_sidebar_page_object.js');


module.exports = function(){


    this.When(/^I click on the contracts section$/, function (nextStep) {
        browser.sleep(3000);
        agentDashboardSidebarPage.clickMyContracts().then(function(){
            nextStep();
        });
    });
};