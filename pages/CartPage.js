const { test, expect } = require('@playwright/test');
class CartPage{
    constructor(){
        this.elementsInsideCart = "//tr[@class='success']"
        this.buttonDelete = "(//a[@href='#'][contains(.,'Delete')])"
    }


    async verifyItemInAcart(){
        console.log("Item catched :"+context.nameitemProduct)
        const elementsInCart = page.locator(this.elementsInsideCart)
        await expect(elementsInCart).toContainText(context.nameitemProduct);
    }

    async deleteItemInCart(){
        await page.waitForSelector(this.elementsInsideCart);
        await page.locator(this.buttonDelete).click()
        const table = page.locator(this.elementsInsideCart)
        await expect(table).toBeHidden(); 
    }
 
 }
 
 module.exports = { CartPage }