const {Builder, By, Key, until, WebElement} = require("selenium-webdriver");
var assert = require("assert");

require("chromedriver");

async function TestFacebook()
{
    let driver = await new Builder().forBrowser("chrome").build();
   
    await driver.get("https://www.facebook.com");
    
    await driver.findElement(By.className('_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy')).click();

    await driver.manage().setTimeouts( { implicit: 1000} );
    await driver.findElement(By.name("firstname")).sendKeys('Mario');
    await driver.findElement(By.name("lastname")).sendKeys("Galindo");
    
    await driver.findElement(By.name("reg_email__")).sendKeys("marioh@gmail.com");
    await driver.findElement(By.name("reg_email_confirmation__")).sendKeys("marioh@gmail.com");

    await driver.findElement(By.name("reg_passwd__")).sendKeys("123456dogs.");
    
    await driver.findElement(By.name("birthday_day")).sendKeys("5");
    await driver.findElement(By.name("birthday_month")).sendKeys("6");
    await driver.findElement(By.name("birthday_year")).sendKeys("1997");

    await driver.findElement(By.xpath("//label[contains(text(),'Hombre')]")).click();

    await driver.findElement(By.name("websubmit")).click();

    await driver.manage().setTimeouts( { implicit: 9000} );
    await driver.findElement(By.name("code")).sendKeys("5555");

    await driver.findElement(By.name('confirm'))
            .getText().then(textValue => {
                assert.equal('Continuar', textValue)
            });
    
    await driver.quit();


}

TestFacebook();