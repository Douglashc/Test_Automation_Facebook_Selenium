const {Builder, By, Key, util} = require("selenium-webdriver");
require("chromedriver");

async function TestFacebook()
{
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.facebook.com");
    
    //await driver.findElement(By.name("q")).sendKeys("Selenium Test", Key.RETURN);
}

TestFacebook();