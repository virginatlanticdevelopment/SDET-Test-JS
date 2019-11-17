import {BasePage} from "./basePage";
const basepage: BasePage = new BasePage();
const FIRSTHOTELITEM  = "div.container.application-contents > div > div";
const FIRSTHOTELITEMBOARDBASISINFO = "div.panel-body.ecms-content > div > h2";
const FIRSTHOTELITEMHEADING = "div:nth-child(1) > h1";
const WAITTIME = 20000;

export class HotelListPage {
    public isFirstHotelItemVisible() {
        return basepage.waitUntilElementVisible(FIRSTHOTELITEM, WAITTIME);
    }

    public getFirstHolidayItemHeading() {
        return basepage.getTextByCss(FIRSTHOTELITEMHEADING);
    }

    public getFirstHolidayItemBoardBasis() {
        return basepage.getElementByCss(FIRSTHOTELITEMBOARDBASISINFO);
    }

    public isFirstHolidayItemBoardBasis() {
        return basepage.waitUntilElementVisible(FIRSTHOTELITEMBOARDBASISINFO, WAITTIME);
    }

}
