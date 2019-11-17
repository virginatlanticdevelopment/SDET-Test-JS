import {Builder, By,  Key, until } from "selenium-webdriver";
import {BasePage} from "../pages/basePage";

const BASEURL = "https://www.virginholidays.co.uk/";
const SUBMITBUTTON = "#search-panel > div > div > div.sp-tab.sp-selected > form > div.sp-container > div.sp-submit-container > button";
const HOLIDAYTAB = "#search-panel-nav > li:nth-child(1) > button";
const HOTELTAB = "#search-panel-nav > li:nth-child(6) > button";
const SEARCHHEADER = "#app-header";
const WAITTIME = 20000;

const basepage: BasePage = new BasePage();

export class HomePage {

    public  goToHomeURL() {
        return basepage.getURL(BASEURL);
    }

    public getSubmitButton() {
        return basepage.getElementByCss(SUBMITBUTTON);
    }

    public getHolidayTab() {
        return basepage.getElementByCss(HOLIDAYTAB);
    }

    public getHotelTab() {
        return basepage.getElementByCss(HOTELTAB);
    }

    public isSearchHeaderLocated() {
        return  basepage.waitUntilElementLocated(SEARCHHEADER, WAITTIME);
    }

}
