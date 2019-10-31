var utils = require('../utils');

var profilePage = {

    //Page object Elements
    personalDetailsBox: $('[data-track-event-action="PersonalDetails"]'),

    //Functions
    /**
     * Method to click on the personal details box
     * @return {promise}
     * */
    clickPersonalDetails: function() {
        return this.personalDetailsBox.click();
    }
};

module.exports = profilePage;

