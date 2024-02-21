class FormPage{

    async visitPage(){
        await page.goto("/")

     
    }
     async typeFirstName(){
        //  await this.inputName.type("CAMILO")
        await this.elements.inputName().type("TEST")
     }

}

module.exports = { FormPage }