import {Builder, By ,  Key , until } from "selenium-webdriver";

const driver = new Builder().forBrowser("chrome").build();

export class BasePage {

    public  getURL(url: string) {
        return driver.get(url);
    }

    public resizeBrowser(width: number, height: number) {
        return  driver.manage().window().setSize(width, height);
    }
    public waitUntilElementLocated(locator: string, time: number) {
        return driver.wait(until.elementLocated(By.css(locator)), time);
    }

    public waitUntilElementVisible(locator: string, time: number) {
        return driver.wait(until.elementIsVisible(driver.findElement(By.css(locator))), time);
    }

    public waitForPageTitle(title: string) {
        return driver.wait(until.titleContains(title));
    }

    public getTextByCss(locator: string) {
        return driver.findElement(By.css(locator)).getText();
    }

    public getElementByCss(locator: string) {
        return driver.findElement(By.css(locator));
    }

    public getElementById(locator: string) {
        return driver.findElement(By.id(locator));
    }

    public getElementByXpath(locator: string) {
        return driver.findElement(By.xpath(locator));
    }

    public getElementByClass(locator: string) {
        return driver.findElement(By.className(locator));
    }

    public scrollDown() {
        return driver.executeScript("window.scrollTo(0,600)");
    }

    public scrollUp() {
        return driver.executeScript("window.scrollTo(0,-600)");
    }

}
