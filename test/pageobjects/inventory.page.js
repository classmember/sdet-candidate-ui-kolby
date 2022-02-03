const Page = require('./page');

/**
 * Inventory Page
 *
 * selectors
 *   get secondaryTitle()
 *   get shoppingCart()
 *   get shoppingCartLink()
 *   get firstItemButton()
 *
 * methods:
 *   async shoppingCartHasItems()
 *   async clickAddToCartButtonOnFirstItem()
 *   async clickImageOnSecondItem()
 *   async clickShoppingCartLink()
 */

class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get secondaryTitle() {
        return $('#header_container > div.header_secondary_container > span')
    }

    get shoppingCart() {
        return $('#shopping_cart_container')
    }

    get shoppingCartLink() {
        return $('a.shopping_cart_link')
    }

    get firstItemButton() {
        return $('div.inventory_list > div.inventory_item button')
    }

    /**
     * check if shopping cart is empty by checking for shopping_cart_badge span element
     */
    async shoppingCartHasItems() {
        return this.shoppingCart.includes('class="shopping_cart_badge"');
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
     * clicks the shopping cart link
     */
    async clickShoppingCartLink() {
        await this.shoppingCartLink.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('');
    }
}

module.exports = new InventoryPage();
