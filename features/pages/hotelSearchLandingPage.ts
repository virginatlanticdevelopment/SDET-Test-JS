import {BasePage} from "../pages/basePage";
const basepage: BasePage = new BasePage();
const FIRSTHOTELITEM  = "#search-results > article:nth-child(1)";
const FIRSTHOTELITEMCONTINUEBUTTON  = "#search-results > article:nth-child(1) > div.card-content > div.card-action > a";
const FIRSTHOTELITEMHEADING = "#search-results > article:nth-child(1) > div.card-content > div.card-detail > header > h2";
const WAITTIME = 20000;

export class HotelSearchLandingPage {
    public isFirstHotelItemVisible() {
        return basepage.waitUntilElementLocated(FIRSTHOTELITEM, WAITTIME);
    }

    public getFirstHolidayItemHeading() {
        return basepage.getTextByCss(FIRSTHOTELITEMHEADING);
    }

    public getFirstHotelItemContinueButton() {
        return basepage.getElementByCss(FIRSTHOTELITEMCONTINUEBUTTON);
    }

}
