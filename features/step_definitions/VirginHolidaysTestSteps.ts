import { assert } from "chai";
import chaiAsPromised from "chai-as-promised";
import { Given , setDefaultTimeout, Then, When  } from "cucumber";
import { BasePage } from "../pages/basePage";
import { HolidaySearchLandingPage } from "../pages/holidaySearchLandingPage";
import { HomePage } from "../pages/homePage";
import { HotListPage } from "../pages/hotListPage";

const basepage: BasePage = new BasePage();
const holidaysearchlandingpage  = new HolidaySearchLandingPage();
const homepage: HomePage = new HomePage();
const hotlistpage: HotListPage = new HotListPage();

let selectedHolidayName: string;
let displayedHolidayName: string;

setDefaultTimeout(40000);

Given(/^I am on virgin holidays home page$/, async () => {
    await homepage.goToHomeURL();
    await basepage.resizeBrowser(1600, 900);
});

Given(/^I do a holiday search$/, async () => {
    await homepage.getSubmitButton().click();
    await homepage.isSearchHeaderLocated();
    await basepage.scrollDown();

});

When(/^I add a holiday to a hotlist$/, async () => {
    await holidaysearchlandingpage.isFirstHolidayItemVisible();
    selectedHolidayName = await holidaysearchlandingpage.getFirstHolidayItemHeading();
    console.log("Selected holiday ==> ", selectedHolidayName);
    await holidaysearchlandingpage.getFirstHolidayItemAddToHotlistLink().click();
    await holidaysearchlandingpage.isFirstHolidayItemRemoveHotlistLinkVisible();
});
Then(/^I can see that the holiday added to the hotlist on top of the page$/, async () => {
    await holidaysearchlandingpage.getHotListLiink().click();
    assert.isTrue(await basepage.waitForPageTitle("Hotlist"));
    await hotlistpage.isFirstHolidayItemVisible();
    displayedHolidayName = await hotlistpage.getFirstHolidayItemHeading();
    assert.equal(selectedHolidayName, displayedHolidayName, "Holiday is not included");
});
