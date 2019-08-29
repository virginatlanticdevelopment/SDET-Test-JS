import {BasePage} from "../pages/basePage";
const basepage: BasePage = new BasePage();

const FIRSTHOLIDAYITEM  = "#search-results > article:nth-child(1) > div.card-content > div.card-action > "
    + "div.vhols-hotlist > a > span.hbc-add-content";
const FIRSTHOLIDAYITEMADDHOTLISTLINK  = "#search-results > article:nth-child(1) > div.card-content > "
    +  "div.card-action > div.vhols-hotlist > a ";
const FIRSTHOLIDAYITEMHEADING = "#search-results > article:nth-child(1) > div.card-content > div.card-detail > header > h2";
const FIRSTHOLIDAYITEMREMOVEHOTLISTLINK = "#search-results > article:nth-child(1) > div.card-content > "
    + "div.card-action > div.vhols-hotlist > a > span.hbc-remove-content-md";
const HOTLISTLINK = "li.mvhtr-entry.mvhtr-hotlist > a ";
const WAITTIME = 20000;

export class HolidaySearchLandingPage {
    public getFirstHolidayItem() {
        return basepage.getElementByCss(FIRSTHOLIDAYITEM);
    }

    public isFirstHolidayItemVisible() {
        return basepage.waitUntilElementLocated(FIRSTHOLIDAYITEM, WAITTIME);
    }

    public getFirstHolidayItemHeading() {
        return basepage.getTextByCss(FIRSTHOLIDAYITEMHEADING);
    }

    public getFirstHolidayItemAddToHotlistLink() {
        return basepage.getElementByCss(FIRSTHOLIDAYITEMADDHOTLISTLINK);
    }

    public getHotListLiink() {
        return basepage.getElementByCss(HOTLISTLINK);
    }

    public isFirstHolidayItemRemoveHotlistLinkVisible() {
        return basepage.waitUntilElementVisible(FIRSTHOLIDAYITEMREMOVEHOTLISTLINK, WAITTIME);
    }

}
