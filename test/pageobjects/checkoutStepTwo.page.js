const Page = require('./page');

/**
 * Checkout Page Step Two
 *
 * selectors:
 *   secondaryTitle()
 *   summaryInfo()
 *   finishButton()
 *   cancelButton()
 *
 * methods:
 *   async clickCancelButton()
 *   async clickFinishButton()
 *
 */
class CheckoutStepTwoPage extends Page {
    /**
     * define selectors using getter methods
     */
    get secondaryTitle() {
        return $('#header_container > div.header_secondary_container > span')
    }

    get summaryInfo() {
        return $('div.summary_info')
    }

    get finishButton() {
        return $('button#finish')
    }

    get cancelButton() {
        return $('button#cancel')
    }

    /**
     * Click the cancel button on the page
     */
    async clickCancelButton() {
        await this.cancelButton.click();
    }

    /**
     * Click the finish button on the page
     */
    async clickFinishButton() {
        await this.finishButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('');
    }
}

module.exports = new CheckoutStepTwoPage();
