const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const ProductPage = require('../pageobjects/product.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutStepOnePage = require('../pageobjects/checkoutStepOne.page')
const CheckoutStepTwoPage = require('../pageobjects/checkoutStepTwo.page')
const CheckoutCompletePage = require('../pageobjects/checkoutComplete.page')

describe('Sauce Demo', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(InventoryPage.secondaryTitle).toHaveTextContaining('PRODUCTS');
    });

    describe('Checkout', () => {
        describe('Checkout using Inventory Page', () => {
            it('should add product to cart when "add to cart" button clicked on inventory page', async () => {
                await InventoryPage.clickAddToCartButtonOnFirstItem();
                await expect(InventoryPage.shoppingCart).toHaveTextContaining('1');
            });

            it('should display cart contents when the shopping cart link is clicked', async () => {
                await ProductPage.clickShoppingCartLink();
                await expect(CartPage.secondaryTitle).toHaveTextContaining('YOUR CART');
            });

            it('should continue to checkout step one when checkout button clicked', async () => {
                await expect(CartPage.cartItems).toBeElementsArrayOfSize(1);
                await CartPage.clickCheckoutButton();
                await expect(CheckoutStepOnePage.secondaryTitle).toHaveTextContaining('CHECKOUT: YOUR INFORMATION');
            });

            it('should error when no information is entered and checkout is clicked', async () => {
                await CheckoutStepOnePage.fillOutStepOneForm('','','');
                await CheckoutStepOnePage.clickContinueButton();
                await expect(CheckoutStepOnePage.checkoutInfo).toHaveTextContaining('Error');
                await CheckoutStepOnePage.exitOutOfAnyErrorMessages();
            });

            it.skip('should error when zip/postal code is not formatted properly', async () => {
                await CheckoutStepOnePage.fillOutStepOneForm('first','last','5');
                await expect(CheckoutStepOnePage.checkoutInfoError).toBeExisting();
                await CheckoutStepOnePage.exitOutOfAnyErrorMessages();
            });

            it('should continue to checkout step two when form is completed', async () => {
                await CheckoutStepOnePage.fillOutStepOneForm('first','last','123456');
                await CheckoutStepOnePage.clickContinueButton();
                await expect(CheckoutStepTwoPage.secondaryTitle).toHaveTextContaining('CHECKOUT: OVERVIEW');
            });

            it('should continue to checkout complete page when order finished', async () => {
                await CheckoutStepTwoPage.clickFinishButton();
                await expect(CheckoutCompletePage.secondaryTitle).toHaveTextContaining('CHECKOUT: COMPLETE!');
            });

            it('should display checkout complete page allowing customer to return to inventory page', async () => {
                await CheckoutCompletePage.clickBackHomeButton();
                await expect(InventoryPage.secondaryTitle).toHaveTextContaining('PRODUCTS');
            });
        });

        describe('Checkout using Product Page', () => {
            it('should add product to cart when "add to cart" button clicked on product page', async () => {
                await InventoryPage.clickImageOnSecondItem();
                await expect(ProductPage.shoppingCart).toHaveTextContaining('1');
            });

            it('should display cart contents when the shopping cart link is clicked', async () => {
                await ProductPage.clickShoppingCartLink();
                await expect(CartPage.secondaryTitle).toHaveTextContaining('YOUR CART');
            });

            it('should continue to checkout step one when checkout button clicked', async () => {
                await expect(CartPage.cartItems).toBeElementsArrayOfSize(1);
                await CartPage.clickCheckoutButton();
                await expect(CheckoutStepOnePage.secondaryTitle).toHaveTextContaining('CHECKOUT: YOUR INFORMATION');
            });

            it('should error when no information is entered and checkout is clicked', async () => {
                await CheckoutStepOnePage.fillOutStepOneForm('','','');
                await CheckoutStepOnePage.clickContinueButton();
                await expect(CheckoutStepOnePage.checkoutInfo).toHaveTextContaining('Error');
                await CheckoutStepOnePage.exitOutOfAnyErrorMessages();
            });

            it.skip('should error when zip/postal code is not formatted properly', async () => {
                await CheckoutStepOnePage.fillOutStepOneForm('first','last','5');
                await expect(CheckoutStepOnePage.checkoutInfoError).toBeExisting();
                await CheckoutStepOnePage.exitOutOfAnyErrorMessages();
            });

            it('should continue to checkout step two when form is completed', async () => {
                await CheckoutStepOnePage.fillOutStepOneForm('first','last','123456');
                await CheckoutStepOnePage.clickContinueButton();
                await expect(CheckoutStepTwoPage.secondaryTitle).toHaveTextContaining('CHECKOUT: OVERVIEW');
            });

            it('should continue to checkout complete page when order finished', async () => {
                await CheckoutStepTwoPage.clickFinishButton();
                await expect(CheckoutCompletePage.secondaryTitle).toHaveTextContaining('CHECKOUT: COMPLETE!');
            });

            it('should display checkout complete page allowing customer to return to inventory page', async () => {
                await CheckoutCompletePage.clickBackHomeButton();
                await expect(InventoryPage.secondaryTitle).toHaveTextContaining('PRODUCTS');
            });
        });
    });
});


