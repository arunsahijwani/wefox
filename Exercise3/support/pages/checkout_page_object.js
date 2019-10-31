var utils = require('../utils');

var checkoutPage = {

    //Page object Elements
    processOrderButton: element(by.id('hlb-ptc-btn-native')),

    //Functions
    /**
     * Method to check out an order
     * @return {promise}
     * */
    processOrder: function() {
        utils.waitFor(this.processOrderButton, "processOrderButton does not appear");
        return this.processOrderButton.click();
    }
};

module.exports = checkoutPage;