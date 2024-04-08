
class ArticlePage{
      constructor(){
         this.cardTitle = ".card-title"
         this.nameitem = "//h2[@class='name']"
         this.addToCart = "//a[contains(.,'Add to cart')]" 
         this.goTocart = "//a[@class='nav-link'][contains(.,'Cart')]"
      }

   async selectARandomElement(){
      await page.waitForLoadState("domcontentloaded")
      await page.waitForSelector(this.cardTitle);
       const elementInCart = await page.locator(this.cardTitle).count() 
      const minIndex = 0;
      const maxIndex = elementInCart;
      const randomIndex = Math.floor(Math.random() * (maxIndex - minIndex)) + minIndex;
      await page.waitForSelector(this.cardTitle)
      await page.locator(this.cardTitle).nth(randomIndex).click();
      const nameitem = await page.locator(this.nameitem).textContent();
      context.nameitemProduct = nameitem
      console.log(nameitem)
      await page.locator(this.addToCart).click();
      await page.waitForLoadState("networkidle");
      await page.waitForLoadState("domcontentloaded");
   }

   async goTotheCart(){
      await page.locator(this.goTocart).click()
      
      
   }

}

module.exports = { ArticlePage }