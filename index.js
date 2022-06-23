const {Builder, By, Key, until} = require("selenium-webdriver");
require("chromedriver");

async function TestFacebook()
{
    let driver = await new Builder().forBrowser("chrome").build();
   
    await driver.get("https://www.facebook.com");
    
    await driver.findElement(By.className('_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy')).click();

    await driver.manage().setTimeouts( { implicit: 1000} );
    await driver.findElement(By.name('firstname')).sendKeys('Michael');
    await driver.findElement(By.name("lastname")).sendKeys("Jackson");
    
    
    //await driver.findElement(By.name("q")).sendKeys("Selenium Test", Key.RETURN);
}

TestFacebook();