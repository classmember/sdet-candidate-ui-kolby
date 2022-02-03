const Page = require('./page');

/**
 * Cart Page
 *
 * selectors:
 *   secondaryTitle()
 *   continueShoppingButton()
 *   checkoutButton()
 *   cartItems()
 *
 * methods:
 *   async clickAddToCartButtonOnFirstItem()
 *   async clickImageOnSecondItem()
 *
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get secondaryTitle() {
        return $('#header_container > div.header_secondary_container > span')
    }

    get continueShoppingButton() {
        return $('button#continue-shopping')
    }

    get checkoutButton() {
        return $('button#checkout')
    }

    get cartItems() {
        return $$('div.cart_list > div.cart_item')
    }

    /**
     * clicks purchase button on the first item in the list
     */
    async clickAddToCartButtonOnFirstItem() {
        await this.firstItemButton.click();
    }

    /**
     * clicks image on the second item in the list
     */
    async clickImageOnSecondItem() {
        const items = $('div.inventory_list').$$('div.inventory_item');
        const randomIndex = Math.floor((Math.random() * items.length));
        await items[1].$('div.inventory_item_img > a').click();
        await $('div.inventory_details_desc_container button').click();
    }

    /**
     * clicks the continue shopping button
     */
    async clickContinueShoppingButton() {
        await this.continueShoppingButton.click();
    }

    /**
     * clicks the checkout button
     */
    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('');
    }
}

module.exports = new CartPage();
