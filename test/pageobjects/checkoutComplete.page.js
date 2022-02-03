const Page = require('./page');

/**
 * Checkout Complete Page
 *
 * selectors:
 *   secondaryTitle()
 *   checkoutComplete()
 *   backHomeButton()
 *
 * methods:
 *   async clickBackHomeButton()
 *
 */
class CheckoutCompletePage extends Page {
    get secondaryTitle() {
        return $('#header_container > div.header_secondary_container > span')
    }

    get checkoutComplete() {
        return $('div.checkout_complete_container')
    }

    get backHomeButton() {
        return $('button#back-to-products')
    }

    /**
     * click the Back Home button
     */
    async clickBackHomeButton() {
        await this.backHomeButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('');
    }
}

module.exports = new CheckoutCompletePage();
