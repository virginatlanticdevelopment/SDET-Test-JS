"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var basePage_1 = require("../pages/basePage");
var BASEURL = "https://www.virginholidays.co.uk/";
var SUBMITBUTTON = "#search-panel > div > div > div.sp-tab.sp-selected > form > div.sp-container > div.sp-submit-container > button";
var HOLIDAYTAB = "#search-panel-nav > li:nth-child(1) > button";
var HOTELTAB = "#search-panel-nav > li:nth-child(6) > button";
var SEARCHHEADER = "#app-header";
var WAITTIME = 20000;
var basepage = new basePage_1.BasePage();
var HomePage = (function () {
    function HomePage() {
    }
    HomePage.prototype.goToHomeURL = function () {
        return basepage.getURL(BASEURL);
    };
    HomePage.prototype.getSubmitButton = function () {
        return basepage.getElementByCss(SUBMITBUTTON);
    };
    HomePage.prototype.getHolidayTab = function () {
        return basepage.getElementByCss(HOLIDAYTAB);
    };
    HomePage.prototype.getHotelTab = function () {
        return basepage.getElementByCss(HOTELTAB);
    };
    HomePage.prototype.isSearchHeaderLocated = function () {
        return basepage.waitUntilElementLocated(SEARCHHEADER, WAITTIME);
    };
    return HomePage;
}());
exports.HomePage = HomePage;
