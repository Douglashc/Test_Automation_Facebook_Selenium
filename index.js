const {Builder, By, Key, util} = require("selenium-webdriver");
require("chromedriver");

async function TestFacebook()
{
    let driver = await new Builder().forBrowser("chrome").build();
   
    await driver.get("https://www.facebook.com");
    
    await driver.findElement(By.className('_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy')).click();
}

TestFacebook();