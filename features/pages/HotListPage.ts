import {BasePage} from "../pages/basePage";
const basepage: BasePage = new BasePage();
const WAITTIME = 20000;

const FIRSTHOLIDAYITEMHEADING = "section > div:nth-child(1) > div > div.card-block > h4";

export class HotListPage  {

    public getFirstHolidayItemHeading() {
        return basepage.getTextByCss(FIRSTHOLIDAYITEMHEADING);
    }

    public isFirstHolidayItemVisible() {
        return basepage.waitUntilElementLocated(FIRSTHOLIDAYITEMHEADING, WAITTIME);
    }
}
