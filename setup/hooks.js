const playwright = require('playwright')
require('dotenv').config({path:"env/.env"})
const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber')

BeforeAll(async () => {
  console.log('Launch Browser')
    let browsers = ["chromium","firefox"]
    
    global.browser = await playwright["firefox"].launch(
      {
        headless: false,
        retries: 2,
        reporter: 'html',
        baseURL: "https://demoqa.com"
        
      },
    
    
    )
 

})

// AfterAll(async () => {
//   console.log('Close Browser')
//   await global.browser.close()
// })

Before(async () => {
  console.log('Create new context and page')
  global.context = await global.browser.newContext()
  global.page = await global.context.newPage()

})

// After(async () => {
//   console.log('Close context and page')
//   await global.page.close()
//   await global.context.close()
  
// })
