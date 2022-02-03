const Page = require('./page');

/**
 * Product Page
 *
 * selectors:
 *   secondaryTitle()
 *   shoppingCart()
 *   shoppingCartLink()
 *   firstItemButton()
 *
 * methods:
 *   async shoppingCartHasItems()
 *   async clickAddToCartButtonOnFirstItem()
 *   async clickShoppingCartLink()
 */
class ProductPage extends Page {

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

module.exports = new ProductPage();
