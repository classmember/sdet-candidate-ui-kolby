const Page = require('./page');

/**
 * Checkout Page Step One Page
 *
 * selectors:
 *   secondaryTitle()
 *   firstNameInput()
 *   lastNameInput()
 *   postalCodeInput()
 *   cancelButton()
 *   continueButton()
 *   checkoutInfo()
 *   checkoutInfoError()
 *   checkoutErrorCancelButton()
 *
 * methods:
 *   async fillOutStepOneForm(firstName, lastName, postalCode)
 *   async clickContinueButton()
 *   async exitOutOfAnyErrorMessages()
 *
 */
class CheckoutStepOnePage extends Page {
    /**
     * define selectors using getter methods
     */
    get secondaryTitle() {
        return $('#header_container > div.header_secondary_container > span')
    }

    get firstNameInput() {
        return $('input#first-name')
    }

    get lastNameInput() {
        return $('input#last-name')
    }

    get postalCodeInput() {
        return $('input#postal-code')
    }

    get cancelButton() {
        return $('button#cancel')
    }

    get continueButton() {
        return $('input#continue')
    }

    get checkoutInfo() {
        return $('div.checkout_info')
    }

    get checkoutInfoError() {
        return $('div.checkout_info div.error')
    }

    get checkoutErrorCancelButton() {
        return $('button.error-button')
    }

    /**
     * Fill out the first name, last name, and postal code fields of the form
     */
    async fillOutStepOneForm(firstName, lastName, postalCode) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.postalCodeInput.setValue(postalCode);
    }

    /**
     * clicks the continue button on the checkout step one page
     */
    async clickContinueButton() {
        await this.continueButton.click();
    }

    /**
     * clears out any error messages
     */
    async exitOutOfAnyErrorMessages() {
        const errorMessageExists = await this.checkoutErrorCancelButton.isExisting();
        if (errorMessageExists) {
            await this.checkoutErrorCancelButton.click();
        }
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('');
    }
}

module.exports = new CheckoutStepOnePage();
