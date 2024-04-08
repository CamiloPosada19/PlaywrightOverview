const  { ArticlePage } = require("../../PlaywrightOverview/pages/ArticlesPage")
const  { CartPage } = require("../../PlaywrightOverview/pages/CartPage")
const { test, expect } = require('@playwright/test');

class PageObjectManager{
    
    constructor(){
        this.cartPage = new CartPage()
        this.articlePage = new ArticlePage()

    }

    cartPage(){
        return this.cartPage
    }

    articlePage(){
        return this.articlePage
    }


}

module.exports = { PageObjectManager }