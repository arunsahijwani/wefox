var utils = require('../utils');

var pdpPage = {

    //Page object Elements
    addToCartButton: element(by.id('add-to-cart-button')),

    //Functions
    /**
     * Method to click on the add to cart button from the pdp page
     * @return {promise}
     * */
    addToCart: function() {
        utils.waitFor(this.addToCartButton, "addToCartButton does not appear");
        return this.addToCartButton.click();
    }
};

module.exports = pdpPage;