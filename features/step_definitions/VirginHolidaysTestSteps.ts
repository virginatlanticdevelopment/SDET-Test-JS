import { assert, expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import { Given , setDefaultTimeout, Then, When  } from "cucumber";
import {Builder, By ,  Key , until } from "selenium-webdriver";

let selectedHolidayName: string;
let displayedHolidayName: string;
const driver = new Builder().forBrowser("chrome").build();
setDefaultTimeout(40000);
// chai.use(chaiAsPromised);
Given(/^I am on virgin holidays home page$/, async () => {
    await driver.get("https://www.virginholidays.co.uk/");
    await driver.manage().window().setSize(1600, 900);
});

Given(/^I do a holiday search$/, async () => {
    await driver.findElement(By.css("#search-panel > div > div > div.sp-tab.sp-selected > form > div.sp-container > div.sp-submit-container > button"))
    .click();
    await driver.wait(until.elementLocated(By.css("#app-header")), 25000);
    await driver.executeScript("window.scrollTo(0,600)");

});

When(/^I add a holiday to a hotlist$/, async () => {
    await driver.wait(until.elementLocated(By
        .css("#search-results > article:nth-child(1) > div.card-content > div.card-action > div.vhols-hotlist > a > span.hbc-add-content")), 20000);
    selectedHolidayName = await driver.findElement(By.css("#search-results > article:nth-child(1) > div.card-content > div.card-detail > header > h2")).getText();
    console.log("Selected holiday ==> ", selectedHolidayName);
    await driver.findElement(By.css("#search-results > article:nth-child(1) > div.card-content > div.card-action > div.vhols-hotlist > a ")).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By
        .css("#search-results > article:nth-child(1) > div.card-content > div.card-action > div.vhols-hotlist > a > span.hbc-remove-content-md"))), 20000);
});
Then(/^I can see that the holiday added to the hotlist on top of the page$/, async () => {
    await driver.findElement(By.css("li.mvhtr-entry.mvhtr-hotlist > a ")).click();
    await driver.wait(until.titleContains("Hotlist"));
    displayedHolidayName = await driver.findElement(By.css("section > div:nth-child(1) > div > div.card-block > h4"))
        .getText();
    console.log("Displayed holiday ==> ", displayedHolidayName);
    assert.equal(selectedHolidayName, displayedHolidayName, "Holiday is not included");
    assert.isTrue(await driver.wait(until.titleContains("Hotlist"), 10000));

});
